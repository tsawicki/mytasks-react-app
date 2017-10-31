import React, { Component } from "react";
import SingleTaskCheckbox from "./SingleTaskCheckbox";
import Swipeable from "react-swipeable";
import PropTypes from "prop-types";
import "../css/SingleTask.css";

const propTypes = {
  key: PropTypes.string.isRequired,
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    val: PropTypes.string.isRequired
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleSwipeRight: PropTypes.func.isRequired,
  handleSwipeLeft: PropTypes.func.isRequired
};

class SingleTask extends Component {
  componentDidMount() {
    this.refs.taskContentRef.onclick = this.handleTaskEdit.bind(this);
  }

  handleTaskEdit(e) {
    if (this.props.task.isDone) {
      return false;
    }
    var taskContent = this.refs.taskContentRef;
    var prevValue = taskContent.innerText;
    var input = document.createElement("input");
    input.type = "text";
    input.value = prevValue;
    taskContent.innerText = "";
    taskContent.parentNode.insertBefore(input, taskContent);
    input.focus();
    input.select();
    input.addEventListener("keydown", function(e) {
      if (e.keyCode === 13) {
        this.blur();
      }
    });
    input.addEventListener(
      "blur",
      function(e) {
        if (input.value) {
          taskContent.innerText = input.value.trim();
        } else {
          taskContent.innerText = prevValue;
        }
        input.parentNode.removeChild(input);
        this.props.handleEdit(this.props.task.id, taskContent.innerText);
      }.bind(this)
    );
  }

  render() {
    return (
      <Swipeable
        onSwipedRight={() => this.props.handleSwipeRight(this.props.task.id)}
        onSwipedLeft={() => this.props.handleSwipeLeft(this.props.task.id)}
      >
        <div
          className={"single-task " + (this.props.task.isDone ? "done" : "")}
        >
          <SingleTaskCheckbox
            task={this.props.task}
            handleClick={this.props.handleClick}
          >
            <p className="task-content" ref="taskContentRef">
              {this.props.task.val}
            </p>
            <a
              href="#delete-link"
              className="delete-link"
              onClick={e => {
                e.preventDefault();
                this.props.handleDelete(this.props.task.id);
              }}
            >
              <i className="fa fa-trash-o" />
            </a>
          </SingleTaskCheckbox>
        </div>
      </Swipeable>
    );
  }
}

SingleTask.PropTypes = propTypes;

export default SingleTask;

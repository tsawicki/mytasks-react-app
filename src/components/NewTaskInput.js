import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/NewTaskInput.css";

const propTypes = {
  onAddNewTask: PropTypes.func.isRequired
};

class NewTaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ""
    };
  }

  handleChange = event => {
    this.setState({ newTask: event.target.value });
  };

  handleNewTaskKeyDown = event => {
    const ENTER_KEY = 13;
    if (event.keyCode !== ENTER_KEY) {
      return;
    }
    event.preventDefault();
    const val = this.state.newTask.trim();
    if (val) {
      const newTask = { id: this.generateUUID(), val, isDone: false };
      this.props.onAddNewTask(newTask);
      this.setState({
        newTask: ""
      });
    }
  };

  generateUUID = () => {
    var d = new Date().getTime();
    if (
      typeof performance !== "undefined" &&
      typeof performance.now === "function"
    ) {
      d += performance.now(); //use high-precision timer if available
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = ((d + Math.random() * 16) % 16) | 0;
      d = Math.floor(d / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
  };

  render() {
    return (
      <input
        aria-label="new task input"
        className="new-task-input"
        placeholder="enter new task"
        value={this.state.newTask}
        onKeyDown={this.handleNewTaskKeyDown}
        onChange={this.handleChange}
        autoFocus={true}
      />
    );
  }
}

NewTaskInput.PropTypes = propTypes;

export default NewTaskInput;

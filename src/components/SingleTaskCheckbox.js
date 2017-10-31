import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/SingleTaskCheckbox.css";

const propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    val: PropTypes.string.isRequired
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

class SingleTaskCheckbox extends Component {
  render() {
    return <div className="check">
        <input id={this.props.task.id} type="checkbox" 
          onChange={() => {
            this.props.handleClick(this.props.task.id);
          }} 
          checked={this.props.task.isDone} />
        <label htmlFor={this.props.task.id}>
          <div className="box-wrapper">
            <div className="box">
              <i className="fa fa-check" />
            </div>
          </div>
        </label>
        {this.props.children}
      </div>;
  }
}

SingleTaskCheckbox.PropTypes = propTypes;

export default SingleTaskCheckbox;

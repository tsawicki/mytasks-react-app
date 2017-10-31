import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/TasksStats.css";


const propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
      val: PropTypes.string.isRequired
    })
  )
};

class TasksStats extends Component {
  render() {
    return (
      this.props.tasks.length > 0 &&
      <div className="tasks-stats">
        <div>
          <span className="badge badge-primary">
            {this.props.tasks.length}
          </span>{" "}
          {this.props.tasks.length === 1 ? "TASK:" : "TASKS:"}
        </div>
        <div className="secondary-stat">
          <span className="badge">
            {this.props.tasks.filter(x => !x.isDone).length}
          </span>{" "}
          ACTIVE
        </div>
        <div className="secondary-stat">
          <span className="badge">
            {this.props.tasks.filter(x => x.isDone).length}
          </span>{" "}
          DONE
        </div>
      </div>
    );
  }
}

TasksStats.propTypes = propTypes;

export default TasksStats;

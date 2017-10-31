import React, { Component } from "react";
import PropTypes from "prop-types";
import TasksStats from "./TasksStats";
import "../css/TasksListHeader.css";

const propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
      val: PropTypes.string.isRequired
    })
  ),
  updateTasks: PropTypes.func.isRequired
};

class TasksListHeader extends Component {
  deleteDoneTasks = e => {
    e.preventDefault();
    var newTasks = Array.from(this.props.tasks);
    newTasks = newTasks.filter(task => !task.isDone);
    this.props.updateTasks(newTasks);
  };

  hasDoneTasks = () => {
    return this.props.tasks.some(task => task.isDone);
  };

  render() {
    return (
      this.props.tasks.length > 0 &&
      <div className="tasks-list-header">
        <TasksStats tasks={this.props.tasks} />
        {this.hasDoneTasks()
          ? <a
              href="#delete-done-tasks"
              className="delete-done-tasks"
              onClick={this.deleteDoneTasks}
            >
              <i className="fa fa-trash-o fa-lg" /> Clear Done
            </a>
          : " "}
      </div>
    );
  }
}

TasksListHeader.PropTypes = propTypes;

export default TasksListHeader;

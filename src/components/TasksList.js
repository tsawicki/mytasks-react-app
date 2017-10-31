import React, { Component } from "react";
import SingleTask from "./SingleTask";
import FlipMove from "react-flip-move";
import PropTypes from "prop-types";
import "../css/TasksList.css";


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


class TasksList extends Component {
  handleSingleTaskClick = taskId => {
    if (!this.props.tasks[this.indexOfTask(taskId)].isDone) {
      this.markTaskAsDone(taskId);
    } else {
      this.markTaskAsUndone(taskId);
    }
  };

  handleSingleTaskDelete = taskId => {
    var newTasks = Array.from(this.props.tasks);
    newTasks.splice(this.indexOfTask(taskId), 1);
    this.props.updateTasks(newTasks);
  };

  handleSingleTaskEdit = (taskId, newVal) => {
    var newTasks = Array.from(this.props.tasks);
    const indexOfTask = this.indexOfTask(taskId);
    newTasks[indexOfTask].val = newVal;
    this.props.updateTasks(newTasks);
  };

  handleSingleTaskSwipeRight = taskId => {
    if (!this.props.tasks[this.indexOfTask(taskId)].isDone) {
      this.markTaskAsDone(taskId);
    }
  };

  handleSingleTaskSwipeLeft = taskId => {
    if (this.props.tasks[this.indexOfTask(taskId)].isDone) {
      this.markTaskAsUndone(taskId);
    }
  };

  markTaskAsDone(taskId) {
    var newTasks = Array.from(this.props.tasks);
    const indexOfTask = this.indexOfTask(taskId);
    newTasks[indexOfTask].isDone = true;
    const currentTask = newTasks[indexOfTask];
    if (newTasks.length > 1) {
      newTasks.splice(indexOfTask, 1);
      newTasks.push(currentTask);
      // this.playSound();
    }
    this.props.updateTasks(newTasks);
  }

  markTaskAsUndone(taskId) {
    var newTasks = Array.from(this.props.tasks);
    const indexOfTask = this.indexOfTask(taskId);
    newTasks[indexOfTask].isDone = false;
    const currentTask = newTasks[indexOfTask];
    if (newTasks.length > 1) {
      newTasks.splice(indexOfTask, 1);
      newTasks.unshift(currentTask);
    }
    this.props.updateTasks(newTasks);
  }

  indexOfTask = taskId => {
    return this.props.tasks.findIndex(task => {
      return task.id === taskId;
    });
  };

  render() {
    return (
      <div>
        <FlipMove
          duration={300}
          easing="ease-out"
          enterAnimation="accordionVertical"
          leaveAnimation="accordionVertical"
        >
          {this.props.tasks.map((task, index) => {
            return (
              <SingleTask
                key={task.id}
                task={task}
                handleClick={this.handleSingleTaskClick}
                handleDelete={this.handleSingleTaskDelete}
                handleEdit={this.handleSingleTaskEdit}
                handleSwipeRight={this.handleSingleTaskSwipeRight}
                handleSwipeLeft={this.handleSingleTaskSwipeLeft}
              />
            );
          })}
        </FlipMove>
      </div>
    );
  }
}

TasksList.propTypes = propTypes;

export default TasksList;

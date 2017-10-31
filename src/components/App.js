import React, { Component } from "react";
import NewTaskInput from "./NewTaskInput";
import TasksStats from "./TasksStats";
import TasksListHeader from "./TasksListHeader";
import TasksList from "./TasksList";

import "../css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    const storedTasks = this.readTasksFromLocalStorage();
    this.state = {
      tasks: storedTasks
    };
  }

  updateTasks = newTasks => {
    this.setState({
      tasks: newTasks
    });
  };

  addNewTask = newTask => {
    var newTasks = Array.from(this.state.tasks);
    newTasks.unshift(newTask);
    this.setState({
      tasks: newTasks
    });
  };

  readTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  }

  saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  }

  render() {
    this.saveTasksToLocalStorage();
    return (
      <div className="App">
        <h2>my tasks:</h2>
        <NewTaskInput onAddNewTask={this.addNewTask} />
        <TasksListHeader
          tasks={this.state.tasks}
          updateTasks={this.updateTasks}
        />
        <TasksList tasks={this.state.tasks} updateTasks={this.updateTasks} />
      </div>
    );
  }
}

export default App;

import React, { useState } from 'react';
import TaskItem from './Taskitem';
import './container.css';

function Container() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task !== '') {
      setTasks((prevTasks) => [...prevTasks, task]);
      setTask('');
    }
  };

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleEditTask = (editedTask) => {
    const updatedTasks = tasks.map((t) => (t === editedTask ? editedTask : t));
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((t) => t !== taskToDelete);
    setTasks(updatedTasks);
  };

  const taskItems = tasks.map((task, index) => (
    <div className="todo-list-content" key={index}>
      <TaskItem task={task} onEdit={handleEditTask} onDelete={handleDeleteTask} />
    </div>
  ));

  return (
    <div className="container">
      <div className="container-header">
        <h2>Your Daily ToDo</h2>
      </div>
      <div className="input-container">
        <input
          type="text"
          name="tasks"
          id="taskinp"
          placeholder="New Task"
          onChange={handleTaskChange}
          value={task}
        />
        <button onClick={handleAddTask}>Add a new Task</button>
      </div>
      <div className="todo-list">
        <h2>ToDo List</h2>
      </div>
      {taskItems}
    </div>
  );
}

export default Container;

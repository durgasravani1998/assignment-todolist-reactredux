
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../store/actions';

const TaskInput = ({ addTask }) => {

   // local state for the task input field
  const [taskName, setTaskName] = useState('');

    // Event handler for input field change
  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };


  // Event handler for adding a new task
  const handleAddTask = () => {

     // Check if the task name is not empty and call addTask action
    if (taskName.trim() !== '') {
      addTask({ id: Date.now(), name: taskName });
      setTaskName('');
    }
  };

  return (
    <div className='newtask'>
      <input
        type="text" className='taskinfo'
        value={taskName}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button className='add' onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default connect(null, { addTask })(TaskInput);

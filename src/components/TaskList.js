import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, toggleTask } from '../store/actions';
import { AiOutlineDelete } from "react-icons/ai";

const TaskList = ({ tasks, deleteTask, toggleTask }) => {

      // Event handler for deleting a task
  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

    // Event handler for toggling the completion status of a task
  const handleToggleTask = (taskId) => {
    toggleTask(taskId);
  };

  return (
    <div className='tasklist'>
    <ul className='taskhead'>
      {tasks.map(task => (
        <li key={task.id} className='task'>

            {/* Checkbox for task completion status */}

          <input
            type="checkbox" className='toggle'
            checked={task.completed}
            onChange={() => handleToggleTask(task.id)}
          />
          
           {/* Task name with strikethrough if completed */}
          <span className='text' style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
          </span>
          
          {/* Delete task button */}
          <div className='buttons'>
          <button  className="delete" onClick={() => handleDeleteTask(task.id)}><i class="fa-solid fa-trash-can-arrow-up"></i> </button>
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
};
{/* <AiOutlineDelete /> */}

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { deleteTask, toggleTask })(TaskList);

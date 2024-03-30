
import './App.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { addTask } from './store/actions';

const App = ({ addTask, tasks }) => {
  
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      storedTasks.forEach(task => addTask(task));
    }
  }, [addTask]);

  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='App'>
    <div className='main'>
      <h1>React To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { addTask })(App);


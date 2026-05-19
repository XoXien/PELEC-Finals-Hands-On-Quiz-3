import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './taskSlice';
import './App.css'; // ✅ Import external CSS

function App() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(inputValue));
    setInputValue('');
  };

  return (
    <div className="container">
      <h1> Your Personal Task Manager </h1>
      
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new task..."
          className="input"
        />
        <button type="submit" className="button">
          Add Task
        </button>
      </form>

      <ul className="task-list">
        {tasks.length === 0 ? (
          <p className="empty-msg">No tasks added yet.</p>
        ) : (
          tasks.map((task, index) => (
            <li key={index} className="task-item">
              {index + 1}. {task}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
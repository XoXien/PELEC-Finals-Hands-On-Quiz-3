import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask } from './taskSlice';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!input.trim()) {
      setError(true);
      return;
    }
    dispatch(addTask(input));
    setInput('');
    setError(false);
  };

  return (
    <div className="app-wrapper">
      <div className="container">
        <h1>Personal Task App</h1>

        <div className="input-row">
          <input
            type="text"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            placeholder="Enter a task..."
          />
          <button onClick={handleAdd}>Add</button>
        </div>

        {error && <p className="error">Task cannot be empty.</p>}

        {tasks.length === 0 ? (
          <p className="empty">No tasks yet.</p>
        ) : (
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id} className="task-card">
                <span>{task.text}</span>
                <button className="del" onClick={() => dispatch(removeTask(task.id))}>✕</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
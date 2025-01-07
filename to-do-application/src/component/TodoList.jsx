import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = async () => {
    if (task.trim() === '') return;

    try {
      const response = await fetch('http://localhost:5000/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: task }),
      });

      if (response.ok) {
        const newTask = await response.json();
        setTasks([...tasks, newTask]);
        setTask('');
      } else {
        console.error('Error adding task:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/task/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTasks(tasks.filter((task) => task._id !== id));
      } else {
        console.error('Error deleting task:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/task');
      if (response.ok) {
        const tasks = await response.json();
        setTasks(tasks);
      } else {
        console.error('Error fetching tasks:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="bg-[#2361cc] min-h-screen w-full flex justify-center overflow-auto">
      <div className="bg-white rounded-lg shadow-lg w-[90%] h-full max-w-[600px] p-6">
        <h1 className="text-center text-3xl font-bold text-[#384d52]">TodoList</h1>
        <div className="mt-6">
          <div className="flex gap-10">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Add a new task"
              className="flex-grow py-3 px-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#2a6ce8]"
            />
            <button
              onClick={addTask}
              className="bg-[#2a6ce8] text-white text-lg px-6 py-3 rounded-lg hover:bg-[#1e5ac1] transition"
            >
              Add
            </button>
          </div>
          <ul className="mt-12 space-y-4">
            {tasks.length === 0 ? (
              <p className="text-gray-500 text-center text-lg py-3 rounded-lg bg-[#c5e0e8]">
                No tasks added.
              </p>
            ) : (
              tasks.map((task) => (
                <li
                  key={task._id}
                  className="flex justify-between items-center text-lg py-3 px-4 bg-[#c5e0e8] rounded-lg shadow"
                >
                  <span className="text-gray-500">{task.title}</span>
                  <button
                    onClick={() => deleteTask(task._id)}
                    className="text-white bg-[#1c1ca3] px-3 py-2 rounded-lg hover:bg-[#17178c] transition"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;

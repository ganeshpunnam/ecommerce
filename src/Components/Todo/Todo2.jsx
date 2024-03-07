import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Todo2.css"; // Import CSS file

const Todo2 = () => {
    const re =useNavigate();
    const [editName, setEditName] = useState('');
    const [tasks, setTasks] = useState([]);
    const [editableIndex, setEditableIndex] = useState(-1);

    const addTask = () => {
        const newTasks = [...tasks, editName];
        setTasks(newTasks);
        setEditName('');
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const editTask = (index) => {
        setEditableIndex(index);
        setEditName(tasks[index]);
    };

    const updateTask = (index) => {
        if (editName.trim() !== '') {
            const updatedTasks = [...tasks];
            updatedTasks[index] = editName;
            setTasks(updatedTasks);
            setEditableIndex(-1);
            setEditName('');
        }
    };
    const handleClick = () => {
        re('/other-page');
        // return <Navigate to="/"/>
      };

    return (
        <div className="container">
            <h1>Todo working</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={editName}
                    onChange={(event) => setEditName(event.target.value)}
                    placeholder="Enter task"
                />
                <button onClick={addTask}>Add</button>
                <button onClick={handleClick}>Go to other page</button>
            </div>
            {tasks.map((task, index) => (
                <div className="task" key={index}>
                    {editableIndex === index ? (
                        <div>
                            <input
                                type="text"
                                value={editName}
                                onChange={(event) => setEditName(event.target.value)}
                            />
                            <button onClick={() => updateTask(index)}>Update</button>
                        </div>
                    ) : (
                        <div>{task}</div>
                    )}
                    <div>
                        <button className="edit" onClick={() => editTask(index)}>Edit</button>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Todo2;

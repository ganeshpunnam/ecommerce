import React, { useState } from "react";

const TodoName = () => {
  const [name, setName] = useState('');
  const [rendername, setRenderName] = useState([]);

  const addName = () => {
    if (name.trim() !== '') {
      const updatedNames = [...rendername, name];
      setRenderName(updatedNames);
      setName('');
    }
  };

  const editName = (index) => {
    setName(rendername[index]);
    setRenderName(rendername.filter((_, i) => i !== index));
  };

  const deleteName = (index) => {
    setRenderName(rendername.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
        <button onClick={addName}>Add</button>
      </div>
      <ul>
        {rendername.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => editName(index)}>Edit</button>
            <button onClick={() => deleteName(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoName;

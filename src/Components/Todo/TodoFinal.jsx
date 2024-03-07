import React, { useState } from "react";
import { Link } from "react-router-dom";

const Todofinal = () => {
    const [name, setName] = useState('');
    const [names, setNames] = useState([]);
    const [editableIndex, setEditableIndex] = useState(-1);

    const add = () => {
        setNames([...names, name]);
        setName('')
    };

    const updateTask = (index) => {
        const updatename = [...names]
        updatename[index] = names
        setName(updatename)
        setEditableIndex(-1)
    };

    const getDel = (index) => {
        const data = names.filter((_, i) => i !== index)
        setNames(data)

    };

    const edittask = (index) => {
        setEditableIndex(index)
        setName(names[index])

    };

    return (
        <div>
            <Link to="login">login</Link>
            <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter Name" />
            <button onClick={add}>Add</button>
            {names.map((task, index) => (
                <div className="mainc" key={index}>
                    {editableIndex === index ? (
                        <div>
                            <input value={name} onChange={(event) => setName(event.target.value)} />
                            <button onClick={() => updateTask(index)}>Update</button>
                        </div>
                    ) : (
                        <div>{task}</div>
                    )}
                    <button onClick={() => edittask(index)}>Edit</button>
                    <button onClick={() => getDel(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Todofinal;

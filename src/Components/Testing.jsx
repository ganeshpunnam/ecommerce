import React, { useState } from 'react';

const Testing = () => {
    const [data, setData] = useState(false);
    const [num, setNum] = useState('');
    const[total , setTotal] =useState(0);

    const renders = () => {
        setData(prevData => !prevData);
        console.log(data);
        console.log(eval(5+5))
    };

    const handleInput = (event) => {
        setNum(prevNum => prevNum +  event.target.className);
        console.log(num);
    };

    const calculateResult = () => {
         
        setTotal(eval(num.toString()));

            
        
    };

    return (
        <div>
            <button onClick={renders}>Toggle</button>
            {data && <h1>It's working</h1>}
            <button className="9" onClick={handleInput}>9</button>
            <button className="5" onClick={handleInput}>5</button>
            <button className="/" onClick={handleInput}>/</button>
            <button className="*" onClick={handleInput}>*</button>
            <button className="-" onClick={handleInput}>-</button>
            <button className="+" onClick={handleInput}>+</button>
            <button className="calculate" onClick={calculateResult}>=</button>
            <div>{num}</div>
            <h3>{total}</h3>
        </div>
    );
};

export default Testing;

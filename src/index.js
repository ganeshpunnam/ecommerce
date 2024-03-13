import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Cheek1 from './Components/Reactproject1';
import Method1 from './Components/Reactproject1';
import Method2 from './Components/Fetchdata';
import TodoName from './Components/Todo/Todomain';
import Todo2 from './Components/Todo/Todo2';
import Todofinal from './Components/Todo/TodoFinal';
import Testing from './Components/Testing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />
  {/* <Testing/> */}
    {/* <h1>App Design</h1> */}
    {/* <Cheek1/> */}
   {/* <Method2/>
   <Todo2/>
   <Todofinal/> */}
    {/* <TodoName/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todofinal from './Components/Todo/TodoFinal';
import Todo2 from './Components/Todo/Todo2';
import Login from './Components/login'
import Register from './Components/Register';
import Home  from './Components/Home';
import Fetchdata from './Components/Fetchdata';
import Profile from './Components/Profile';
import AddtoCart from './Components/AddtoCart';
import { useState } from 'react';
import CheckoutForm from './Components/CheckoutForm';
import PaymentPage from './Components/PaymentPage';
import PaymentSuccessPage from './Components/PaymentSuccessPage';
function App() {
  const[data , setData] = useState([]);
      const Method =(product)=>(
        setData([...data,product])
      )

 

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Todo2 />} />
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Home' element={<Home Method={Method}/>}/>
        <Route path='Home2' element={<Fetchdata />}/>
        <Route path="/Profile" element={<Profile />} />
      <Route path='/AddtoCart' element={<AddtoCart data={data}/>}/>
      <Route path='/CheckoutForm' element={<CheckoutForm/>}/>
      <Route path='/PaymentPage' element={<PaymentPage/>}/>
      <Route path='/PaymentSuccessPage' element={<PaymentSuccessPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

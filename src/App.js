import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todofinal from './Components/Todo/TodoFinal';
import Todo2 from './Components/Todo/Todo2';
import Login from './Components/login'
import Register from './Components/Register';
import Home  from './Components/Home';
import Fetchdata from './Components/Fetchdata';
import Profile from './Components/Profile';
import AnotherComponent from './Components/AddtoCart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Todo2 />} />
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='Home2' element={<Fetchdata/>}/>
        <Route path="/Profile" element={<Profile />} />
        <Route path='/AddtoCart' element={<AnotherComponent/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './elements/Home';
import Login from './ui-component/Login';
import Main from './ui-component/Main';
import AdminHome from './elements/AdminHome';
import Addemp from './elements/Addemp';


function App() {
  return (
    <div className="App">

<Routes>
<Route path='/employee' element={<Main child={<Home/>}/>} />
<Route path='/admin' element={<Main child={<AdminHome/>}/>} />
    
<Route path="/empform" element={<Addemp/>} />



<Route path='/' element={<Login/>}  />



</Routes>



    </div>
  );
}

export default App;

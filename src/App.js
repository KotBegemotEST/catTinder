import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Forgot from "./components/Forgot"
import Login from "./components/Login"
import Searching from "./Searching"
import Sendler from "./components/Sendler"
import Profiil from "./Profiil"
import Message from "./Message"
import User from "./User"

function App() {
  return (

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </header>
    // </div>

  <Routes>
    <Route path="/"   element={<Login/>}/>
    <Route path="/forgot"  element={<Forgot/>}/>
    <Route path="/searching"  element={<Searching/>}/>
    <Route path="/Profiil"  element={<Profiil/>}/>
    <Route path="/message"  element={<Message/>}/>
    <Route path="/send"  element={<Sendler/>}/>
    <Route path="/user"  element={<User/>}/>
  </Routes> 


  );
}

export default App;

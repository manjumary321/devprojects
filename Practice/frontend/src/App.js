import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import './app.css';
import Login from './googlelogin.js';
import Login2 from './googlelogin2.js';
import Loginhook from './googleloginhook.js';
import Fblogin from './fblogin.js';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/Loginhook" element={<Loginhook/>}></Route>
          
          <Route path="/login2" element={<Login2/>}></Route>
          <Route path="/Fblogin" element={<Fblogin/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

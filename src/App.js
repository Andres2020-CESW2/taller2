import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import Game from './pages/Game';
import 'antd/dist/antd.css'
import { useState,useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

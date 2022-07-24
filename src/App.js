import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import Game from './pages/Game';
import 'antd/dist/antd.css'
import { useState,useEffect } from 'react';
import {IdProvider} from './context/IdProvider';
import { RepartirProvider } from './context/RepartirProvider';

function App() {
  return (
    <IdProvider>
      <RepartirProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </BrowserRouter>
      </RepartirProvider>
    </IdProvider>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Navigate, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import Game from './pages/Game';

function App() {
  return (
    <BrowserRouter>
      <Link to="/home">
        <a>
          Ir a Home
        </a>
      </Link>
      <br />
      <Link to="/game">
        <a>
          Ir al Juego
        </a>
      </Link>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

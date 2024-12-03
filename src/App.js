import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import People from './components/People';
import Pokedex from './components/Pokedex';
import Sprites from './components/pokedex/Sprites';
import Home from './components/Home';
import './index.css';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/people" element={<People />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/sprites/:id" element={<Sprites />} />
            </Routes>
        </Router>
    );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import People from './components/People';
import ProductDetails from './components/ProductDetails';
import Home from './components/Home';
import './index.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/people" element={<People />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
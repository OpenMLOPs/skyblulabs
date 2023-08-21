import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Careers from './pages/careers/careers.jsx';
import About from './pages/about/about.jsx';

const App = () => {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
};

export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './home/Home'
import About from './about/About.jsx'
import Erreur404 from "./404/404.jsx";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Erreur404 />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

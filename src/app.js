import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Draft from './pages/Draft';
import Rankings from './pages/Rankings';
import Sync from './pages/Sync';
import Optimizer from './pages/Optimizer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/draft" element={<Draft />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/sync" element={<Sync />} />
          <Route path="/optimizer" element={<Optimizer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

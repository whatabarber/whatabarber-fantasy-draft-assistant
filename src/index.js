import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Draft from './pages/Draft.jsx';
import Optimizer from './pages/Optimizer.jsx';
import Rankings from './pages/Rankings.jsx';
import Sync from './pages/Sync.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/draft" element={<Draft />} />
        <Route path="/optimizer" element={<Optimizer />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/sync" element={<Sync />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

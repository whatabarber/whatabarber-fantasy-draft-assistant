import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div className="font-bold text-xl">Whatabarber's Fantasy Draft Assistant</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/draft" className="hover:underline">Draft</Link>
        <Link to="/rankings" className="hover:underline">Rankings</Link>
        <Link to="/sync" className="hover:underline">Sync</Link>
        <Link to="/optimizer" className="hover:underline">Optimizer</Link>
      </div>
    </nav>
  );
}

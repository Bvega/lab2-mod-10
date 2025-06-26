import React from 'react';
import { PaginationDemo } from './components/PaginationDemo';
import { DebounceSearchDemo } from './components/DebounceSearchDemo';
import './App.css';

export default function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Lab 2: Custom Hooks Demo</h1>

      <div className="card">
        <h2 className="section-title">Pagination Demo</h2>
        <PaginationDemo />
      </div>

      <div className="card">
        <h2 className="section-title">Debounce Search Demo</h2>
        <DebounceSearchDemo />
      </div>
    </div>
  );
}

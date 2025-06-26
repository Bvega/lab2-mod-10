// src/App.tsx
import React from 'react';
import PaginationDemo from './components/PaginationDemo';
import DebounceSearchDemo from './components/DebounceSearchDemo';

const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      {/* Application Title */}
      <h1>Lab 2: Custom Hooks Implementation</h1>

      {/* Pagination Demo Section */}
      <section style={{ margin: '2rem 0' }}>
        <h2>1. Pagination Demo</h2>
        <PaginationDemo />
      </section>

      {/* Debounce Search Demo Section */}
      <section style={{ margin: '2rem 0' }}>
        <h2>2. Debounce Search Demo</h2>
        <DebounceSearchDemo />
      </section>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';

export function DebounceSearchDemo() {
  const [input, setInput] = useState('');
  const debounced = useDebounce(input, 500);

  useEffect(() => {
    if (debounced) {
      console.log(`Searching for: ${debounced}`);
    }
  }, [debounced]);

  return (
    <div>
      <h2>Debounce Search Demo</h2>
      <label>
        Debounce Delay (ms):
        <input type="number" defaultValue={500} onChange={e => {/* handle delay change if desired */}} />
      </label>
      <input
        type="text"
        placeholder="Type to search..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <p>Current Input: {input}</p>
      <p>Debounced Value (after 500ms): {debounced}</p>
    </div>
  );
}

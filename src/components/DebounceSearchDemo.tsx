import React, { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';

export function DebounceSearchDemo() {
  const [input, setInput] = useState('');
  const [delay, setDelay] = useState(500);
  const debounced = useDebounce(input, delay);

  useEffect(() => {
    if (debounced) {
      console.log(`Searching for: ${debounced}`);
    }
  }, [debounced]);

  return (
    <div>
      <label style={{ display: 'block', marginBottom: '1rem' }}>
        Debounce Delay (ms):&nbsp;
        <input
          type="number"
          min={0}
          step={100}
          value={delay}
          onChange={e => setDelay(Number(e.target.value))}
        />
      </label>

      <label style={{ display: 'block', marginBottom: '1rem' }}>
        Search:&nbsp;
        <input
          type="text"
          placeholder="Type to search..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </label>

      <p>Current Input: {input || <em>(empty)</em>}</p>
      <p>Debounced Value: {debounced || <em>(waiting…)</em>}</p>
    </div>
  );
}

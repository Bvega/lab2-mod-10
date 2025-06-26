import React, { useState } from 'react';
import { usePagination } from '../hooks/usePagination';

export function PaginationDemo() {
  const totalItems = 123;
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
    setPage,
  } = usePagination({ totalItems, itemsPerPage });

  const items = Array
    .from({ length: totalItems }, (_, i) => `Item ${i + 1}`)
    .slice(startIndex, endIndex + 1);

  return (
    <div>
      <label style={{ display: 'block', marginBottom: '1rem' }}>
        Items per page:&nbsp;
        <select
          value={itemsPerPage}
          onChange={e => setItemsPerPage(Number(e.target.value))}
        >
          {[5, 10, 20, 50].map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </label>

      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>

      <div style={{ marginTop: '1rem' }}>
        <button className="button" onClick={prevPage} disabled={!canPrevPage}>
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button className="button" onClick={nextPage} disabled={!canNextPage}>
          Next
        </button>
      </div>

      <div style={{ marginTop: '1rem' }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className="button"
            onClick={() => setPage(i + 1)}
            disabled={currentPage === i + 1}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <p style={{ marginTop: '1rem' }}>
        Showing items {startIndex + 1}–{endIndex + 1} (Total on this page: {itemsOnCurrentPage})
      </p>
    </div>
  );
}

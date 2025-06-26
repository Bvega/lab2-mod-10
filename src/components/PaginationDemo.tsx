import React from 'react';
import { usePagination } from '../hooks/usePagination';

export function PaginationDemo() {
  const totalItems = 123;
  const { currentPage, totalPages, startIndex, endIndex, itemsOnCurrentPage, nextPage, prevPage, canNextPage, canPrevPage, setPage } =
    usePagination({ totalItems, itemsPerPage: 10 });

  const items = Array.from({ length: totalItems }, (_, i) => `Item ${i + 1}`).slice(startIndex, endIndex + 1);

  return (
    <div>
      <h2>Pagination Demo</h2>
      <p>Total Items: {totalItems}</p>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={prevPage} disabled={!canPrevPage}>Previous</button>
      <span> Page {currentPage} of {totalPages} </span>
      <button onClick={nextPage} disabled={!canNextPage}>Next</button>
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setPage(i + 1)} disabled={currentPage === i + 1}>
            {i + 1}
          </button>
        ))}
      </div>
      <p>Showing items {startIndex + 1}–{endIndex + 1} (Total on this page: {itemsOnCurrentPage})</p>
    </div>
  );
}

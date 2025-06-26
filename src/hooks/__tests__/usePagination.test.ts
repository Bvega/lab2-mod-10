import { renderHook, act } from '@testing-library/react-hooks';
import { usePagination } from '../usePagination';

describe('usePagination hook', () => {
  it('handles zero items', () => {
    const { result } = renderHook(() => usePagination({ totalItems: 0 }));
    expect(result.current.totalPages).toBe(0);
    expect(result.current.currentPage).toBe(1);
    expect(result.current.startIndex).toBe(0);
    expect(result.current.endIndex).toBe(-1);
    expect(result.current.itemsOnCurrentPage).toBe(0);
    expect(result.current.canNextPage).toBe(false);
    expect(result.current.canPrevPage).toBe(false);
  });

  it('calculates pages correctly with defaults', () => {
    const { result } = renderHook(() => usePagination({ totalItems: 25 }));
    expect(result.current.totalPages).toBe(3);
    expect(result.current.startIndex).toBe(0);
    expect(result.current.endIndex).toBe(9);
    expect(result.current.itemsOnCurrentPage).toBe(10);
  });

  it('nextPage and prevPage update currentPage within bounds', () => {
    const { result } = renderHook(() => usePagination({ totalItems: 25 }));
    act(() => result.current.nextPage());
    expect(result.current.currentPage).toBe(2);
    expect(result.current.canPrevPage).toBe(true);

    act(() => result.current.prevPage());
    expect(result.current.currentPage).toBe(1);
    expect(result.current.canPrevPage).toBe(false);
  });

  it('setPage clamps to [1, totalPages]', () => {
    const { result } = renderHook(() => usePagination({ totalItems: 15, itemsPerPage: 5 }));
    act(() => result.current.setPage(5));
    expect(result.current.currentPage).toBe(3);
    act(() => result.current.setPage(0));
    expect(result.current.currentPage).toBe(1);
  });

  it('last page has correct start/end indices', () => {
    const { result } = renderHook(() => usePagination({ totalItems: 12, itemsPerPage: 5 }));
    act(() => result.current.setPage(3));
    expect(result.current.startIndex).toBe(10);
    expect(result.current.endIndex).toBe(11);
    expect(result.current.itemsOnCurrentPage).toBe(2);
  });
});

// src/hooks/__tests__/useDebounce.test.ts
import { renderHook, act } from '@testing-library/react-hooks';
import { useDebounce } from '../useDebounce';

describe('useDebounce hook', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('initially returns the immediate value and updates after the specified delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'hello', delay: 500 },
      }
    );

    expect(result.current).toBe('hello');

    rerender({ value: 'world', delay: 500 });

    act(() => {
      vi.advanceTimersByTime(499);
    });
    expect(result.current).toBe('hello');

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(result.current).toBe('world');
  });

  it('cancels previous timer when value changes rapidly', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'A', delay: 300 },
      }
    );

    rerender({ value: 'B', delay: 300 });
    act(() => {
      vi.advanceTimersByTime(200);
    });
    rerender({ value: 'C', delay: 300 });

    act(() => {
      vi.advanceTimersByTime(200);
    });
    expect(result.current).toBe('A');

    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(result.current).toBe('C');
  });

  it('respects changes in delay parameter', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'X', delay: 100 },
      }
    );

    rerender({ value: 'Y', delay: 200 });

    act(() => {
      vi.advanceTimersByTime(150);
    });
    expect(result.current).toBe('X');

    act(() => {
      vi.advanceTimersByTime(50);
    });
    expect(result.current).toBe('Y');
  });
});

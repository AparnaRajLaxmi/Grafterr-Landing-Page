import { useState, useCallback, useEffect, useRef } from 'react';

export const useCarousel = (items = [], itemsPerView = 1) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX   = useRef(null);

  const maxIndex = Math.max(0, items.length - itemsPerView);

  const goNext = useCallback(() =>
    setCurrentIndex((p) => Math.min(p + 1, maxIndex)), [maxIndex]);

  const goPrev = useCallback(() =>
    setCurrentIndex((p) => Math.max(p - 1, 0)), []);

  useEffect(() => {
    setCurrentIndex((p) => Math.min(p, maxIndex));
  }, [maxIndex]);

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev();
    touchStartX.current = null;
    touchEndX.current   = null;
  }, [goNext, goPrev]);

  return {
    currentIndex,
    goNext, goPrev,
    isAtStart: currentIndex === 0,
    isAtEnd:   currentIndex >= maxIndex,
    handleTouchStart, handleTouchMove, handleTouchEnd,
  };
};
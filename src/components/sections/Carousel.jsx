import { useState, useEffect } from 'react';
import { useCarousel } from '../../hooks/useCarousel';
import ProductCard from '../ui/ProductCard';
import styles from './Carousel.module.css';

const useItemsPerView = () => {
  const getCount = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640)  return 2;
    return 1;
  };
  const [count, setCount] = useState(getCount);
  useEffect(() => {
    const handler = () => setCount(getCount());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return count;
};

const Carousel = ({ products }) => {
  const itemsPerView = useItemsPerView();
  const {
    currentIndex, goNext, goPrev, isAtStart, isAtEnd,
    handleTouchStart, handleTouchMove, handleTouchEnd,
  } = useCarousel(products, itemsPerView);

  const trackStyle = {
    transform: `translateX(calc(-${currentIndex} * (100% / ${itemsPerView})))`,
    transition: 'transform var(--transition-carousel)',
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.viewport}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.track} style={trackStyle}>
          {products.map((product) => (
            <div
              key={product.id}
              className={styles.slide}
              style={{ flex: `0 0 calc(100% / ${itemsPerView})` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button
          className={`${styles.arrow} ${isAtStart ? styles.disabled : ''}`}
          onClick={goPrev}
          disabled={isAtStart}
          aria-label="Previous product"
        >
          ←
        </button>
        <div className={styles.dots}>
          {products.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === currentIndex ? styles.activeDot : ''}`}
            />
          ))}
        </div>
        <button
          className={`${styles.arrow} ${isAtEnd ? styles.disabled : ''}`}
          onClick={goNext}
          disabled={isAtEnd}
          aria-label="Next product"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Carousel;
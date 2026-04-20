import GradientText from '../ui/GradientText';
import Skeleton from '../ui/Skeleton';
import Carousel from './Carousel';
import styles from './FeaturesSection.module.css';

const FeaturesSkeleton = () => (
  <section className={styles.section}>
    <div className="container">
      <div className={styles.header}>
        <Skeleton width="60%" height="3rem" borderRadius="12px" />
        <Skeleton width="40%" height="1.25rem" borderRadius="8px" style={{ marginTop: '1rem' }} />
      </div>
      <div className={styles.skeletonGrid}>
        {[1,2,3].map((i) => (
          <Skeleton key={i} width="100%" height="420px" borderRadius="20px" />
        ))}
      </div>
    </div>
  </section>
);

const FeaturesSection = ({ data, loading }) => {
  if (loading || !data) return <FeaturesSkeleton />;

  return (
    <section className={styles.section} id="products">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            {data.titlePrefix}{' '}
            <GradientText>{data.titleAccent}</GradientText>
          </h2>
          <div className={styles.dividerRow}>
            <div className={styles.divider} />
            <p className={styles.subtitle}>{data.subtitle}</p>
            <div className={styles.divider} />
          </div>
        </div>
        <Carousel products={data.products} />
      </div>
    </section>
  );
};

export default FeaturesSection;
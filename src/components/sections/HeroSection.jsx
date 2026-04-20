import GradientText from '../ui/GradientText';
import GradientButton from '../ui/GradientButton';
import FloatingShape from '../ui/FloatingShape';
import Skeleton from '../ui/Skeleton';
import styles from './HeroSection.module.css';

const HeroSkeleton = () => (
  <section className={styles.hero}>
    <div className={`container ${styles.content}`}>
      <Skeleton width="140px" height="2rem" borderRadius="999px" />
      <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Skeleton width="90%" height="4rem" borderRadius="12px" />
        <Skeleton width="70%" height="4rem" borderRadius="12px" />
        <Skeleton width="50%" height="4rem" borderRadius="12px" />
      </div>
      <Skeleton width="70%" height="1.5rem" borderRadius="8px" style={{ marginTop: '1.5rem' }} />
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
        <Skeleton width="160px" height="52px" borderRadius="999px" />
        <Skeleton width="140px" height="52px" borderRadius="999px" />
      </div>
    </div>
  </section>
);

const HeroSection = ({ data, loading }) => {
  if (loading || !data) return <HeroSkeleton />;

  const { hero } = data;

  return (
    <section className={styles.hero}>
      {/* Decorative floating shapes */}
      <FloatingShape type="circle" color="#14B8A6" size={120}
        style={{ top: '15%', right: '8%' }} animationClass="normal" />
      <FloatingShape type="rectangle" color="#FB7185" width={80} height={140}
        style={{ bottom: '20%', right: '3%' }} animationClass="reverse" />
      <FloatingShape type="circle" color="#3B82F6" size={60}
        style={{ top: '60%', left: '2%' }} animationClass="normal" />

      <div className={`container ${styles.content}`}>
        {hero.badge && (
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            {hero.badge}
          </div>
        )}

        <h1 className={styles.headline}>
          {hero.headlinePrefix}{' '}
          <GradientText>{hero.headlineGradient}</GradientText>
          {hero.headlineSuffix && <> {hero.headlineSuffix}</>}
        </h1>

        <p className={styles.subheadline}>{hero.subheadline}</p>

        <div className={styles.ctas}>
          <GradientButton href={hero.cta.primary.href} variant="primary">
            {hero.cta.primary.label}
          </GradientButton>
          <GradientButton href={hero.cta.secondary.href} variant="secondary">
            {hero.cta.secondary.label}
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
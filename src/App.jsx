import { useContent } from './hooks/useContent';
import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import styles from './App.module.css';

const ErrorState = ({ message, onRetry }) => (
  <div className={styles.errorWrap}>
    <div className={styles.errorBox}>
      <span className={styles.errorIcon}>⚠️</span>
      <h2 className={styles.errorTitle}>Something went wrong</h2>
      <p className={styles.errorMsg}>{message}</p>
      <button className={styles.retryBtn} onClick={onRetry}>Try Again</button>
    </div>
  </div>
);

const App = () => {
  const { heroData, featuresData, loading, error, retry } = useContent();

  if (error) return <ErrorState message={error} onRetry={retry} />;

  return (
    <>
      <Navbar data={heroData?.navigation} />
      <main>
        <HeroSection data={heroData} loading={loading} />
        <FeaturesSection data={featuresData} loading={loading} />
      </main>
    </>
  );
};

export default App;
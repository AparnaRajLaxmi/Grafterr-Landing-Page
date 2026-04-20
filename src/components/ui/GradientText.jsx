import styles from './GradientText.module.css';

const GradientText = ({ children, className = '' }) => (
  <span className={`${styles.gradientText} ${className}`}>{children}</span>
);

export default GradientText;
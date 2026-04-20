import styles from './GradientButton.module.css';

const GradientButton = ({ children, href, variant = 'primary', className = '', onClick }) => {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={onClick} className={`${styles.btn} ${styles[variant]} ${className}`}>
      <span className={styles.label}>{children}</span>
    </Tag>
  );
};

export default GradientButton;
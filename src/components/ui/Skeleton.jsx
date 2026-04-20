import styles from './Skeleton.module.css';

const Skeleton = ({ width = '100%', height = '1rem', borderRadius = '8px', className = '' }) => (
  <div
    className={`${styles.skeleton} ${className}`}
    style={{ width, height, borderRadius }}
    aria-hidden="true"
  />
);

export default Skeleton;
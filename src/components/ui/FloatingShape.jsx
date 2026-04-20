import styles from './FloatingShape.module.css';

const FloatingShape = ({ type = 'circle', color, size, width, height, style = {}, animationClass }) => {
  const shapeStyle = {
    background: color,
    ...(type === 'circle'
      ? { width: size, height: size, borderRadius: '50%' }
      : { width: width || 80, height: height || 140, borderRadius: '16px' }),
    ...style,
  };

  return (
    <div
      className={`${styles.shape} ${animationClass === 'reverse' ? styles.reverse : styles.normal}`}
      style={shapeStyle}
      aria-hidden="true"
    />
  );
};

export default FloatingShape;
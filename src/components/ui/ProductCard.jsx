import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { name, tagline, description, gradient, accentColor, icon, features } = product;
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap} style={{ background: gradient }}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <div className={styles.body}>
        <p className={styles.tagline} style={{ color: accentColor }}>{tagline}</p>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.features}>
          {features.map((f) => (
            <li key={f} className={styles.feature}>
              <span className={styles.featureDot} style={{ background: accentColor }} />
              {f}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.glowBar} style={{ background: gradient }} />
    </div>
  );
};

export default ProductCard;
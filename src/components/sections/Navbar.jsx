import styles from './Navbar.module.css';
import GradientButton from '../ui/GradientButton';

const Navbar = ({ data }) => (
  <nav className={styles.nav}>
    <div className={`container ${styles.inner}`}>
      <a href="/" className={styles.logo}>{data?.logo?.text || 'grafterr'}</a>
      <ul className={styles.links}>
        {data?.links?.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`} className={styles.link}>{link.label}</a>
          </li>
        ))}
      </ul>
      <GradientButton href={data?.cta?.href || '#'} variant="primary">
        {data?.cta?.label || 'Get Started'}
      </GradientButton>
    </div>
  </nav>
);

export default Navbar;
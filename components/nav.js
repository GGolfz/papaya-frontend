import styles from "../styles/About.module.css";
import Link from "next/link";
const Nav = () => {
  return (
    <div className={styles.nav_container}>
      <div className={styles.name_div}>
        <span>Papaya</span>
        <span
          className={styles.special}
        >
          PogPog
        </span>
      </div>
      <div className={styles.action_div}>
        <Link href="/">
          <a className={styles.menu_txt}>Home</a>
        </Link>
        <Link href="/about">
          <a className={styles.menu_txt}>About</a>
        </Link>
        <Link href="/demo">
          <a className={styles.demo_btn}> Demo</a>
        </Link>
      </div>
    </div>
  );
};
export default Nav;

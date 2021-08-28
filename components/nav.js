import styles from "../styles/Nav.module.css";
import Link from "next/link";
import { useState } from "react";
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.nav_container}>
      <div className={styles.name_div}>
        <span>Papaya</span>
        <span className={styles.special}>PogPog</span>
      </div>
      <div
        className={`${styles.hamburger} ${open ? styles.open : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${styles.action_div} ${open ? styles.open : ""}`}>
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

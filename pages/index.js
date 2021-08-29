import Nav from "../components/nav";
import { Fragment } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <Fragment>
      <div className={styles.home}>
        <Nav />
        <div className={styles.container}>
          <div className={styles.container_classify}>
            <div>
              <span className={styles.name}>Classify Your</span>
              <span className={styles.name_special}> Papaya</span>
            </div>
            <div className={styles.detail}>
              <div>
                AI for classification the papaya
                <br />
                by the ripeness of papaya.
              </div>
            </div>
            <div className={styles.btn_box}>
              <div className={styles.btn_getStarted}>
                <Link href="/demo">
                  <a>Get Started</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bg_home}></div>
      </div>
    </Fragment>
  );
};
export default Home;

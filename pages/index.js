import Nav from "../components/nav";
import { Fragment } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import saly from "../components/images/saly.png";

const Home = () => {
  return (
    <Fragment>
      <div className={styles.bg_home}>
        <Nav />
        <div className={styles.container}>
          <div className={styles.container_classify}>
            <span className={styles.name}>Classify Your</span>
            <span className={styles.name_special}> Papaya</span>

            <div className={styles.detail}>
              <p>
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit,
              </p>
            </div>
            <Link href="/demo">
              <a className={styles.btn_getStarted}>Get Started</a>
            </Link>
          </div>

          <div className={styles.photo_saly}>
            <Image src={saly} width={800} height={695}></Image>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Home;

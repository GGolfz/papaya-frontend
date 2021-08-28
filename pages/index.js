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

          <div className={styles.photo_saly}>
            <Image src={saly} width={600} height={520}></Image>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Home;

import Head from "next/head";
import Image from "next/image";
import UploadIcon from "../components/icons/upload";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Papaya PogPog</title>
        <meta name="description" content="Papaya PogPog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Papaya Pog Pog!</a>
        </h1>

        <p className={styles.description}>Get started by upload your image</p>

        <div className={styles.grid}>
          <div className={styles.card}>
          <UploadIcon />
            <h2>
              Upload Papaya Image{" "} 
            </h2>
            
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className={styles.logo}>GGolfz</span>
        </a>
      </footer>
    </div>
  );
}

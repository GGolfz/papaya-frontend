import Head from "next/head";
import { useState, useEffect, Fragment } from "react";
import UploadIcon from "../components/icons/upload";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import CircularProgress from "@material-ui/core/CircularProgress";
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [predict, setPredict] = useState(null);
  const [img, setImg] = useState(null);
  const [dialog, setDialog] = useState(false);
  useEffect(() => {
    prediction();
  }, [img]);
  const prediction = async () => {
    if (img) {
      console.log(img);
      setLoading(true);
      await axios
        .post("https://lab.ggolfz.codes/papaya-api/predict", { data: img })
        .then((res) => {
          if (res.data.success) {
            setPredict({
              class: res.data.class,
              confident: res.data.confident,
            });
            setLoading(false);
            setDialog(true);
          }
        });
    }
  };
  const handleClickUpload = () => {
    document.getElementById("fileUpload").click();
  };
  const handleFileUpload = (e) => {
    if (e.target.files[0]) {
      var reader = new FileReader();
      reader.onloadend = function () {
        if (reader.result) {
          setImg(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Papaya PogPog</title>
        <meta name="description" content="Papaya PogPog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Fragment>
          <h1 className={styles.title}>
            Welcome to <a href="#">Papaya Pog Pog!</a>
          </h1>

          <p className={styles.description}>Get started by upload your image</p>
          <input
            type="file"
            style={{ display: "none" }}
            id="fileUpload"
            onChange={handleFileUpload}
          />
          {!loading && img && predict ? (
            <Dialog open={dialog} onBackdropClick={() => setDialog(false)}>
              <img src={img} alt="Papaya Image" width="224px" height="224px" />
              <h3>
                I am {Math.round(predict.confident * 10000) / 100}% confident
                that your papaya are {predict.class} papaya.
              </h3>
            </Dialog>
          ) : null}
          <div className={styles.grid} onClick={handleClickUpload}>
            <div className={styles.card}>
              {loading ? (
                <CircularProgress size={60} />
              ) : (
                <Fragment>
                  <UploadIcon />
                  <h2>Upload Papaya Image </h2>
                </Fragment>
              )}
            </div>
          </div>
        </Fragment>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://ggolfz.codes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className={styles.logo}>GGolfz</span>
        </a>
      </footer>
    </div>
  );
}

import { useState, useEffect, Fragment } from "react";
import UploadIcon from "../components/icons/upload";
import styles from "../styles/Demo.module.css";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import CircularProgress from "@material-ui/core/CircularProgress";
import Nav from "../components/nav";

const Demo = () => {
  const [loading, setLoading] = useState(false);
  const [predict, setPredict] = useState(null);
  const [img, setImg] = useState(null);
  const [dialog, setDialog] = useState(false);
  useEffect(() => {
    prediction();
  }, [img]);
  const prediction = async () => {
    if (img) {
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
    <Fragment>
      <div className={styles.container}>
        <Nav />
        <main className={styles.main}>
          <Fragment>
            <h1 className={styles.title}>
              Payaya Ripeness <a href="#">Classifier</a>
            </h1>

            <p className={styles.description}>
              Get started by upload your image
            </p>
            <input
              type="file"
              style={{ display: "none" }}
              id="fileUpload"
              onChange={handleFileUpload}
            />
            {!loading && img && predict ? (
              <Dialog open={dialog} onClose={() => setDialog(false)}>
                <div className={styles.container_dialog}>
                  <img
                    src={img}
                    alt="Papaya Image"
                    width="224px"
                    height="224px"
                  />
                  <h3>
                    I am {Math.round(predict.confident * 10000) / 100}%
                    confident that your papaya are {predict.class} papaya.
                  </h3>
                  <button
                    onClick={() => setDialog(false)}
                    className={styles.btn_getIt}
                  >
                    Got it!!!
                  </button>
                </div>
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
      </div>
    </Fragment>
  );
};
export default Demo;

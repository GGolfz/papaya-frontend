import Nav from "../components/nav";
import SystemArch from "../components/system_arc";
import DevTeam from "../components/developer_team";
import { Fragment } from "react";
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <Fragment>
      <Nav />
      <div className={styles.about_bg}>
      <SystemArch />
      <DevTeam />
      </div>
    </Fragment>
  );
};
export default About;

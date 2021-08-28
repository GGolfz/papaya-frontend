import Nav from "../components/nav";
import SystemArch from "../components/system_arc";
import DevTeam from "../components/developer_team";
import { technology } from "../components/technology";
import { Fragment } from "react";
import TechStack from "../components/tech_stack";
import styles from "../styles/About.module.css";
const About = () => {
  const renderTech = () => {
    return technology.map((item) => (
      <Fragment key={item.id}>
        <TechStack
          name={item.name}
          img={item.img}
          width={item.width}
          height={item.height}
        ></TechStack>
      </Fragment>
    ));
  };
  return (
    <Fragment>
      <Nav />
      <div className={styles.about_bg}>
        <SystemArch />
        <div className={styles.tech_stacks}>
          <h1 className={styles.tech_name}>Technology Stacks</h1>
          <div className={styles.flexTech}>{renderTech()}</div>
        </div>
        <DevTeam />
      </div>
    </Fragment>
  );
};
export default About;

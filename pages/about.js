import Nav from "../components/nav";
import SystemArch from "../components/system_arc";
import DevTeam from "../components/developer_team";
import { mockTech } from "../components/mockTech";
import { Fragment } from "react";
import TechStack from "../components/tech_stack";
import styles from "../styles/About.module.css";
const About = () => {
  const renderTech = () => {
    let tech = [];
    for (let i = 0; i < Math.ceil(mockTech.length / 4); i++) {
      tech.push(
        <Fragment key={i}>
          {mockTech.slice(4 * i, 4 * (i + 1)).map((item) => {
            return (
              <TechStack
                key={item.id}
                name={item.name}
                img={item.img}
                width={item.width}
                height={item.height}
              ></TechStack>
            );
          })}
        </Fragment>
      );
    }
    return tech;
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

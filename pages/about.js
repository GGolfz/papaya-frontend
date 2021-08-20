import Nav from "../components/nav";
import SystemArch from "../components/system_arc";
import DevTeam from "../components/developer_team";
import { mockTech } from '../components/mockTech'
import { Fragment } from "react";
import TechStack from '../components/tech_stack';
import styles from '../styles/About.module.css';
const About = () => {
  const renderTech = () => {
    const tech = mockTech.map((item) =>{
      return <TechStack key={item.id} name={item.name} img={item.img}></TechStack>
      
    });
    return tech;
  }
  return (
    <Fragment>
      <Nav />
      <div className={styles.about_bg}>
      <SystemArch />
      <div className={styles.tech_stacks}>
      <div className={styles.tech_name}>
        Technology Stacks
      </div>
      <div className={styles.flexTech}>
      {renderTech()}
      </div>
      </div>
      <DevTeam />
    </Fragment>
  );
};
export default About;

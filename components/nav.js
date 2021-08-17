import styles from "../styles/About.module.css";
const Nav =() =>{
    return(
        <div className={styles.nav_container}>
            <div className={styles.name_div}>
                <div className={styles.name}>Papaya</div>
                <div className={styles.name} style={{color:"#F95511",paddingLeft:"1vw"}}>PogPog</div>
            </div>
            <div className={styles.name_div}>
                <a className={styles.menu_txt} href="/">Home</a>
                <a className={styles.menu_txt} href="/about">About</a>
                <a className={styles.demo_btn} href="/"> Demo</a>
            </div>
            
        </div>
    )
}
export default Nav;
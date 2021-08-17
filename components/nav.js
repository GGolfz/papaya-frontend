import styles from "../styles/About.module.css";
import Link from 'next/link'
const Nav =() =>{
    return(
        <div className={styles.nav_container}>
            <div className={styles.name_div}>
                <div className={styles.name}>Papaya</div>
                <div className={styles.name} style={{color:"#F95511",paddingLeft:"1vw"}}>PogPog</div>
            </div>
            <div className={styles.name_div}>
                <Link href="/"><a className={styles.menu_txt}>Home</a></Link>
                <Link href="/about"><a className={styles.menu_txt}>About</a></Link>
                <Link href="/"><a className={styles.demo_btn}> Demo</a></Link>
            </div>
            
        </div>
    )
}
export default Nav;
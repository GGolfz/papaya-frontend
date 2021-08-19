import styles from "../styles/About.module.css";
import Image from 'next/image'
import system_img from "../components/images/system_arch.png"
const SystemArch = () =>{
    return(
        <div className={styles.system_container}>
            <h1 className={styles.system_name}>
                System Architecture
            </h1>
            <div className={styles.img_div}>
            <Image src={system_img}></Image>
            </div>
        </div>
    )
}
export default SystemArch
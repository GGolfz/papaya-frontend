import styles from "../styles/About.module.css";
import Image from 'next/image'
import opal from "../components/images/opal.png";
import golf from "../components/images/golf.png";
import ching from "../components/images/ching.png";
const DevTeam = () => {
    return(
        <div className={styles.dev_bg}>
            <h1 className={styles.dev_name}>Developer Team</h1>
            <div className={styles.team_box}>
                <div className={styles.team_card}>
                    <div>
                        <Image  src={opal} width={170} height={170}></Image>
                    </div> 
                    <div className={styles.team_name}>Kaewket Saelee </div>
                    <div className={styles.team_id}>62130500206 </div>
                </div>
                <div className={styles.team_card}>
                    <div>
                    <Image  src={golf} width={170} height={170}></Image>
                    </div> 
                    <div className={styles.team_name}>Wisarut Kitticharoenphonngam</div>
                    <div className={styles.team_id}>62130500226 </div>
                </div>
                <div className={styles.team_card}>
                    <div>
                    <Image  src={ching} width={170} height={170}></Image>
                    </div> 
                    <div className={styles.team_name}>Kavisara Srisuwatcharee</div>
                    <div className={styles.team_id}>62130500254 </div>
                </div>
            </div>
        </div>
    )
}
export default DevTeam
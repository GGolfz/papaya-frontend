import Image from 'next/image'
import styles from '../styles/About.module.css'
import { CardContent} from '@material-ui/core';
import Card from '@material-ui/core/Card';

const TechStack = (props) => {
    return (
        <div className={styles.container_tech}>
            <Card>
                <CardContent>
                    <Image src={props.img} width={80} height={80}></Image>
                    <div>
                    {props.name}
                    </div>
                    
                </CardContent>
            </Card>
        </div>
    )
}
export default TechStack;
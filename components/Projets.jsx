import styles from '../styles/Projet.module.css';
import Image from 'next/image';
import { FormattedMessage } from "react-intl";

export default function Projets({ h3, src, alt, desc }) {
    return <div className={styles.cont}>
        <h3 className={styles.h3}><FormattedMessage id={h3}/></h3>
        <p className={styles.mobiledesc}><FormattedMessage id={desc} /></p>
        <Image src={src} className={styles.image} alt={alt}></Image>
        <div className={styles.paragraphe_droite}>
            <h3 className={styles.titre}><FormattedMessage id={h3}/></h3>
            <FormattedMessage id={desc} />
        </div>
    </div>

}


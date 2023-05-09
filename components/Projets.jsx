import styles from '../styles/Projet.module.css';
import Image from 'next/image';

export default function Projets({ h3, src, alt, desc }) {
    return <div className={styles.cont}>
        <h3 className={styles.h3}>{h3}</h3>
        <Image src={src} className={styles.image} alt={alt}></Image>
        <div className={styles.paragraphe_droite}>
            <h3 className={styles.titre}>{h3}</h3>
            {desc}
        </div>
    </div>

}


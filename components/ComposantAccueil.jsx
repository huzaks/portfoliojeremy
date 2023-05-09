import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/Accueil.module.css";

export default function ComposantAccueil({ lien, src1, alt1, class1, titre, desc, src2, alt2 }) {
    return <div className={styles.image_stack}>
        <div className={styles.image_stack__item_bottom}>
            <Image src={src1} className={styles.image} alt={alt1}></Image>
        </div>

        <div className={class1}>
            <div className={styles.boite_noire}>
                <Link href={lien} ><h3 className={styles.lien_projets}>{titre}</h3></Link>
                <p className={styles.description}>{desc}</p>
                <div><Image src={src2} className={styles.image_projets} alt={alt2}></Image></div>
            </div>
        </div>

    </div>
}


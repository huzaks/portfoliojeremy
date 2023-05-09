import styles from "../styles/Menu.module.css";
import Link from 'next/link';

export default function Menu() {
    return <nav className={styles.nav}>
        <ul className={styles.ul}>
            <Link href="/" className={styles.li}><li>À Propos</li></Link>
            <li className={styles.li}>|</li>
            <Link href="/projet1" className={styles.li}><li>Premier Projet</li></Link>
            <li className={styles.li}>|</li>
            <Link href="/projet2" className={styles.li}><li>Deuxième Projet</li></Link>
            <li className={styles.li}>|</li>
            <Link href="/contact" className={styles.li}><li>Contact</li></Link>
        </ul>
    </nav>
}

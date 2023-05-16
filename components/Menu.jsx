import styles from "../styles/Menu.module.css";
import Link from 'next/link';

export default function Menu() {
    return <nav className={styles.nav}>
        <ul className={styles.ul}>
            <Link href="/" className={styles.link}><li>À Propos</li></Link>
            <li className={styles.link}>|</li>
            <Link href="/projet1" className={styles.link}><li>Premier Projet</li></Link>
            <li className={styles.link}>|</li>
            <Link href="/projet2" className={styles.link}><li>Deuxième Projet</li></Link>
            <li className={styles.link}>|</li>
            <Link href="/projet3" className={styles.link}><li>Troisième Projet</li></Link>
            <li className={styles.link}>|</li>
            <Link href="/contact" className={styles.link}><li>Contact</li></Link>
        </ul>
    </nav>
}

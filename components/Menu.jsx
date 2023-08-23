import styles from "../styles/Menu.module.css";
import Link from 'next/link';

export default function Menu() {
    return <nav>
        <ul className={styles.ul}>
            <li><Link href="/#" className={styles.link}>Home</Link></li>
            <li><Link href="/#about" className={styles.link}>About</Link></li>
            <li><Link href="/#projects" className={styles.link}>Projects</Link></li>
            <li><Link href="/#contacts" className={styles.link}>Contacts</Link></li>
        </ul>
    </nav>
}

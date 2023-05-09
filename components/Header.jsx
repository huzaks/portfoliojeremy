import Menu from "./Menu";
import styles from "../styles/Header.module.css"

export default function Header() {
    return <header className={styles.header}>
        <div className={styles.div}>
            <h1 className={styles.titre}>Portfolio Jérémy L. Giroux</h1>
        </div>
        <Menu/>
    </header>
}
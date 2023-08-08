import styles from "../styles/Menu.module.css";
import Link from 'next/link';

export default function Menu() {
//     const [locale, setLocale] = useLocale();

//   const handleLocaleChange = (event) => {
//     setLocale(event.target.checked ? 'en' : 'fr');
// }
    return <nav>
        <ul className={styles.ul}>
            <li><Link href="/#home" className={styles.link}>Home</Link></li>
            
            <li><Link href="/#about" className={styles.link}>About</Link></li>
            
            <li><Link href="/#projects" className={styles.link}>Projects</Link></li>
            
            <li><Link href="/#contacts" className={styles.link}>Contact</Link></li>
            
            {/* <li><label className={styles.switch}>
        <input type="checkbox" checked={locale === 'en'}
        onChange={handleLocaleChange}/>
        <span className={styles.slider}></span>
      </label></li> */}
        </ul>
    </nav>
}

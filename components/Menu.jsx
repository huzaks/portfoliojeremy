import styles from "../styles/Menu.module.css";
import Link from 'next/link';
import { FormattedMessage } from "react-intl";
import { useLocale } from "./LocaleProvider";
export default function Menu() {
    const [locale, setLocale] = useLocale();

  const handleLocaleChange = (event) => {
    setLocale(event.target.checked ? 'en' : 'fr');
}
    return <nav className={styles.nav}>
        <ul className={styles.ul}>
            <Link href="/" className={styles.link}><li><FormattedMessage id="app.header.link1"/></li></Link>
            <li className={styles.link}>|</li>
            <Link href="/projet1" className={styles.link}><li><FormattedMessage id="app.header.link2"/></li></Link>
            <li className={styles.link}>|</li>
            <Link href="/projet2" className={styles.link}><li><FormattedMessage id="app.header.link3"/></li></Link>
            <li className={styles.link}>|</li>
            <Link href="/projet3" className={styles.link}><li><FormattedMessage id="app.header.link4"/></li></Link>
            <li className={styles.link}>|</li>
            <li><label className={styles.switch}>
        <input type="checkbox" checked={locale === 'en'}
        onChange={handleLocaleChange}/>
        <span className={styles.slider}></span>
      </label></li>
        </ul>
    </nav>
}

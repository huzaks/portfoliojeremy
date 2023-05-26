import Menu from "./Menu";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useLocale } from "./LocaleProvider";
import { FormattedMessage } from "react-intl";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [locale, setLocale] = useLocale();

  const handleLocaleChange = (event) => {
    setLocale(event.target.checked ? 'en' : 'fr');
}

  return (
    <header className={styles.header}>
      <div className={styles.div}>
        <h1 className={styles.titre}><FormattedMessage id="app.header.title"/></h1>
      </div>
      
      <Menu />
      
      {isOpen ? <FontAwesomeIcon
        icon={faXmark}
        className={styles.button}
        onClick={() => setOpen(!isOpen)}
      /> : <FontAwesomeIcon
      icon={faBars}
      className={styles.button}
      onClick={() => setOpen(!isOpen)}
    />}

      <ul className={isOpen ? styles.ul : styles.ul_no_show}>
        <Link href="/" className={styles.link}>
          <li onClick={() => setOpen(false)}><FormattedMessage id="app.header.link1"/></li>
        </Link>
        <Link href="/projet1" className={styles.link}>
          <li onClick={() => setOpen(false)}><FormattedMessage id="app.header.link2"/></li>
        </Link>
        <Link href="/projet2" className={styles.link}>
          <li onClick={() => setOpen(false)}><FormattedMessage id="app.header.link3"/></li>
        </Link>
        <Link href="/projet3" className={styles.link}>
          <li onClick={() => setOpen(false)}><FormattedMessage id="app.header.link4"/></li>
        </Link>
        <li onClick={() => setOpen(false)}><label className={styles.switch}>
        <input type="checkbox" checked={locale === 'en'}
        onChange={handleLocaleChange}/>
        <span className={styles.slider}></span>
      </label></li>
        
      </ul>
    </header>
  );
}

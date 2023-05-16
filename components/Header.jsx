import Menu from "./Menu";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.div}>
        <h1 className={styles.titre}>Portfolio Jérémy L. Giroux</h1>
      </div>
      <Menu />
      <FontAwesomeIcon
        icon={faBars}
        className={styles.button}
        onClick={() => setOpen(!isOpen)}
      />

      <ul className={isOpen ? styles.ul : styles.ul_no_show}>
        <Link href="/" className={styles.link}>
          <li onClick={() => setOpen(false)}>À Propos</li>
        </Link>
        <Link href="/projet1" className={styles.link}>
          <li onClick={() => setOpen(false)}>Premier Projet</li>
        </Link>
        <Link href="/projet2" className={styles.link}>
          <li onClick={() => setOpen(false)}>Deuxième Projet</li>
        </Link>
        <Link href="/projet3" className={styles.link}>
          <li onClick={() => setOpen(false)}>Troisième Projet</li>
        </Link>
        {/* <Link href="/contact" className={styles.link}>
          <li onClick={() => setOpen(false)}>Contact</li>
        </Link> */}
        
      </ul>
    </header>
  );
}

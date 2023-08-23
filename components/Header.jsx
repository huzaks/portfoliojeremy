import Menu from "./Menu";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isOpen, setOpen] = useState(false);



  return (
    <header className={styles.header} id="home">
      <div className={styles.div}>
        <Link className={styles.titre} href={"/"}>
          Jérémy.dev
        </Link>
      </div>

      <Menu />

      {isOpen ? (
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.buttonX}
          onClick={() => setOpen(!isOpen)}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className={styles.button}
          onClick={() => setOpen(!isOpen)}
        />
      )}

      <ul className={isOpen ? styles.ul : styles.ul_no_show}>
        <li onClick={() => setOpen(false)}>
          <Link href="/#" className={styles.link}>
            Home
          </Link>
        </li>
        <li onClick={() => setOpen(false)}>
          <Link href="/#about" className={styles.link}>
            About
          </Link>
        </li>
        <li onClick={() => setOpen(false)}>
          <Link href="/#projects" className={styles.link}>
            Projects
          </Link>
        </li>
        <li onClick={() => setOpen(false)}>
          <Link href="/#contacts" className={styles.link}>
            Contacts
          </Link>
        </li>
      </ul>
    </header>
  );
}

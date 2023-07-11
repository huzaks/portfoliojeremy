import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.email}>jeremylavalleegiroux@gmail.com</div>
        <div className={styles.icons}>
          <Link href={'https://linkedin.com/in/jérémy-lavallée-giroux-159b40201'}>
            <FontAwesomeIcon icon={faLinkedin} className={styles.linkedin_icon} />
          </Link>
          <Link href={'https://github.com/huzaks'}>
            <FontAwesomeIcon icon={faGithub} className={styles.github_icon} />
          </Link>
        </div>
      </footer>
    </>
  );
}

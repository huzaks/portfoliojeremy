import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className={styles.footer} id="contacts">
        <div style={{
          display: "flex",
          alignItems:"center",
          fontSize: 20 + "px",
          color: "#fff"
        }}>Copyright © 2023. All rights reserved</div>
        <div style={{
          display: "flex",
          flexDirection: "column"
        }}>
          <Link
            className={styles.email}
            href={"mailto:jeremylavalleegiroux@gmail.com"}
          >
            jeremylavalleegiroux@gmail.com
          </Link>
          <div className={styles.icons}>
            <Link
              href={"https://linkedin.com/in/jérémy-lavallée-giroux-159b40201"}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={styles.linkedin_icon}
              />
            </Link>
            <Link href={"https://github.com/huzaks"}>
              <FontAwesomeIcon icon={faGithub} className={styles.github_icon} />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

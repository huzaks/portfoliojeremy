import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div style={{
          display: "flex",
          alignItems:"center",
          fontSize: 20 + "px",
          color: "#fff"
        }}>Copyright Jérémy Lavallée-Giroux © 2023. All rights reserved.</div>
        <div style={{
          display: "flex",
          flexDirection: "column"
        }}>
          
        </div>
      </footer>
    </>
  );
}

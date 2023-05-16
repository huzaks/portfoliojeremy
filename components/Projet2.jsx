import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Accueil.module.css";

export default function Projet2({
  titre,
  linkgif,
  desc,
  linktech,
  titletech,
  width,
  height,
}) {
  return (
    <>
      <div className={styles.box}>
        <h3>{titre}</h3>
        <Image src={linkgif} width={315} height={159} alt={titre} className={styles.display} />
        <p>{desc}</p>
        <Image
          src={linktech}
          width={width}
          height={height}
          alt={titletech}
          className={styles.logo}
          title="C#"
        />
      </div>
    </>
  );
}

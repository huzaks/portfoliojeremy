import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Accueil.module.css";
import { FormattedMessage } from "react-intl";
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
      <Link href={'/projet2'} className={styles.link}>
        <h3><FormattedMessage id="app.header.link3"/></h3>
        <Image src={linkgif} width={315} height={159} alt={titre} className={styles.display} />
        <p><FormattedMessage id="app.home.minidesclink3" /></p>
        <Image
          src={linktech}
          width={width}
          height={height}
          alt={titletech}
          className={styles.logo}
          title="C#"
        />
      </Link>
    </>
  );
}

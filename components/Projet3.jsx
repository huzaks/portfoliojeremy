import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Accueil.module.css";
import { FormattedMessage } from "react-intl";
export default function Projet1({
  titre,
  linkgif,
  desc,
  linktech1,
  titletech1,
  linktech2,
  titletech2,
  linktech3,
  titletech3,
  linktech4,
  titletech4,
  linktech5,
  titletech5,
  linktech6,
  titletech6,
  width1,
  height1,
  width2,
  height2,
  width3,
  height3,
  width4,
  height4,
  width5,
  height5,
  width6,
  height6,
}) {
  return (
    <>
      <Link href={'/projet3'} className={styles.link}>
        <h3><FormattedMessage id="app.header.link4"/></h3>
        <Image src={linkgif} width={315} height={159} alt={titre} className={styles.display}/>
        <p><FormattedMessage id="app.home.minidesclink4" /></p>
        <Image
          src={linktech1}
          width={width1}
          height={height1}
          alt={titletech1}
          className={styles.logo}
          title="Node.js"
        />
        <Image
          src={linktech2}
          width={width2}
          height={height2}
          alt={titletech2}
          className={styles.logo}
          title="HTML 5"
        />
        <Image
          src={linktech3}
          width={width3}
          height={height3}
          alt={titletech3}
          className={styles.logo}
          title="CSS3"
        />
        <Image
          src={linktech4}
          width={width4}
          height={height4}
          alt={titletech4}
          className={styles.logo}
          title="Typescript"
        />
        <Image
          src={linktech5}
          width={width5}
          height={height5}
          alt={titletech5}
          className={styles.logo}
          title="React.js"
        />
        <Image
          src={linktech6}
          width={width6}
          height={height6}
          alt={titletech6}
          className={styles.logo}
          title="Prisma"
        />
      </Link>
    </>
  );
}

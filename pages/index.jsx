import Image from "next/image";
import styles from "../styles/Accueil.module.css";
import Projet1 from "../components/Projet1";
import Projet2 from "../components/Projet2";
import Projet3 from "../components/Projet3";
import display1 from "../public/Projet1Home.png";
import display2 from "../public/Calculatrice.png";
import display3 from "../public/mangashop.jpg";
import nodejs from "../public/Node.js_logo.png";
import react from "../public/React_logo.png";
import csharp from "../public/csharp_logo.png";
import prisma from "../public/prisma_logo.png";
import html5 from "../public/html5.png";
import css3 from "../public/css-3.svg";
import jscript from "../public/JavaScript.png";
import tscript from "../public/Typescript_logo.png";
import jeremy from "../public/jeremy.jpg";

import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export default function Accueil() {
  return (
    <>
    
      <Head>
        <title>Accueil</title>
        <meta
          name="description"
          content="Présentation de moi et de mes projets."
        />
        <meta property="og:title" content="Accueil" />
        <meta
          property="og:description"
          content="Présentation de moi et de mes projets."
        />
      </Head>
      <main>
        <div className={styles.container}>
          <div className={styles.introduction}>
            Je m&apos;appelle Jérémy Lavallée-Giroux, appelé sous le nom de
            &quot;Jay&quot; selon l&apos;homme qui me porte dans ses bras! Je
            suis programmeur fullstack avec{" "}
            <span className={styles.react}>
              React.js{" "}
              <FontAwesomeIcon icon={faReact} className={styles.icon} />
            </span>
            . Vous trouverez ici mes projets ainsi qu&apos;une page de contact.
          </div>

          <Image
            src={jeremy}
            width={262}
            height={350}
            className={styles.jeremy}
            alt="Image de Jeremy"
          ></Image>
        </div>
        <h2 className={styles.lien_projets}>Projets</h2>
        <div className={styles.projects}>
          <Projet1
            titre="Premier projet"
            linkgif={display1}
            desc="Ceci est la description du projet 1"
            linktech1={nodejs}
            titletech1="Node.js logo"
            width1={52}
            height1={32}
            linktech2={html5}
            titletech2="Html 5 logo"
            width2={32}
            height2={32}
            linktech3={css3}
            titletech3="CSS3 logo"
            width3={25}
            height3={28}
            linktech4={jscript}
            titletech4="Javascript logo"
            width4={32}
            height4={32}
          />
          <Projet2
            titre="Deuxième projet"
            linkgif={display2}
            desc="Ceci est la description du projet 2"
            linktech={csharp}
            titletech="C# logo"
            width={32}
            height={32}
          />
          <Projet3
            titre="Troisième projet"
            linkgif={display3}
            desc="Ceci est la description du projet 3"
            linktech1={nodejs}
            titletech1="Node.js logo"
            width1={52}
            height1={32}
            linktech2={html5}
            titletech2="Html 5 logo"
            width2={32}
            height2={32}
            linktech3={css3}
            titletech3="CSS3 logo"
            width3={25}
            height3={28}
            linktech4={tscript}
            titletech4="Typescript logo"
            width4={32}
            height4={32}
            linktech5={react}
            titletech5="React logo"
            width5={35}
            height5={32}
            linktech6={prisma}
            titletech6="Prisma logo"
            width6={60}
            height6={32}
          />
        </div>
      
      </main>
    </>
  );
}

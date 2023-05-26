import styles from "../styles/Projet.module.css";
import Projets from "../components/Projets";
import Head from "next/head";
import Link from "next/link";
import search from "../public/mangashopsearch.gif";
import addAndUpdate from "../public/addandupdatecart.gif";
import addAndRemove from "../public/addandremovewish.gif";
import { FormattedMessage } from "react-intl";

export default function Projet3() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Présentation du projet Manga Shop." />
        <meta property="og:title" content="Troisième Projet" />
        <meta
          property="og:description"
          content="Présentation du projet Manga Shop."
        />
      </Head>
      <main>
        <h2 className={styles.titre}>
          <FormattedMessage id="app.projet3.title" /> <Link href="https://mangashop-nu.vercel.app/" className={styles.link}><FormattedMessage id="app.projet3.link"/></Link>
        </h2>
        <div className={styles.description}>
          <FormattedMessage id="app.projet3.description"/>
        </div>

        <div className={styles.container}>
          <Projets
            h3="app.projet3.findtitle"
            src={search}
            alt="Gif Addition et Soustraction"
            desc="app.projet3.finddesc"
          ></Projets>
          <Projets
            h3="app.projet3.addcarttitle"
            src={addAndUpdate}
            alt="Gif Multiplication et Division"
            desc="app.projet3.addcartdesc"
          ></Projets>
          <Projets
            h3="app.projet3.addwishtitle"
            src={addAndRemove}
            alt="Gif 1/Nombre & Pourcentage"
            desc="app.projet3.addwishdesc"
          ></Projets>
        </div>
      </main>
    </>
  );
}

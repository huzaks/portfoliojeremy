import styles from "../styles/Projet.module.css";
import Projets from "../components/Projets";
import Head from "next/head";
import Link from "next/link";
import search from "../public/mangashopsearch.gif";
import addAndUpdate from "../public/addandupdatecart.gif";
import addAndRemove from "../public/addandremovewish.gif";

export default function Projet3() {
  return (
    <>
      <Head>
        <title>Troisième projet</title>
        <meta name="description" content="Présentation du projet Manga Shop." />
        <meta property="og:title" content="Troisième Projet" />
        <meta
          property="og:description"
          content="Présentation du projet Manga Shop."
        />
      </Head>
      <main>
        <h2 className={styles.titre}>
          Manga Shop - Le lien sera disponible sous peu
        </h2>
        <div className={styles.description}>
          Ce projet consiste à imiter un magasin en ligne de manga.
          L&apos;utilisateur peut ainsi se créer un compte et placer des livres
          dans son panier.
        </div>

        <div className={styles.container}>
          <Projets
            h3="Rechercher un livre"
            src={search}
            alt="Gif Addition et Soustraction"
            desc="L'utilisateur peut rechercher un livre par son nom, ou par catégorie"
          ></Projets>
          <Projets
            h3="Ajouter au panier"
            src={addAndUpdate}
            alt="Gif Multiplication et Division"
            desc="L'utilisateur peut ajouter un produit à son panier et modifier sa quantité dans son panier."
          ></Projets>
          <Projets
            h3="Ajouter à la liste de souhait"
            src={addAndRemove}
            alt="Gif 1/Nombre & Pourcentage"
            desc="L'utilisateur peut ajouter un produit à sa liste de souhait et le retirer de celle-ci."
          ></Projets>
        </div>
      </main>
    </>
  );
}

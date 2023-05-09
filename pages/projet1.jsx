import styles from '../styles/Projet.module.css';
import Projets from '../components/Projets';
import Head from 'next/head';

import inscriptionGif from '../public/Inscription.gif';
import connexionGif from '../public/Connexion.gif';
import inscrireGif from '../public/inscrire.gif';
import desinscrireGif from '../public/desinscrire.gif';


export default function Projet1() {
    return <>
    <Head>
    <title>Premier projet</title>
    <meta name="description" content="Présentation du projet tournoi."/>
    <meta property="og:title" content="Premier Projet"/>
    <meta property="og:description" content="Présentation du projet tournoi."/>
    
</Head>
    <main>
        <h2 className={styles.titre}>Tournois à La Cité Collégiale</h2>
        <div className={styles.description}>Ce projet consistait à créer un site web qui permettait à un utilisateur connecté de s’inscrire à des tournois de jeux vidéo à La Cité. L’utilisateur peut également se désinscrire à un tournoi.Celui qui a les droits administratifs peut voir les changements liés aux inscriptions, désinscription, création de tournoi et suppression de tournois en temps réel.</div>
        <div className={styles.container}>
            <Projets h3="Inscription" src={inscriptionGif} alt="Gif Inscription" desc="Pour se créer un compte, l'utilisateur doit entrer un courriel, un mot de passe, ainsi que son nom et son prénom. La création du compte est un succès si l'utilisateur revient à la page d'accueil."></Projets>
            <Projets h3="Connexion" src={connexionGif} alt="Gif Connexion" desc="Pour se connecter à son compte, l'utilisateur se dirige vers la page de connexion en haut à droite. Il entre ensuite dans les cases son courriel ainsi que le mot de passe associé à celui-ci."></Projets>
            <Projets h3="S'inscrire à un tournoi" src={inscrireGif} alt="Gif inscription tournoi" desc="Pour s'inscrire à un tournoi, l'utilisateur connecté se dirige vers la page d'accueil. Il peut choisir à quel tournoi il souhaite s'inscrire en appuyant sur le bouton 'S'inscrire'. Si l'inscription est effectuée avec succès, le bouton sera désactivé."></Projets>
            <Projets h3="Se désinscrire à un tournoi" src={desinscrireGif} alt="Gif désincription tournoi" desc="Pour se désinscrire à un tournoi, l'utilisateur doit visiter la page de Compte, et choisir le tournoi qu'il souhaite se désinscrire."></Projets>
        </div>
    </main>
    </>
}

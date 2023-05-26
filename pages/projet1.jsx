import styles from '../styles/Projet.module.css';
import Projets from '../components/Projets';
import Head from 'next/head';

import inscriptionGif from '../public/Inscription.gif';
import connexionGif from '../public/Connexion.gif';
import inscrireGif from '../public/inscrire.gif';
import { FormattedMessage } from "react-intl";


export default function Projet1() {
    return <>
    <Head>
    <title>Portfolio</title>
    <meta name="description" content="Présentation du projet tournoi."/>
    <meta property="og:title" content="Premier Projet"/>
    <meta property="og:description" content="Présentation du projet tournoi."/>
    
</Head>
    <main>
        <h2 className={styles.titre}><FormattedMessage id="app.projet1.title" /></h2>
        <div className={styles.description}><FormattedMessage id="app.projet1.description" /></div>
        <div className={styles.container}>
            <Projets h3="app.projet1.inscriptiontitle" src={inscriptionGif} alt="Gif Inscription" desc="app.projet1.inscriptiondesc"></Projets>
            <Projets h3="app.projet1.connexiontitle" src={connexionGif} alt="Gif Connexion" desc="app.projet1.connexiondesc"></Projets>
            <Projets h3="app.projet1.registertitle" src={inscrireGif} alt="Gif inscription tournoi" desc="app.projet1.registerdesc"></Projets>
            
        </div>
    </main>
    </>
}

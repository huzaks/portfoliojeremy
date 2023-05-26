import styles from '../styles/Projet.module.css';
import Projets from '../components/Projets';
import Head from 'next/head';

import addsousGif from '../public/add_sous.gif';
import multidivGif from "../public/multidiv.gif";
import surpourcentage from '../public/surunetpourcentage.gif';
import racine from '../public/racine.gif';
import exposant from '../public/exposant.gif';
import { FormattedMessage } from "react-intl";

export default function Projet2() {
    return <>
    <Head>
    <title>Portfolio</title>
    <meta name="description" content="Présentation du projet calculatrice."/>
    <meta property="og:title" content="Deuxième Projet"/>
    <meta property="og:description" content="Présentation du projet calculatrice."/>
    
</Head>
<main>
        <h2 className={styles.titre}><FormattedMessage id="app.projet2.title" /></h2>
        <div className={styles.description}><FormattedMessage id="app.projet2.description" /></div>
        <div className={styles.container}>
            <Projets h3="app.projet2.addsoustitle" src={addsousGif} alt="Gif Addition et Soustraction" desc="app.projet2.addsousdesc"></Projets>
            <Projets h3="app.projet2.multdivtitle" src={multidivGif} alt="Gif Multiplication et Division" desc="app.projet2.multdivdesc"></Projets>
            <Projets h3="app.projet2.pourctitle" src={surpourcentage} alt="Gif 1/Nombre & Pourcentage" desc="app.projet2.pourcdesc"></Projets>
            <Projets h3="app.projet2.squaretitle" src={racine} alt="Gif Racine carrée" desc="app.projet2.squaredesc"></Projets>
            <Projets h3="app.projet2.expostitle" src={exposant} alt="Gif Exposant 2" desc="app.projet2.exposdesc"></Projets>
        </div>
    </main>
    </>
}
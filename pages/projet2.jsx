import styles from '../styles/Projet.module.css';
import Projets from '../components/Projets';
import Head from 'next/head';

import addsousGif from '../public/add_sous.gif';
import multidivGif from "../public/multidiv.gif";
import surpourcentage from '../public/surunetpourcentage.gif';
import racine from '../public/racine.gif';
import exposant from '../public/exposant.gif';


export default function Projet2() {
    return <>
    <Head>
    <title>Deuxième projet</title>
    <meta name="description" content="Présentation du projet calculatrice."/>
    <meta property="og:title" content="Deuxième Projet"/>
    <meta property="og:description" content="Présentation du projet calculatrice."/>
    
</Head>
<main>
        <h2 className={styles.titre}>Calculatrice C#</h2>
        <div className={styles.description}>Ce projet WPF C# consistait à faire une simple réplique de la calculatrice Windows. Elle permet le pourcentage du nombre écrit, la division 1/le nombre, l’exposant 2, la racine carrée, la division, la multiplication, l’addition et la soustraction de deux nombres.</div>
        <div className={styles.container}>
            <Projets h3="Addition & Soustraction" src={addsousGif} alt="Gif Addition et Soustraction" desc="L'utilisateur peut additioner ou soustraire deux nombres. La grosseur des nombres n'est pas un inconvénient."></Projets>
            <Projets h3="Multiplication & Division" src={multidivGif} alt="Gif Multiplication et Division" desc="L'utilisateur peut multiplier ou diviser deux nombres. La grosseur des nombres n'est pas un inconvénient."></Projets>
            <Projets h3="1/X & Pourcentage" src={surpourcentage} alt="Gif 1/Nombre & Pourcentage" desc="L'utilisateur peut effectuer une fraction de 1 sur le nombre sélectionné. Il peut également faire le pourcentage d'un nombre / 100. La grosseur des nombres n'est pas un inconvénient."></Projets>
            <Projets h3="Racine carrée" src={racine} alt="Gif Racine carrée" desc="L'utilisateur peut calculer la racine carrée d'un nombre. La grosseur des nombres n'est pas un inconvénient."></Projets>
            <Projets h3="Exposant 2" src={exposant} alt="Gif Exposant 2" desc=" L'utilisateur peut calculer le nombre exposant 2, c'est-à-dire nombre X nombre. La grosseur des nombres n'est pas un inconvénient."></Projets>
        </div>
    </main>
    </>
}
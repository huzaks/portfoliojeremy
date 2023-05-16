import styles from '../styles/Projet.module.css';
import Projets from '../components/Projets';
import Head from 'next/head';
import Link from 'next/link'



export default function Projet3() {
    return <>
    <Head>
    <title>Troisième projet</title>
    <meta name="description" content="Présentation du projet Manga Shop."/>
    <meta property="og:title" content="Troisième Projet"/>
    <meta property="og:description" content="Présentation du projet Manga Shop."/>
    
</Head>
<main>
        <h2 className={styles.titre}>Manga Shop - <Link href='https://google.ca'>Lien vers le site</Link></h2>
        <div className={styles.description}>Ce projet consiste à imiter un magasin en ligne de manga. L&apos;utilisateur peut ainsi se créer un compte et placer des livres dans son panier.</div>
        
        <div className={styles.container}>
            
        </div>
    </main>
    </>
}
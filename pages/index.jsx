import Image from 'next/image';
import styles from "../styles/Accueil.module.css";
import ComposantAccueil from '../components/ComposantAccueil';

import image1 from '../public/ascn.jpeg';
import image2 from '../public/climber.jpg';
import image3 from '../public/vinland.png';
import jeremy from '../public/jeremy.jpg';
import projet1home from '../public/Projet1Home.png';
import projet2Calculatrice from '../public/Calculatrice.png';
import Head from 'next/head';

export default function Accueil() {
    return <>
    <Head>
        <title>Accueil</title>
        <meta name="description" content="Présentation de moi et de mes projets."/>
        <meta property="og:title" content="Accueil"/>
        <meta property="og:description" content="Présentation de moi et de mes projets."/>
        
    </Head>
    <main>
        <div className={styles.container}>
        <div className={styles.image_stack}>
            <div className={styles.image_stack__item_bottom}>
                <Image src={image1} className={styles.image} alt="Image Manga Ascencion"></Image>
            </div>
            <div className={styles.image1_stack__item_top}>
                <div className={styles.boite_noire}>
                    <div>Bonjour, je m'appelle Jérémy Lavallée-Giroux, appelé sous le nom de "Jay" selon l'homme qui me porte dans ses bras! Ça fait maintenant 1 an que je programme avec C#, Javascript et React.
                        Voici alors mon portfolio, où je vous montre quelques projets intéressants que j'ai réalisé au courant de mon séjour scolaire.</div>
                    <div><Image src={jeremy} className={styles.jeremy} alt="Image de Jeremy"></Image></div>
                </div>
            </div>
        </div>
        <h2 className={styles.lien_projets}>Projets</h2>
        <ComposantAccueil lien="/projet1" src1={image3} alt1="Image Manga Vinland Saga" class1={styles.image2_stack__item_top} titre="Premier Projet" desc="Ce projet consistait à créer un site web qui permettait à un utilisateur connecté de s’inscrire à des tournois de jeux vidéo à La Cité. L’utilisateur peut également se désinscrire à un tournoi.Celui qui a les droits administratifs peut voir les changements liés aux inscriptions, désinscription, création de tournoi et suppression de tournois en temps réel." src2={projet1home} alt2="Image Projet Tournois"></ComposantAccueil>
        <ComposantAccueil lien="/projet2" src1={image2} alt1="Image Manga Ascencion" class1={styles.image1_stack__item_top} titre="Deuxième Projet" desc="Ce projet WPF C# consistait à faire une simple réplique de la calculatrice Windows. Elle permet le pourcentage du nombre écrit, la division 1/le nombre, l’exposant 2, la racine carrée, la division, la multiplication, l’addition et la soustraction de deux nombres." src2={projet2Calculatrice} alt2="Image Projet Calculatrice"></ComposantAccueil>

    </div>
    </main>
    </>
}

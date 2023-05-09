import Formulaire from "../components/Formulaire";
import Head from 'next/head';

export default function Contact() {
    return <>
<Head>
    <title>Contact</title>
    <meta name="description" content="Envoyer un message au créateur."/>
    <meta property="og:title" content="Contact"/>
    <meta property="og:description" content="Envoyer un message au créateur."/>
    
</Head>
    <main>
    <Formulaire/>
    </main>
    </>
}
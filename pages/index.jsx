import Image from "next/image";
import styles from "../styles/Accueil.module.css";
import nodejs from "../public/Node.js_logo.png";
import react from "../public/React_logo.png";
import html5 from "../public/html5.png";
import css3 from "../public/CSS3.png";
import jscript from "../public/JavaScript.png";
import tscript from "../public/Typescript_logo.png";
import jeremy from "../public/jeremy.jpg";
import palm from "../public/palm.png";
import Link from "next/link";
import dev from "../public/devcircle.jpg";
import Head from "next/head";
import { useInView } from "react-intersection-observer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import ProjectBreadit from "../components/ProjectBreadit";
import ProjectManga from "../components/ProjectManga";
import ProjectEssentials from "../components/ProjectEssentials";

export default function Accueil() {

  //home
  const { ref: myHome, inView:myHomeElement} = useInView();
  const { ref: myAbout, inView:myAboutElement} = useInView();
  // const { ref: myLinkedin, inView:myLinkedinElement} = useInView();
  // const { ref: myGithub, inView:myGithubElement} = useInView();
  // const { ref: myMe, inView:myMeElement} = useInView();
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My portfolio." />
        <meta property="og:title" content="Portfolio" />
        <meta property="og:description" content="Presentation of my profile." />
      </Head>

      <section
        id="homez"
        style={{
          backgroundColor: "#f3f2f2",
          paddingTop: 6 + "rem",
        }}
        ref={myHome}
      >
        <div className={styles.containerme}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                marginTop: 1.5 + "rem",
                marginBottom: 1.5 + "rem",
                fontSize: 3.5 + "rem",
              }}
              className={`${myHomeElement ? styles.titleAnimation: ''}`}
            >
              Next.js Full Stack Developer 💻
            </h1>

            <div className={`${styles.introduction} ${myHomeElement ? styles.descAnimation: ''}`}>
              Hello, I&apos;m Jérémy Lavallée-Giroux, a fullstack developer with
              the
              <span className={styles.react}>
                {" "}
                React.js{" "}
                <FontAwesomeIcon icon={faReact} className={styles.icon} />
              </span>{" "}
              framework Next.js.
            </div>
            <div className={styles.icons}>
              <Link
                href={
                  "https://linkedin.com/in/jérémy-lavallée-giroux-159b40201"
                }
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={`${styles.linkedin_icon} ${myHomeElement ? styles.linkedinAnimation: ''}`}
                />
              </Link>
              <Link href={"https://github.com/huzaks"}>
                <FontAwesomeIcon
                  icon={faGithub}
                  className={`${styles.github_icon} ${myHomeElement ? styles.githubAnimation: ''}`}
                />
              </Link>
            </div>
          </div>
          <Image
            src={jeremy}
            width={350}
            height={350}
            className={`${styles.jeremy}`}
            alt="Image de Jeremy"
            priority
            title="Image de Jeremy"
          ></Image>
        </div>
      </section>
      <section ref={myAbout} id="about" className={styles.containerabout}>
        <div className={styles.gridabout}>
          <div className={styles.skills}>
            <Image
              src={palm}
              alt="palm"
              className={styles.palm}
              height={102}
              width={102}
            />
            <div className={styles.grid}>
              <div className={styles.white}>
                <Image src={jscript} alt="JS" width={64} height={64} />
              </div>
              <div className={styles.rose}>
                <Image src={tscript} alt="TS" width={64} height={64} />
              </div>
              <div className={styles.bleu}>
                <Image src={nodejs} alt="Node" width={70} height={54} />
              </div>
              <div className={styles.mauve}>
                <Image src={html5} alt="html" width={64} height={64} />
              </div>
              <div className={styles.red}>
                <Image src={css3} alt="css" width={45} height={64} />
              </div>
              <div className={styles.green}>
                <Image src={react} alt="react" width={64} height={64} />
                <div className={styles.cercle}></div>
              </div>
            </div>
          </div>
          <div className={styles.about}>
            <Image src={dev} alt="Dev image" className={styles.webdev} />
            <h2 className={`${styles.abouth2} ${myAboutElement ? styles.abouth2Animation : ''}`}>ABOUT ME</h2>
            <div className={`${myAboutElement ? styles.abouth2Animation : ''}`}>
            As a junior web developer, I can craft websites from scratch using
            my programming knowledge in React, CSS and JavaScript. Passionnate
            about web developement, I improve my skills everyday by crafting
            dynamic, engaging, and easy-to-use web applications.
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className={styles.containerprojects}>
        <div style={{display: "flex", alignItems: 'center', flexDirection: 'column'}}>
          <h1 style={{ color: "var(--theme)" }}>Projects</h1>

        </div>
        <ProjectBreadit />
        <ProjectManga />
        <ProjectEssentials />
      </section>
    </>
  );
}

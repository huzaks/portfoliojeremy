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
  faNpm,
  faHtml5,
  faSquareJs,
  faNode,
  faCss3,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { DiMysql } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import {BsFiletypeJson} from 'react-icons/bs'
import ProjectBreadit from "../components/ProjectBreadit";
import ProjectManga from "../components/ProjectManga";
import ProjectEssentials from "../components/ProjectEssentials";
import ProjectWorkout from "../components/ProjectWorkout";
import { Contact } from "../components/Contact";
export default function Accueil() {
  //home
  const { ref: myHome, inView: myHomeElement } = useInView();
  const { ref: myAbout, inView: myAboutElement } = useInView();
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
          paddingTop: 20 + "rem",
          paddingBottom: 20 + "rem",
          paddingLeft: 10 + "rem",
          paddingRight: 10 + "rem",
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
              className={`${myHomeElement ? styles.titleAnimation : ""}`}
            >
              Web Developer 💻
            </h1>

            <div
              className={`${styles.introduction} ${
                myHomeElement ? styles.descAnimation : ""
              }`}
            >
              Hello! My name is{" "}
              <span className={styles.generalBlue}>Jérémy Lavallée-Giroux</span>
              . I&apos;m a web developer who loves building beautiful, yet easy
              to use web applications to help your business grow!
              {/* <span className={styles.react}>
                {" "}
                React.js{" "}
                <FontAwesomeIcon icon={faReact} className={styles.icon} />
              </span>  */}
            </div>
            <div className={styles.icons}>
              <Link
                href={
                  "https://linkedin.com/in/jérémy-lavallée-giroux-159b40201"
                }
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={`${styles.linkedin_icon} ${
                    myHomeElement ? styles.linkedinAnimation : ""
                  }`}
                />
              </Link>
              <Link href={"https://github.com/huzaks"}>
                <FontAwesomeIcon
                  icon={faGithub}
                  className={`${styles.github_icon} ${
                    myHomeElement ? styles.githubAnimation : ""
                  }`}
                />
              </Link>
            </div>
            <a href={'mailto:jeremylavalleegiroux@gmail.com'} className={styles.email}>jeremylavalleegiroux@gmail.com</a>
          </div>
        </div>
      </section>
      <section ref={myAbout} id="about" className={styles.containerabout}>
        <div className={styles.aboutFlex}>
          {/* <div className={styles.skills}>
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
          </div> */}
          <div className={styles.bigAbout}>
            {/* <Image src={dev} alt="Dev image" className={styles.webdev} /> */}
            <div className={styles.about}>
              <h2 className={styles.abouth2}>ABOUT ME</h2>
              <div className={styles.aboutContent}>
                <div>
                  I recently acquired my College Diploma in Computer Programming
                  from <span className={styles.generalBold}>La Cité</span>.
                </div>

                <div>
                  As a web developer, I enjoy combining my technical knowledge
                  with my keen eye for design to create fantastic products. My
                  goal is to efficiently build and improve my skills by crafting
                  dynamic, engaging, and easy-to-use web applications.
                </div>

                <a
                  href={"/portfoliojeremy/JeremyLavalleeGirouxCV.pdf"}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.linkResume}
                >
                  View my resume ➔
                </a>
              </div>
            </div>
            <div className={styles.mySkills}>
              <h2 className={styles.abouth2}>SKILLS</h2>
              <div className={styles.gridSkills}>
                <div>
                  <FontAwesomeIcon
                    icon={faHtml5}
                    className={styles.skillsIcons}
                  />
                  <p>HTML5</p>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCss3}
                    className={styles.skillsIcons}
                  />
                  <p>CSS</p>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faSquareJs}
                    className={styles.skillsIcons}
                  />
                  <p>JavaScript</p>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faReact}
                    className={styles.skillsIcons}
                  />
                  <p>React</p>
                </div>
  
                <div>
                  
                    <svg
                      className={styles.skillsIcons}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 14"
                    >
                      <path d="M9.782.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231C14.488 3.365 13.551.6 9.782.72ZM4.8 6.979A4.772 4.772 0 0 0 0 11.151a3.43 3.43 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231C9.51 9.623 8.573 6.853 4.8 6.979Z" />
                    </svg>
                    <p>Tailwind</p>
                  </div>
                  <div>
                    <DiMysql className={styles.skillsIcons} />
                    <p>MySQL</p>
                  </div>
                  <div>
                  <FontAwesomeIcon
                    icon={faNpm}
                    className={styles.skillsIcons}
                  />
                  <p>NPM</p>
                  
                </div>
                <div>
                  <BsFiletypeJson className={styles.skillsIcons}/>
                  <p>Json</p>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faNode}
                    className={styles.skillsIcons}
                  />
                  <p>Node.js</p>
                  
                </div>
                <div>
                  <BiLogoTypescript className={styles.skillsIcons}/>
                  <p>TypeScript</p>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faGitAlt}
                    className={styles.skillsIcons}
                  />
                  <p>Git</p>
                  
                </div>
                
                

                  <div>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className={styles.skillsIcons}
                  />
                  <p>GitHub</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className={styles.containerprojects}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ color: "var(--theme)" }}>My projects</h1>
        </div>
        <ProjectBreadit />
        <ProjectWorkout />
        <ProjectManga />
        <ProjectEssentials />
      </section>
      <section className={styles.sectionContact} id="contact">
        <div className={styles.connect}>
          <h3>Let&apos;s connect</h3>
          <div>
            I&apos;m currently looking for new opportunities, my inbox is alway
            open. If you have any questions, leave your email and your message.
            I will message you back!
          </div>
          <div className={styles.icons}>
            <Link
              href={"https://linkedin.com/in/jérémy-lavallée-giroux-159b40201"}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={styles.linkedin_icon}
              />
            </Link>
            <Link href={"https://github.com/huzaks"}>
              <FontAwesomeIcon icon={faGithub} className={styles.github_icon} />
            </Link>
          </div>
        </div>
        <Contact />
      </section>
    </>
  );
}

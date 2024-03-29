import Image from "next/image";
import styles from "../styles/Projects.module.css";
import Link from "next/link";
import react from "../public/React_logo.png";
import tscript from "../public/Typescript_logo.png";
import prisma from "../public/prisma.png";
import tailwind from "../public/tailwind.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
export default function ProjectBreadit() {
  const { ref: myBread, inView:myBreadElement} = useInView();

  return (
    
    <div ref={myBread} className={`${styles.container} ${myBreadElement ? styles.containerAnimation : ''}`}>
      <Link
        target="_blank"
        rel="noopener"
        href={"https://breadit-reddit-clone-alpha.vercel.app/"}
      >
        <div className={styles.imagecontainer}>
          <div className={`${styles.imagescroll3} ${styles.image3}`}></div>
        </div>
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-evenly",
          lineHeight: 1.5 + "rem",
          gap: 1 + "rem",
        }}
      >
        <h3>BREADIT 🌎</h3>
        <div
          style={{
            width: 80 + "%",
          }}
        >
          Breadit is a full stack{" "}
          <Link className={styles.redditlink} href={"https://www.reddit.com/"}>
            Reddit
          </Link>{" "}
          clone from a complete Youtube tutorial. Tons of features were in the project but I&apos;ve added a ton more to make it my own. It is possible to sign up using google, create communities, create posts, comment, vote up or down
          comments and posts, view user pages, manage your profile, and more!
        </div>
        <div
          style={{
            display: "flex",
            gap: 1.5 + "rem",
            alignItems: "center",
          }}
        >
          <Image src={react} alt="React.js" height={32} width={35} />
          <Image src={tscript} alt="TypeScript" height={32} width={32} />
          <Image src={prisma} alt="Prisma" height={35} width={32} />
          <Image src={tailwind} alt="Tailwind" height={29} width={38} />
        </div>
        <div style={{display: 'flex', gap: 1.5 + 'rem', alignItems: 'center'}}>
        <Link className={styles.link} href={'/about-breadit'}>Learn More</Link>
        
        <Link
          target="_blank"
          rel="noopener"
          href={"https://breadit-reddit-clone-alpha.vercel.app/"}
          className={styles.link}
        >
          Demo{" "}
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className={styles.icon}
          />
        </Link>
        </div>
      </div>
    </div>
  );
}

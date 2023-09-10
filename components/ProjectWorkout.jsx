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

export default function ProjectWorkout() {
  const { ref: myWorkout, inView:myWorkoutElement} = useInView();

  return (
    
    <div ref={myWorkout} className={`${styles.container} ${myWorkoutElement ? styles.containerAnimation : ''}`}>
      
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
        <h3>D WORKOUT 🏋️‍♀️</h3>
        <div
          style={{
            width: 80 + "%",
          }}
        >
          D Workout is a full stack
          workout booking web application where it is possible to sign up using google, book workouts with trainers, view user page and manage your profile.
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
        
        
        <Link
          target="_blank"
          rel="noopener"
          href={"https://d-workout.vercel.app/"}
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
      <Link
        target="_blank"
        rel="noopener"
        href={"https://breadit-reddit-clone-alpha.vercel.app/"}
      >
        <div className={styles.imagecontainer}>
          <div className={`${styles.imagescroll4} ${styles.image4}`}></div>
        </div>
      </Link>
    </div>
  );
}

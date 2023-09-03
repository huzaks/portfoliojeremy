import Image from "next/image";
import styles from "../styles/Projects.module.css";
import Link from "next/link";
import react from "../public/React_logo.png";
import tscript from "../public/Typescript_logo.png";
import prisma from '../public/prisma.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
export default function ProjectManga() {
  const { ref: myManga, inView:myMangaElement} = useInView();
  return (
    <div ref={myManga} className={`${styles.container} ${myMangaElement ? styles.containerAnimation : ''}`}>
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
        <h3>MANGASHOP 📚</h3>
        <div
          style={{
            width: 80 + "%",
          }}
        >
          MangaShop is a full stack online shop where you can purchase from a
          wide selection of manga. It is even possible to create an account to
          create a personal wishlist and place orders.
        </div>
        <div
          style={{
            display: "flex",
            gap: 1.5 + "rem",
          }}
        >
          <Image src={react} alt="React.js" height={32} width={35} />
          <Image src={tscript} alt="TypeScript" height={32} width={32} />
          <Image src={prisma} alt="Prisma" height={35} width={32}/>
        </div>
        <Link target="_blank" rel="noopener" href={"https://mangashop-nu.vercel.app/"} className={styles.link}>
          Demo{" "}
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className={styles.icon}
          />
        </Link>
      </div>
      <Link target="_blank" rel="noopener" href={"https://mangashop-nu.vercel.app/"}>
        <div className={styles.imagecontainer}>
          <div className={`${styles.imagescroll} ${styles.image1}`}></div>
        </div>
      </Link>
      
    </div>
  );
}

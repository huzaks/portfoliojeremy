import Image from "next/image";
import styles from "../styles/Projects.module.css"
import Link from "next/link";
import react from "../public/React_logo.png";
import tscript from "../public/Typescript_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function ProjectManga() {
    return (
        <div className={styles.container}>
            <Link href={"https://mangashop-nu.vercel.app/"}><div className={styles.imagecontainer}>
                <div className={`${styles.imagescroll} ${styles.image1}`}></div>
            </div></Link>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "space-evenly",
                lineHeight: 1.5 + "rem",
                gap: 1 + "rem"
            }}>
                <h3>MANGASHOP 📚</h3>
                <div style={{
                    width: 80 + "%"
                }}>MangaShop is an online shop where you can purchase from a wide selection of manga. It is even possible to create an account to create a personal wishlist and place orders.</div>
                <div style={{
                    display: "flex",
                    gap: 1.5 + "rem"
                }}>
                    <Image src={react} alt="React.js" height={32} width={35}/>
                    <Image src={tscript} alt="TypeScript" height={32} width={32}/>
                </div>
                <Link href={"https://mangashop-nu.vercel.app/"} className={styles.link}>Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.icon}/></Link>
            </div>
            
            
        </div>
    )
}
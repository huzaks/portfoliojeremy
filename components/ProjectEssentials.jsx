import Image from "next/image";
import styles from "../styles/Projects.module.css"
import Link from "next/link";
import react from "../public/React_logo.png";
import jscript from "../public/JavaScript.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
export default function ProjectEssentials() {
    const { ref: myEsse, inView:myEsseElement} = useInView();
    return (
        <div ref={myEsse} className={`${styles.container} ${myEsseElement ? styles.containerAnimation : ''}`}>
            <Link target="_blank" rel="noopener" href={"https://minissentials.vercel.app/"}><div className={styles.imagecontainer}>
                <div className={`${styles.imagescroll2} ${styles.image2}`}></div>
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
                <h3>MINISSENTIALS 🛒</h3>
                <div style={{
                    width: 80 + "%"
                }}>Minissential is an online shop focused on simplicity, making it very easy for customers to find essential products for everyday life.</div>
                <div style={{
                    display: "flex",
                    gap: 1.5 + "rem"
                }}>
                    <Image src={react} alt="React.js" height={32} width={35}/>
                    <Image src={jscript} alt="JavaScript" height={32} width={32}/>
                </div>
                <Link target="_blank" rel="noopener" href={"https://minissentials.vercel.app/"} className={styles.link}>Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.icon}/></Link>
            </div>
            
            
        </div>
    )
}
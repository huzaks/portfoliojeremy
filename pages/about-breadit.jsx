import Link from "next/link";
import styles from "../styles/Projects.module.css";
import Head from "next/head";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
export default function AboutBreadit() {
  const { ref: myRef, inView:myElement} = useInView()
  const { ref: ref2eUL, inView:my2eUl} = useInView()
  // const myRef = useRef()
  // const [myElement, setMyElement] = useState()

  // useEffect(() => {
    
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0]
  //     setMyElement(entry.isIntersecting)
  //     console.log('entry', entry)
  //   })
  //   observer.observe(myRef.current)
  // }, [])
  return (
    <><Head>
    <title>Portfolio</title>
    <meta name="description" content="Présentation de mon profil." />
    <meta property="og:title" content="Accueil" />
    <meta property="og:description" content="Présentation de mon profil." />
  </Head>
    
    <div className={styles.learnContainer}>
      <div className={styles.learnBox}>
        <div className={styles.learnItems}>
          <div
            className={styles.madeBy}
          >
            <h1>Made possible with this video projet by Josh tried coding</h1>

            <iframe
            className={styles.video}
              src="https://www.youtube.com/embed/mSUKMfmLAt0?si=yPb4NQ0ZOVVb5HpT"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            </div>
          <div className={styles.listitems}>
            <h2>Functionnalities the project offered</h2>
            <ul ref={myRef} className={`${styles.firstUL}`}>
              <li className={`${myElement ? styles.animateUL : ''}`}>
                Home page <span className={styles.spans}>displaying posts</span> made by your followed communities if
                you are connected. These post component have an <span className={styles.spans}>upvote and
                downvote button</span>, accompagnied with a number of upvotes, which
                will be negative if there is more downvotes than upvotes. They
                also have the <span className={styles.spans}>number of comments</span> on that post.
              </li>
              <li className={`${myElement ? styles.animateUL : ''}`}><span className={styles.spans}>Prisma</span> database.</li>
              <li className={`${myElement ? styles.animateUL : ''}`}><span className={styles.spans}>Infinite scrolling</span>.</li>
              <li className={`${myElement ? styles.animateUL : ''}`}>
              <span className={styles.spans}>Authentification </span>with Google, made possible with
                Next-Auth. Sign out functionnality.
              </li>
              <li className={`${myElement ? styles.animateUL : ''}`}>Sign in <span className={styles.spans}>modal</span>.</li>
              <li className={`${myElement ? styles.animateUL : ''}`}><span className={styles.spans}>Search bar</span> used for searching communities.</li>
              <li className={`${myElement ? styles.animateUL : ''}`}><span className={styles.spans}>Create communities</span> in the home page.</li>
              <li className={`${myElement ? styles.animateUL : ''}`}>
                Subbreadit <span className={styles.spans}>page for each community</span>, about section,
                small create post component and a feed for the posts of that
                community.
              </li>
              <li className={`${myElement ? styles.animateUL : ''}`}><span className={styles.spans}>Subscription functionnality</span> for each subbreadit.</li>
              <li className={`${myElement ? styles.animateUL : ''}`}>
              <span className={styles.spans}>Caching</span> functionnality for these posts, made possible by <Link href={"https://upstash.com/"} style={{color: '#24e624'}}>Upstash</Link> database.
                It allows the page to display valuable informations about a
                post, like number of votes, the title, the author, the time it
                was created and the content.
              </li>
              <li className={`${myElement ? styles.animateUL : ''}`}>
              <span className={styles.spans}>Comment section</span> for posts, where you can enter a comment, <span className={styles.spans}>reply </span>
                to other comments, and vote for each individual comment.
              </li>
              <li className={`${myElement ? styles.animateUL : ''}`}>Settings page where you can <span className={styles.spans}>modify your username</span>.</li>
            </ul>
          </div>
          <div className={styles.listitems}>
            <h2>What I&apos;ve added (were not in the original project)</h2>
            <ul ref={ref2eUL} className={`${styles.firstUL}`}>
                <li className={`${my2eUl ? styles.animateUL : ''}`}><span className={styles.spans}>Sharing functionnality</span>, where it copies the link to a post, enabling the user to share posts wherever he wants.</li>
                <li className={`${my2eUl ? styles.animateUL : ''}`}><span className={styles.spans}>Refresh button</span> that refreshes the page.</li>
                <li className={`${my2eUl ? styles.animateUL : ''}`}><span className={styles.spans}>Members tab</span> in each subbreadits, where you can see who is the creator and each members in that community.</li>
                <li className={`${my2eUl ? styles.animateUL : ''}`}><span className={styles.spans}>Delete community</span> for the creator of a community that allows complete removal of a community from the database, including posts, subscriptions, comments, replies and votes.</li>
                <li className={`${my2eUl ? styles.animateUL : ''}`}><span className={styles.spans}>User page</span> where you can view the posts of that user, all the communities that this user moderate, the number of posts and comments that the user posted, including the number of communities that the user is subscribed to.</li>
                <li className={`${my2eUl ? styles.animateUL : ''}`}>If the posts under the users tab are yours and you are connected, you can <span className={styles.spans}>delete them directly</span> there, or you can go in the settings page where I&apos;ve added the same feature.</li>
                <li className={`${my2eUl ? styles.animateUL : ''}`}>If the user page that you visit is not yours, you can <span className={styles.spans}>directly subscribe or unsubscribe</span> from the communities that this user moderate.</li>
                <li className={`${my2eUl ? styles.animateUL : ''}`}>A name change feature that appears for the first time <span className={styles.spans}>if you haven&apos;t changed your name yet</span>.</li>
                <li className={`${my2eUl ? styles.animateUL : ''}`}><span className={styles.spans}>Friends functionnality</span> in the friends page where you can <span className={styles.spans}>search</span> for a username and send friend request to them. The person receiving the friend request can <span className={styles.spans}>accept or reject</span> the request. You can also see all your friends. You can also remove your friends from your friends list.
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
  
}

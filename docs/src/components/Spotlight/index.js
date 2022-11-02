import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function SpotLight() {
  return (
    <>
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.cont}>
        <div className={styles.left}>
           <div>
            <div className={styles.heading}>React Native CLI, <br /> What you looking for</div>
            <Link className="button button--secondary button--lg" to="/intro">
           Explore Docs
          </Link>
           </div>
        </div>
        <div className={styles.right}>
           <img src="img/earth.png" alt="" />
        </div>
        </div>
      </div>
    </section>
    <div className={styles.bottomtriangle}>

    </div>
    </>
  );
}

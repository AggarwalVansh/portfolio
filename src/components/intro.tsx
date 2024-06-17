import React from "react";
import styles from "../styles/portfolio.module.scss";

import Image from "next/image";

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.textContainer}>
        <h2>Hello, I'm</h2>
        <h1>Vansh Aggarwal</h1>
        <h3>A High School Student</h3>
      </div>

      <div className={styles.imageContainer}>
        <img
          src={
            "https://avatars.githubusercontent.com/u/160574546?s=400&u=bdbc4fb33c1b53b2010203e8d9c5b4e231f0acbf&v=4"
          }
          alt="Vansh"
          width={200}
          height={200}
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default Intro;

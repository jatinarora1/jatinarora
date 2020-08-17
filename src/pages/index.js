import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import cv from "./cv.pdf";

const features = [
  {
    title: <>Opensource Contributor</>,
    imageUrl: "img/opensource.svg",
    description: (
      <>
        I regularly contribute to opensource. Recently developed a machine learning application that can effectively detect theft.
      </>
    ),
  },
  {
    title: <>Writer</>,
    imageUrl: "img/blogger.svg",
    description: (
      <>
        I love to write. I have written for many publications. Many of my
        articles are quite popular.
      </>
    ),
  },
  {
    title: <>Software Developer</>,
    imageUrl: "img/developer.svg",
    description: (
      <>
        I am a machine learning developer. I have a lot of experience with TensorFlow. I have worked with Python. I am good at solving
        problems using technology.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`} description="A coder for fun :)">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <a
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              target="_blank"
              href={cv}
            >
              Download Resume
            </a>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

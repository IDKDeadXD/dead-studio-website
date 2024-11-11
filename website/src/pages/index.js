// index.js
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { useEffect, useRef } from 'react';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroOverlay} />
      <div className="container">
        <div className="hero__title">
          <img
            src="https://i.imgur.com/bw3JWDB.png"
            alt="Dead Studios"
            style={{
              maxWidth: '600px',
              width: '100%',
              height: 'auto',
              margin: '0 auto',
              display: 'block'
            }}
          />
        </div>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/projects">
            Projects
          </Link>
        </div>
      </div>
    </header>
  );
}

function ProjectSection() {
  const projectRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = projectRef.current.querySelectorAll(`.${styles.projectSquare}`);
    projectElements.forEach((el) => observer.observe(el));

    return () => {
      projectElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={projectRef} className={styles.projectSection}>
      <h2 className={styles.sectionTitle}>Our Projects</h2>
      <div className={styles.projectContainer}>
        <div className={clsx(styles.projectSquare)}>
          <h3 className={styles.projectTitle}>Cool Project 1</h3>
          <hr className={styles.projectLine} />
          <p className={styles.projectDescription}>Description or preview content for Project 1</p>
        </div>
        <div className={clsx(styles.projectSquare)}>
          <h3 className={styles.projectTitle}>Cool Project 2</h3>
          <hr className={styles.projectLine} />
          <p className={styles.projectDescription}>Description or preview content for Project 2</p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="mc studio">
      <HomepageHeader />
      <main>
        <ProjectSection />
      </main>
    </Layout>
  );
}

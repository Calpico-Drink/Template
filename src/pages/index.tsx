import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>
        NextJS Template!
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p>

      <div className={styles.grid}>
        <a href="https://react-icons.github.io/react-icons/" className={styles.card}>
          <h3>React Icons &rarr;</h3>
          <p>Icon Library thats installed with this template.</p>
        </a>

        <a href="https://nextjs.org/docs" className={styles.card}>
          <h3>Docs &rarr;</h3>
          <p>NextJS Documentation and Tutorials. </p>
        </a>

        <a
          href="https://marketingplatform.google.com/about/analytics/?hl=en_US" className={styles.card}>
          <h3>Google Analytics &rarr;</h3>
          <p>Tools to track your website. (Comes pre installed)</p>
        </a>

        <a
          href="https://vercel.com"
          className={styles.card}
        >
          <h3>Deploy &rarr;</h3>
          <p>
            Opens Vercel, a NextJS compatible cloud.
            </p>
        </a>
      </div>
    </div>
  )
}

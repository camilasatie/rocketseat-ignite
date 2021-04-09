import Head from 'next/head';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.homeContainer}>
        <section className={styles.hero}>
          <span className={styles.welcome}>👏 Hey, welcome</span>
          <h1 className={styles.title}>news about the <span>React</span> world.</h1>
          <p className={styles.description}>
            Get access to all the publications
            <span> for $9.90 month</span>
          </p>
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

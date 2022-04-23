import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import react, { useEffect } from 'react'

export default function Home() {
  const router = useRouter();
  const query = router.query;
  const counter = query.counter;
  useEffect(() => {
    router.push('/?counter=10', undefined, { shallow: true })
  }, []);

  useEffect(() => {
    console.log('the query has changed!')
  }, [query])

  console.log(query.counter)
  return (
    <div>
      Welcome to Next.JS!
      <br></br>
      The current counter is: {query.counter}!
      <button onClick={() => {
        router.push(`/?counter=${parseInt(counter) + 1}`, undefined, { shallow: true })
      }}>Add to counter!</button>
      <button onClick={() => {
        router.push(`/?counter=${parseInt(counter) - 1}`, undefined, { shallow: true })
      }}>Remove from counter!</button>
      <br></br>
      <Link href={"/dynamic-route/testquery"}>
        <a>Go to Dynamic Route!</a>
      </Link>
      <br></br>
      <button onClick={() => router.push('/about')}>About page!</button>
      <button onClick={() => router.push('/readmore')}>Read More Page!</button>
      <button onClick={() => router.push('/test')}>Test Page!</button>
      <button onClick={() => router.push('/posts/23')}>Post: 23!</button>
      <button onClick={() => router.push('/dynamic-route/same-as-posts')}>Dynamic Routes!</button>
      <button onClick={() => router.push('/catch-all/firstquery/secondquery/test/fire/your/weapon/hello/world!')}>Catch All Routes!</button>
    </div>
  )
}
{/* <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div> */}
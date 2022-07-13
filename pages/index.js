import Head from 'next/head'
import styles from '../styles/Home.module.css'

// components
import Div1 from '../components/div_1'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix India - Watch TV shows Online</title>
        <meta name="description" content="Netflix India - Watch TV shows Online" />
        <link rel="icon" href="small_logo.png" />
      </Head>
        <Div1/>
    </div>
  )
}

import Head from 'next/head'
import styles from '../styles/Home.module.css'

// components
import Div1 from '../components/Div1'
import GreyDivider from '../components/GreyDivider'
import Div2 from '../components/Div2'
import Div3 from '../components/Div3'
import Div4 from '../components/Div4'
import Div5 from '../components/Div5'
import FaqSection from '../components/FaqSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix India - Watch TV shows Online</title>
        <meta name="description" content="Netflix India - Watch TV shows Online" />
        <link rel="icon" href="small_logo.png" />
      </Head>
      
        <Div1/>
        <GreyDivider/>

        <Div2/>
        <GreyDivider/>

        <Div3/>
        <GreyDivider/>

        <Div4/>
        <GreyDivider/>
        
        <Div5/>
        <GreyDivider/>

        <FaqSection/>
        <GreyDivider/>
        
        <Footer/>
    </div>
  )
}

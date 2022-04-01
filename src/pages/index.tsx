import type { NextPage } from 'next'

import Head from 'next/head'
import FirstComponent from '../component/firstComponent'
import Técnicas from '../component/técnicas'
import WhatsAppAndPorfolio from '../component/whatsAppAndPortfólio'
import Localization from '../component/localization'


import styles from '../styles/Home.module.scss'
import Portfólio from '../component/portfólio'
import Agenda from '../component/agenda'
import Footer from '../component/foooter'
import PopUp from '../component/popUp'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Suely - Lash Designer</title>
        <meta name="description" content="Suely Lash Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <FirstComponent />
        <WhatsAppAndPorfolio />
        <Técnicas />
        <Localization />
        <Portfólio />
        <Agenda />
        <Footer />

        <PopUp />


      </main>
    </div>
  )
}

export default Home

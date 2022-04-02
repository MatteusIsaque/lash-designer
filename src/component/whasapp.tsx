import styles from './../styles/whatsapp.module.scss'

import Image from 'next/image'

import Zap from './../img/whatsapp.png'
import Link from 'next/link'

export default function WhatsApp() {

  return (
    <div id="zapFlutuante" className={styles.main}>
      <Link href='https://api.whatsapp.com/send?phone=556199492015&text='>
        <Image  id="zapFlutuante" src={Zap} />
      </Link>
    </div >
  )
}
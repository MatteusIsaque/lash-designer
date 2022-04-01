import styles from './../styles/whatsapp.module.scss'

import Image from 'next/image'

import Zap from './../img/whatsapp.png'

export default function WhatsApp(){

  return(
    <div className={styles.main}>
      <Image src={Zap} />
    </div>
  )
}
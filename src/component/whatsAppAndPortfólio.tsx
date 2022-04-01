import Link from 'next/link'
import styles from '../styles/whatsAppAndPortfólio.module.scss'

export default function WhatsAppAndPortifolio() {

  return (
    <article className={styles.main}>
      <p>
        Valorizar a beleza respeitando
        sua singularidade, sutileza e delicadeza
        para evidenciar o natural!
      </p>
      <p className={styles.callZap}>
        Agende sua visita em nosso whatsapp
      </p>

      <button id="buttonZap" className={styles.whatsApp}>
        <Link href='https://api.whatsapp.com/send?phone=556199492015&text='>
          AGENDAR NO WHATSAPP
        </Link>
      </button>

      <Link href='/?counter=#slide'>
        <button className={styles.portfólio}>
          VER PORTFÓLIO
        </button>
      </Link>
    </article>
  )
}
import styles from '../styles/agenda.module.scss'

import Link from 'next/link'

export default function Agenda() {


  return (
    <article className={styles.main}>
      <h2>Agendar agora</h2>
      <p>Aproveite para solicitar um agendamento e garanta sua vaga no seu melhor horário</p>

      <button id="buttonZap" className={styles.whatsApp}>
        <Link href='https://api.whatsapp.com/send?phone=556199492015&text='>
          AGENDAR NO WHATSAPP
        </Link>
      </button>
    </article >
  )
}
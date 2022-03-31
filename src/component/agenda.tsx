import styles from '../styles/agenda.module.scss'

export default function Agenda() {


  return (
    <article className={styles.main}>
      <h2>Agendar agora</h2>
      <p>Aproveite para solicitar um agendamento e garanta sua vaga no seu melhor horário</p>

      <button className={styles.whatsApp}>
        AGENDAR NO WHATSAPP
      </button>
    </article>
  )
}
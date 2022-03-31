import styles from './../styles/footer.module.scss'

export default function Footer() {

  var data = new Date()

  console.log(data.getFullYear)

  return (
    <footer className={styles.main}>
      <h3>Politica de privacidade</h3>

      <h4>Desenvolvido por <a href="https://www.isaquesestudios.com.br/">isaques Estúdios</a> 2022</h4>
    </footer>
  )
} 
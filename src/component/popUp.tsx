import { useEffect, useState } from 'react'
import styles from './../styles/politics.module.scss'

export default function PopUp() {
  const [close, setClose] = useState('false')

  useEffect(() => {

    setClose(window.sessionStorage.getItem('popUp')!)

    if (close == 'true') {
      window.sessionStorage.setItem('popUp', 'true')
    }
  }, [close])



  return (
    <>
      {
        !close && <div id="PopUp" className={styles.main}>
          <p>Ao permanecer na página ou ao aceitar esse popup, você estará concordando com nossa <a href="/politica-de-privacidade">política de privacidade</a></p>

          <button onClick={() => { setClose('true') }}>Aceito</button>
        </div>
      }
    </>
  )
}
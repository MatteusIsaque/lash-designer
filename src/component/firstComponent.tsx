import Image from 'next/image'
import styles from './../styles/firstComponent.module.scss'

import LastDesigner from './../img/1.jpg'

export default function FirstComponent() {

  return (
    <article className={styles.main}>
      <Image src={LastDesigner} />
    </article>
  )
}
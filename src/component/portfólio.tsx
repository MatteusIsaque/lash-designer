import styles from '../styles/portfólio.module.scss'
import Image from 'next/image'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Slide1 from './../img/s1.jpg'
import Slide2 from './../img/s2.jpg'
import Slide3 from './../img/s3.jpg'
import Slide4 from './../img/s4.jpg'


export default function Portfólio() {
  const responsive = {
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2
    }
  };

  return (
    <article id="slide" className={styles.main}>
      <h2>Portfólio</h2>
      <p>Fio a Fio clássico: É adicionado apenas um fio sintético a cada fio natural.</p>
      <div className={styles.slide}>
        <Carousel infinite={true} responsive={responsive}>
          <div className={styles.slideItem}>
            <Image src={Slide1} />
            <h2>HÍBRIDO</h2>
          </div>
          <div className={styles.slideItem}>
            <Image src={Slide2} />
            <h2>MEGA VOLUME</h2>
          </div>
          <div className={styles.slideItem}>
            <Image src={Slide3} />
            <h2>VOLUME RUSSO</h2>
          </div>
          <div className={styles.slideItem}>
            <Image src={Slide4} />
            <h2>VOLUME BRASILEIRO</h2>
          </div>
        </Carousel>
      </div>
      <p>Híbrido: O alongamento de cílios híbrido é a fusão do clássico fio a fio com o volume russo.</p>
      <p>Mega volume: São colocados fios ultrafinos uns nos outros, até ficar com grande volume.</p>
      <p>Volume russo: O volume russo nos cílios é uma técnica de colocação de cílios com fios sintéticos, para dar um maior volume.</p>
      <p>Volume brasileiro: Técnica usando cílios em formato Y, que não perdem a curvatura. Ela proporciona fios mais abertos, mas, com um acabamento como o volume russo. Aplicação leva de 1:30 a 2 hs</p>
    </article>
  )
}
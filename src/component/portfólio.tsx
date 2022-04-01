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
      items: 1
    }
  };

  return (
    <article id="slide" className={styles.main}>
      <h2>Portfólio</h2>
      <p>Fio a Fio clássico: É adicionado apenas um fio sintético a cada fio natural.</p>
      <div className={styles.slide}>
        <Carousel responsive={responsive}>
          <Image src={Slide1} />
          <Image src={Slide2} />
          <Image src={Slide3} />
          <Image src={Slide4} />
        </Carousel>

      </div>
    </article>
  )
}
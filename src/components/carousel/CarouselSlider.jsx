import { Carousel } from './Carousel'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'
import React, {useState } from 'react'
import styles from './carousel.module.scss'

export const CarouselSlider  = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length- 1 : current - 1);
  }

  if(!Array.isArray(slides) || slides.length <= 0){
    return null;
  };

  return(
  <section className={styles.slider}>
    <FaArrowAltCircleLeft className={styles.leftArrow} onClick={prevSlide} />
    <FaArrowAltCircleRight className={styles.rightArrow} onClick={nextSlide} />
    {Carousel.map((slide, index) => {
      return(
        <div className={index === current ? 'slideactive' : 'slide'} key={index}>
        {index === current && (<img src={slide.image} alt="StreetwearImg" className={styles.image} />)}
        </div>
      )
    })}

  </section>
  )
}
import React, {useState} from 'react';
import { Carousel } from './Carousel';
import './CarouselSlides.css';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'

export const CarouselSlider  = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length- 1 : current - 1);
  }

  console.log(current);

  if(!Array.isArray(slides) || slides.length <= 0){
    return null;
  };

  return(
  <section className="slider">
    <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
    <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    {Carousel.map((slide, index) => {

      return(
        <div className={index === current ? 'slideactive' : 'slide'} key={index}>
        {index === current && (<img src={slide.image} alt="Streetwear Img" className="image" />)}
        </div>
      )
    })}

  </section>
  )
}
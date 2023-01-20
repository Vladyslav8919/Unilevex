import React, { useState } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { IoMdQuote } from 'react-icons/io';
import { sliderData } from '../../data';
import Title from '../Title';

const Slider = () => {
  const [data] = useState(sliderData);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => {
      let index = prevIndex + 1;
      if (index > data.length - 1) index = 0;
      if (index < 0) index = data.length - 1;
      return index;
    });
  };

  const prevSlide = () => {
    setIndex((prevIndex) => {
      let index = prevIndex - 1;
      if (index < 0) index = data.length - 1;
      return index;
    });
  };

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       nextSlide();
  //     }, 3000);
  //     return () => clearInterval(interval);
  //   }, [index]);

  return (
    <section className="slider-section">
      <Title>Reviews 2</Title>
      <div className="slider-section-center">
        {sliderData.map((item, itemIndex) => {
          const { id, image, name, title, quote } = item;
          let position = 'nextSlide';
          if (itemIndex === index) position = 'activeSlide';
          if (
            itemIndex === index - 1 ||
            (index === 0 && itemIndex === data.length - 1)
          )
            position = 'prevSlide';

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="slider-person-img" />
              <h4>{name}</h4>
              <p className="slider-title">{title}</p>
              <p className="slider-text">{quote}</p>
              <IoMdQuote className="slider-icon" />
            </article>
          );
        })}
        <button className="prev" onClick={prevSlide}>
          <BsChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <BsChevronRight />
        </button>
      </div>
    </section>
  );
};
export default Slider;

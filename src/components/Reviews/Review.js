import { reviews } from '../../data';
import React, { useState } from 'react';
import { IoMdQuote } from 'react-icons/io';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) return 0;
    if (number < 0) return reviews.length - 1;
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <IoMdQuote className="text-2xl" />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <BsChevronLeft />
        </button>
        <button className="random-btn" onClick={randomPerson}>
          Surprise me
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <BsChevronRight />
        </button>
      </div>
    </article>
  );
};
export default Review;

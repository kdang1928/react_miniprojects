import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  console.log(people[index]);

  const handleLeftClick = () => {
    if (index > 0) setIndex(index - 1);
    else setIndex(people.length - 1);
  };

  const handleRightClick = () => {
    if (index < people.length - 1) setIndex(index + 1);
    else setIndex(0);
  };

  const randomBtnClick = () => {
    // console.log(Math.round(Math.random() * (people.length - 1)));
    const randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber !== index) setIndex(randomNumber);
    else {
      handleLeftClick();
    }
  };

  return (
    <>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button
            className="prev-btn"
            onClick={() => {
              handleLeftClick();
            }}
          >
            <FaChevronLeft />
          </button>
          <button
            className="next-btn"
            onClick={() => {
              handleRightClick();
            }}
          >
            <FaChevronRight />
          </button>
        </div>
        <button
          className="random-btn"
          onClick={() => {
            randomBtnClick();
          }}
        >
          Surprise Me
        </button>
      </article>
    </>
  );
};

export default Review;

/*
Behavior:
Navigate through the reviews by clicking on icons
*/

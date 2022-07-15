import React from 'react';
import './Review.scss';
import Reviews from '../constants/Reviews';

const Review = () => {
  return (
    <ul className="review__list">
      {
        Reviews.map((item, index) => {
          return (
            <li key={index} className="review__item">
              <img className="review__portrait"
                src={item.clientPortrait}
                alt={item.clientName}
              />
              <h3 className="review__author">
                {item.clientName}
              </h3>
              <p className="review__text">
                {item.text}
              </p>
            </li>
          );
        })
      }
    </ul>
  );
};

export default Review;

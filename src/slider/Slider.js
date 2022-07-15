import "./Slider.scss";
import { useState, useEffect } from "react";
import Cards from '../constants/Cards';

const Slider = () => {

  const [index, setIndex] = useState(1);
  const [card, setCard] = useState(Cards[index]);  
  
  const right = async () => {
    await setIndex((index + 1) % Cards.length);
    setCard(Cards[index]);
  };

  const left = () => {
    console.log(index);
    if (index > 0) {
      setIndex((index - 1) % Cards.length);
    } else {
      setIndex((index - 1) + Cards.length);
    }
    setCard(Cards[index]);
  };

  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__arrow slider__arrow-right" onClick={right}></div>
        <div className="slider__arrow slider__arrow-left" onClick={left}></div>
        <div className="slider__info">
          <h3 className="slider__title">
            {card.title}
          </h3>
          <button className="slider__link">Подробнее</button>
          <button className="slider__link">Забронировать</button>
        </div>
        
        {Cards.map((item, i) => {
          
          let className = "slider__card";

          if (i === index) {
            className = "slider__card slider__card_active";
          } 

          return (
            <>
              <img
                key={item.id}
                className={className}
                src={item.image}
                alt="Comic"
              ></img>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;

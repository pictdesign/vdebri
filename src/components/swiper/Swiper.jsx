import { NavLink } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Cards from '../../constants/Cards';
import 'swiper/scss';
import './Swiper.scss';

const Slider = () => {
  return (
    <Swiper
      loop={true}
      modules={[Navigation]}
      navigation={true}
      slidesPerView={1}
      className="swiper"
    >
      {
        Cards.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='swiper-slide-container'>
                <img className="swiper-image" src={item.image} alt={item.title} />
                <div className="swiper-text-wrapper">
                  <h3 className="swiper-title">
                    {item.title}
                  </h3>
                  <p className="swiper-subtitle">
                    {item.subtitle}
                  </p>
                </div>
                <div className="swiper-button-container">
                  <NavLink to={item.link} className="swiper-link">
                    Подробнее
                  </NavLink>
                  <NavLink to={item.booking} className="swiper-link swiper-link-booking">
                    Забронировать
                  </NavLink>
                </div>
              </div>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default Slider;

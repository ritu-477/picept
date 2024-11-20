import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CONTINUE_SLIDER_DATA } from '../utils/Helper';

const Trusted = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-[30px] lg:pb-[77px] md:pb-14 sm:pb-12 pb-6">
      <div className="container">
        <h3 className="lg:text-5xl sm:text-4xl text-2xl text-primary-white text-center">Trusted By Teams at</h3>
        <div className="mt-12">
          <Slider {...settings}>
            {CONTINUE_SLIDER_DATA.map((logo, index) => (
              <div key={index} className="!flex !items-center !justify-center h-[79px] ">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain"
                  style={{ maxWidth: logo.maxWidth, width: '100%' }} 
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Trusted;

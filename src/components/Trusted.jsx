import React from 'react';
import { CONTINUE_SLIDER_DATA } from '../utils/Helper';

const Trusted = () => {
  return (
    <div className="pt-[30px] lg:pb-[77px] md:pb-14 sm:pb-12 pb-6 bg-ink-black" id='about'>
      <div className="overflow-hidden mx-auto max-w-[1920px]">
        <h3 className="lg:text-5xl font-medium sm:text-4xl text-2xl text-primary-white text-center">Trusted By Teams at</h3>
        <div className="sm:mt-12 mt-6 flex slider-container">
          {[...CONTINUE_SLIDER_DATA, ...CONTINUE_SLIDER_DATA].map((logo, index) => (
            <div
              key={index}
              className="!flex md:mx-[27px] mx-3 !items-center !justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain"
                style={{ maxWidth: logo.maxWidth, width: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusted;
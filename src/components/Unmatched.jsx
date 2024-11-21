import React, { useState } from 'react';
import CommonHeading from '../common/CommonHeading';
import PrimaryPara from '../common/PrimaryPara';
import Icon from '../common/Icons';
import unmatchedImg from '../assets/images/webp/unmatched-image.webp';
import { TAB_DATA } from '../utils/Helper';

const Unmatched = () => {
  const [activeTab, setActiveTab] = useState(TAB_DATA[0].id); 

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const activeTAB_DATA = TAB_DATA.find((tab) => tab.id === activeTab);

  return (
    <div className='bg-unmatched bg-center bg-no-repeat bg-cover'>
      <div className='container pb-7  md:pt-14 sm:pt-12 pt-6 lg:pt-[72px]'>
        <div className='lg:py-12 md:px-8 sm:py-8 py-6 px-6 rounded-[32px] bg-light-white backdrop-blur-[20.6px]'>
          <CommonHeading className='text-center' text={'Unmatched Performance'} />
          <PrimaryPara
            className='text-center pt-4 max-w-[569px] mx-auto'
            text={'Choose a router based on your preferences for Quality, Cost, Speed, and latency'}
          />
          <div className='flex gap-6 justify-center items-center md:py-10 py-6 overflow-x-auto scrollbar-hidden'>
            {TAB_DATA.map((tab) => (
              <button
                key={tab.id}
                className={`py-2 px-[50px] text-base sm:text-xl font-normal ${activeTab === tab.id ? 'text-primary-white bg-midnight-black shadow-custom5xl py-2 px-[50px] border border-border-midnight rounded-[32px]' : 'text-grey border rounded-[32px] bg-charcoal-black shadow-custom5xl border-transparent-gray py-2 px-[50px]'
                  }`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.id}
              </button>
            ))}
          </div>
          <div className='flex flex-row flex-wrap -mx-3 lg:justify-between justify-center items-center'>
  {activeTAB_DATA && (
    <div className='lg:w-1/3 w-full flex-col flex justify-center items-center lg:items-start'>
                <div className='flex flex-col'>
                  <p className='text-4xl sm:text-2xl leading-custom-5xl font-normal lg:text-start text-center text-primary-white pb-4'>
                    {activeTAB_DATA.heading}
                  </p>
                  {activeTAB_DATA.stats.map((stat, index) => (
                    <div className='flex gap-3 pb-4 items-center' key={index}>
                      <Icon className='' iconName={stat.iconName} />
                      <p className='text-custom3xl leading-custom-xl text-grey font-medium'>
                        {stat.label}: <span className='text-green'>{stat.value}</span>
                      </p>
                    </div>
                  ))}
      </div>
    </div>
  )}
  <div className='lg:w-1/2 w-full flex-col flex max-lg:justify-center max-lg:items-center mt-5'>
    <p className='text-xl text-grey font-bold pb-4'>Quality V/S Price</p>
    <img className='rounded-[32px] shadow-custom4xl w-full' src={unmatchedImg} alt='unmatched-image' />
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Unmatched;

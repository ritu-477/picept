import React from 'react'
import Icon from '../common/Icons'
import { MISSION_CONTROL_CARDS } from '../utils/Helper'
import CommonHeading from '../common/CommonHeading'
import missionEllipse from '../assets/images/webp/mission-ellipse.webp'
import missionStar from '../assets/images/webp/mission-star.webp'

const Mission = () => {
  return (
    <div className='pt-10 md:pb-12 sm:pb-8 pb-6 lg:pb-[70px] relative bg-ink-black' id='blogs'>
      <img className='absolute lg:block hidden left-0 top-0 max-w-[350px] h-[411px] -z-10 w-full' src={missionEllipse} alt="mission-ellipse" />
      <img className='absolute -z-10 right-0 bottom-[120px] lg:block hidden max-w-[100px]' src={missionStar} alt="mission-star" />
      <div className='container'>
        <CommonHeading className='text-center mx-auto max-w-[650px]' text={'Mission Control for Your AI Operations '} />  
        <div className='flex flex-wrap flex-row -mx-3 justify-center pt-12'>
          {MISSION_CONTROL_CARDS.map((obj, index) => (
            <div key={index} className='lg:w-[33.33%] sm:w-[50%] w-full px-3 flex justify-center mb-6'>
              <div className='bg-dark-gray hover:bg-primary-gray p-5 rounded-[20px] w-full border border-primary-gray transition duration-700 hover:shadow-[0px_-4px_4px_0px_#FFFFFF40]'>
                <div className='w-20 h-20 rounded-2xl bg-light-orange flex justify-center items-center'>
                  <Icon svgClass={obj === index ? "" : ""} iconName={obj.icon} />
                </div>
                <p className='font-bold md:text-custom3xl text-xl md:leading-custom-xl text-primary-white pt-5 pb-4'>{obj.cardText}</p>
                <p className='font-bold text-base md:text-xl text-grey max-w-[324px]'>{obj.paragraph1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
   </div>
  )
}

export default Mission
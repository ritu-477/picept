import React from 'react'
import CommonHeading from '../common/CommonHeading'
import PrimaryPara from '../common/PrimaryPara'
import CommonButton from '../common/CommonButton'
import endImg from '../assets/images/webp/end-to-end-image.webp'
import starEllipse from '../assets/images/webp/star-ellipse.webp'
import aiEllipse from '../assets/images/webp/mission-ellipse.webp'

const EndToEnd = () => {
  return (
      <div className='pb-9 relative bg-ink-black'>
          <img className='absolute left-0 -z-10 max-w-[411px] lg:block hidden h-[411px] top-[5%]' src={aiEllipse} alt="ai-ellipse" />
          <img className='absolute lg:block hidden -z-10 left-5 top-[58%] max-w-[67.22px]' src={starEllipse} alt="star-ellipse" />
          <div className='container'>
              <div className='max-w-[1140px] rounded-[32px] bg-end-to-end bg-ink-black py-6 px-4 sm:py-8 md:py-12 sm:px-6 lg:p-[64px_24px_57px_24px]'>
                  <div className='flex flex-row flex-wrap -mx-3 justify-between'>
                      <div className='lg:w-1/2 px-3 w-full flex flex-col justify-center max-lg:items-center max-lg:mt-5'>
                          <CommonHeading className='lg:max-w-[498px] w-full max-lg:text-center' text={'End-to-end visibility of your LLM applications'} />
                          <PrimaryPara className='pt-3 lg:max-w-[438px] w-full max-lg:text-center' text={'Monitor 20+ critical metrics across your AI operations. From response quality to compliance, transform raw data into confident decisions.'} />
                          <div className='md:mt-12 mt-6'>
                              <CommonButton className='bg-orange hover:bg-white hover:text-orange duration-700' text={'Book a Demo'} />
                          </div>
                      </div>
                      <div className='lg:w-1/2 px-3 w-full flex flex-col justify-center max-lg:items-center max-lg:mt-5'>
                          <img src={endImg} className='max-w-[558px] rounded-[32px] shadow-custom5xl lg:-m-5 w-full' alt="end-to-end-image" />
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default EndToEnd
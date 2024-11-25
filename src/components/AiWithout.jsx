import React from 'react'
import providerImg from '../assets/images/webp/provider-image.webp'
import CommonHeading from '../common/CommonHeading'
import PrimaryPara from '../common/PrimaryPara'
import CommonButton from '../common/CommonButton'
import aiEllipse from '../assets/images/webp/mission-ellipse.webp'

const AiWithout = () => {
  return (
    <div className='lg:pt-[61px] md:pt-14 sm:pt-12 pt-6 md:pb-[68px] sm:pb-12 pb-6 relative bg-ink-black' id='careers'>
      <img className='absolute left-0 max-w-[411px] lg:block hidden h-[411px] top-[17%]' src={aiEllipse} alt="ai-ellipse" />
      <div className='w-[85px] h-[300px] lg:block hidden rounded-full blur-[100px] absolute right-0 top-[-10%] bg-orange bg-opacity-[55%]'></div>
      <div className='container'>
        <div className='lg:py-[66px] z-10 md:py-12 sm:py-8 py-6 px-6 rounded-[32px] bg-light-white backdrop-blur-[20.6px]'>
          <div className='flex lg:flex-row flex-wrap -mx-3 justify-between flex-col-reverse'>
            <div className='lg:w-[58.33%] px-3 w-full flex flex-col justify-center max-lg:items-center max-lg:mt-5'>
                <img src={providerImg} className='max-w-[618px] lg:-m-5 w-full' alt="provider-image" />
            </div>
            <div className='lg:w-[41.66%] px-3 w-full flex flex-col max-lg:justify-center max-lg:items-center'>
              <CommonHeading className='lg:max-w-[370px] w-full max-lg:text-center' text={'AI Without Boundaries'} />
              <PrimaryPara className='pt-3 lg:max-w-[392px] w-full max-lg:text-center' text={'Effortlessly access 100+ LLMs from top providers like AWS Bedrock, Azure, Google, Vertex AI, OpenAI, and more.'} />
              <div className='md:mt-12 mt-6'>
                <CommonButton className='bg-orange hover:bg-white hover:text-orange duration-700' text={'Explore our universal API'} />
              </div>
            </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default AiWithout
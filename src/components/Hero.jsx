import React from 'react'
import Header from '../common/Header'
import PrimaryPara from '../common/PrimaryPara'
import CommonButton from '../common/CommonButton'
import heroImg from '../assets/images/webp/hero-image.webp'
import heroStar from '../assets/images/webp/hero-star.webp'

const Hero = () => {
  return (
      <div className='bg-hero bg-ink-black bg-cover bg-no-repeat bg-center'>
          <Header />
          <div className='xl:pt-[149.91px] lg:pt-32 md:pt-24 sm:pt-16 pt-14 xl:pb-[150px] lg:pb-20 md:pb-14 sm:pb-12 pb-6 relative max-w-[1920px]'>
              <img className='absolute lg:block hidden bottom-0 right-0 max-w-[69.4px] w-full' src={heroStar} alt="hero-star" />
              <div className='container'>
                  <div className='flex flex-col max-xl:justify-center max-xl:items-center'>
                      <div className='xl:w-[45%] w-full flex flex-col justify-center'>
                          <h1 className='xl:text-custom-7xl xl:leading-custom-9xl lg:text-6xl md:text-5xl sm:text-4xl font-bold text-3xl text-primary-white xl:max-w-[513px] max-xl:text-center'>Smart Routing, One Unified API</h1>
                          <PrimaryPara className='pt-4 xl:max-w-[514px] w-full max-xl:text-center' text={"Cut LLM Costs by Up to 99%, Evaluate AI Performance, Ensure Compliance, Build Trust, and Gain Superior Visibility Across Global Providers and Your Data"} />
                          <div className='flex max-xl:justify-center gap-[10px] pt-6 sm:pt-8 md:pt-12'>
                              <CommonButton className='bg-orange hover:bg-white hover:text-orange duration-700 py-3' text='Book a Demo' />
                              <CommonButton className='bg-ink-black border hover:bg-white hover:text-ink-black duration-700 border-primary-white py-3' text='Join Our Waitlist' />
                          </div>
                      </div>
                      <div className='xl:hidden block mt-6'>
                          <img src={heroImg} className='max-w-[648px] w-full' alt="hero-image" />
                      </div>
                     </div>
              </div>
              <div className='absolute xl:block hidden right-[57px] top-[92px] overflow-hidden'>
                  <img src={heroImg} className='max-w-[648px] w-full' alt="hero-image" />
              </div>
          </div>
    </div>
  )
}

export default Hero
import React from 'react'
import CommonHeading from '../common/CommonHeading'
import PrimaryPara from '../common/PrimaryPara' 
import CommonButton from '../common/CommonButton'
import trustImg from '../assets/images/webp/ai-trust-image.webp'

const AiTrust = () => {
  return (
      <div className='bg-trust bg-cover bg-no-repeat bg-center md:pt-[53px] pb-8 bg-ink-black' id='book'>
          <div className='container lg:pt-[124px] md:pt-20 sm:pt-16 pt-6 lg:pb-[104px] md:pb-20 sm:pb-16 pb-6'>
              <div className='flex lg:flex-row flex-wrap -mx-3 justify-between flex-col-reverse'>
                  <div className='lg:w-[57.33%] px-3 w-full flex flex-col justify-center max-lg:items-center max-lg:mt-5'>
                      <img src={trustImg} className='max-w-[618px] w-full' alt="trust-image" />
                  </div>
                  <div className='lg:w-[42.66%] px-3 w-full flex flex-col justify-center max-lg:items-center'>
                      <CommonHeading className='lg:max-w-[464px] w-full max-lg:text-center' text={'AI You Can Trust'} />
                      <PrimaryPara className='pt-3 lg:max-w-[472px] w-full max-lg:text-center' text={'Keep your existing Al setup while we analyze and optimize your entire stack. From cost savings to compliance, see the difference before you switch.   '} />
                      <div className='md:mt-12 mt-6'>
                          <CommonButton className='bg-orange hover:bg-white hover:text-orange duration-700' text={'Get started now'} />
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default AiTrust
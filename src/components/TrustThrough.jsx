import CommonHeading from '../common/CommonHeading'
import PrimaryPara from '../common/PrimaryPara'
import Icon from '../common/Icons'
import { useState } from 'react'
import { TAB_CONTENT } from '../utils/Helper'
import trustStar from '../assets/images/webp/trust-star.webp'

const TrustThrough = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className='bg-trust-through max-lg:bg-cover lg:bg-[length:100%_100%] bg-no-repeat bg-center bg-light-white relative'>
      <img className='absolute lg:block hidden left-[28px] max-w-[61.77px] top-[165px]' src={trustStar} alt="trust-star" />
      <div className='container lg:py-[100px] md:py-20 sm:py-14 py-6'>
        <div className='sm:py-9 sm:px-7 py-6 px-4 rounded-[32px] bg-light-white backdrop-blur-[20.6px]'>
          <CommonHeading
            className='max-w-[726px] mx-auto text-center'
            text={"Trust Through Continuous AI Evaluation"}
          />
          <PrimaryPara
            className='pt-4 max-w-[690px] mx-auto text-center'
            text={"Effortlessly evaluate and validate AI systems against operational and compliance requirements "}
          />
          <div className='flex mt-6 md:mt-10 h-12 bg-transparent-black max-w-[1084px] justify-between w-full rounded-[63px] overflow-x-auto scrollbar-hidden'>
            {TAB_CONTENT.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`font-normal lg:text-xl text-base justify-center items-center flex gap-2 ${activeTab === index
                  ? 'bg-button-bg text-primary-white rounded-[63px] border border-border-primary-gray'
                  : 'text-grey'
                  } ${tab.title === 'Evaluation API' ? 'py-[10px] px-6 text-nowrap' : 'xl:px-12 px-4 md:px-4 py-3'
                  }`}>
                <Icon
                  className={`${activeTab === index ? 'path-orange' : 'path-grey'
                    }`} iconName={tab.icon}/>
                {tab.title}
              </button>
            ))}
          </div>
          <div className='mt-8'>
            <div className='flex flex-row flex-wrap mt-8 -mx-3'>
              <div className='lg:w-1/2 px-3 w-full flex flex-col justify-center max-lg:items-center'>
                <div className='flex flex-col'>
                  <h3 className='font-bold text-2xl md:text-custom-4xl lg:text-start text-center leading-custom-4xl text-primary-white lg:max-w-[471px]'>
                    {TAB_CONTENT[activeTab].description}
                  </h3>
                  {TAB_CONTENT[activeTab].points.map((point, idx) => (
                    <div key={idx} className='flex gap-2 mt-4 items-center'>
                      {activeTab !== TAB_CONTENT.findIndex(tab => tab.title === 'Evaluation API') && (
                        <Icon iconName="click" />
                      )}
                      <p className='text-xl font-bold text-grey lg:max-w-[470px] w-full'>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className='lg:w-1/2 px-3 w-full flex max-lg:justify-center max-lg:items-center max-lg:mt-5'>
                <img
                  src={TAB_CONTENT[activeTab].image}
                  className='max-w-[450px] w-full'
                  alt={`${TAB_CONTENT[activeTab].title}-image`}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TrustThrough
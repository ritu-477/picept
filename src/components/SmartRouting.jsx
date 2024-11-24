import React, { useState } from 'react';
import PrimaryPara from '../common/PrimaryPara';
import CommonButton from '../common/CommonButton';
import CommonHeading from '../common/CommonHeading';
import Icon from '../common/Icons';
import pythonImg from '../assets/images/webp/python-image.webp';
import openImg from '../assets/images/webp/open-ai.webp';
import nodeImg from '../assets/images/webp/open-node.webp';

const SmartRouting = () => {
  const [activeTab, setActiveTab] = useState('PythonSDK');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'PythonSDK':
        return (
          <img src={pythonImg} className='max-w-[510px] w-full' alt="Python SDK Image" />
        );
      case 'OpenAISDK':
        return (
          <img src={openImg} className='max-w-[510px] w-full' alt="Python SDK Image" />

        );
      case 'OpenAINodeSDK':
        return (
          <img src={nodeImg} className='max-w-[510px] w-full' alt="Python SDK Image" />
        );
      default:
        return null;
    }
  };

  return (
    <div className='lg:pt-[70px] md:pt-14 sm:pt-12 pt-6 lg:pb-14 sm:pb-12 pb-6 bg-ink-black'>
      <div className='container'>
        <div className='lg:py-[66px] md:py-12 sm:py-8 py-6 px-[22px] rounded-[32px] bg-light-white'>
          <div className='flex flex-row flex-wrap mt-8 -mx-3'>
            <div className='lg:w-1/2 px-3 w-full flex flex-col max-lg:items-center'>
              <CommonHeading className='lg:max-w-[480px] w-full max-lg:text-center' text={'Smart Routing Included'} />
              <PrimaryPara
                className='pt-4 lg:max-w-[480px] max-lg:text-center'
                text={
                  'Effortlessly route your prompt to the best LLMs—optimized for cost, quality, speed, and latency. Deploy production-ready routers instantly or customize with your data in a few clicks.'
                }
              />
              <div className='md:mt-12 mt-6'>
                <CommonButton className='bg-orange hover:bg-white hover:text-orange duration-700' text={'Explore our routers'} />
              </div>
            </div>
            <div className='lg:w-1/2 px-3 w-full flex flex-col max-lg:items-center max-lg:mt-5'>
              <div className='border border-border-primary-gray rounded-[32px] bg-choose-bg'>
                <div className='bg-transparent-gray rounded-t-[32px] flex justify-center flex-col'>
                  <div className='flex pt-3 px-4 lg:gap-8 gap-3 items-center pb-3'>
                    <Icon className='' iconName='dots' />
                    <p className='sm:text-2xl text-base text-primary-white font-bold'>Choose your preferred framework</p>
                  </div>
                  <div className='flex max-w-[531px] w-full items-center overflow-x-auto scrollbar-hidden'>
                    <button
                      className={`font-normal whitespace-nowrap md:text-xl sm:text-base text-sm p-2 text-center sm:py-2 sm:px-4 text-primary-white border-r border-primary-white ${activeTab === 'PythonSDK' ? 'bg-tab-button' : ''}`}
                      onClick={() => setActiveTab('PythonSDK')}
                    >
                      Python SDK
                    </button>
                    <button
                      className={`font-normal whitespace-nowrap md:text-xl p-2 sm:text-base text-sm text-center sm:py-2 sm:px-8 text-primary-white border-r border-primary-white ${activeTab === 'OpenAISDK' ? 'bg-tab-button' : ''}`}
                      onClick={() => setActiveTab('OpenAISDK')}
                    >
                      Open AI SDK
                    </button>
                    <button
                      className={`font-normal whitespace-nowrap md:text-xl sm:text-base p-2 text-sm text-center sm:py-2 sm:ps-4 sm:pr-[17px] text-primary-white ${activeTab === 'OpenAINodeSDK' ? 'bg-tab-button' : ''}`}
                      onClick={() => setActiveTab('OpenAINodeSDK')}
                    >
                      Open AI Node SDK
                    </button>
                  </div>
                </div>
                <div className='p-[24px_24px_34px_24px]'>{renderTabContent()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartRouting;
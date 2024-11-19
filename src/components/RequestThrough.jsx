import React from 'react';
import Icon from '../common/Icons';
import { NUMBER_DATA } from '../utils/Helper';
import { REQUEST_DATA } from '../utils/Helper';
import starEllipse from '../assets/images/webp/star-ellipse.webp'

const RequestThrough = () => {
    return (
        <div className='lg:pt-[77px] md:pt-14 sm:pt-12 pt-6 sm:pb-12 pb-6 relative' id='pricing'>
              <img className='absolute lg:block hidden -z-10 left-1 top-[45%] max-w-[67.22px]' src={starEllipse} alt="star-ellipse" />
            <div className='container'>
                <div className="max-w-[1140px] bg-requested bg-cover bg-no-repeat bg-center rounded-[32px] border-light-gray border lg:p-[41px_75px_12px_75px] md:p-[41px_48px_12px_48px] p-[24px_32px_12px_32px]">
                    <div className="flex-row flex flex-wrap -mx-3 justify-center">
                        {NUMBER_DATA.map((item, index,) => (
                            <div
                                key={index}
                                className={`lg:w-[25%] w-[50%] px-3 flex justify-center items-center max-lg:mb-6 ${index !== NUMBER_DATA.length - 1 ? 'lg:border-r border-border-transparent' : ''
                                 }`}
                            >
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-center">
                                        <p className="text-primary-white font-medium md:text-4xl text-3xl lg:text-custom-5xl lg:leading-custom-6xl">
                                            {item.value}
                                        </p>
                                        {item.iconName && <Icon className='lg:w-10 lg:h-10 sm:w-8 sm:h-8 w-6 h-6' iconName={item.iconName} />}
                                    </div>
                                    <p className="text-2xl text-grey font-bold text-center pt-2">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex-row flex flex-wrap -mx-3 justify-center lg:pt-11">
                        {REQUEST_DATA.map((obj, idx) => (
                            <div
                                key={idx}
                                className={`lg:w-[25%] w-[50%] px-3 flex justify-center items-center max-lg:mb-6 ${idx !== REQUEST_DATA.length - 1 ? 'lg:border-r border-border-transparent' : ''
                                    }`}
                            >
                                <div className='flex flex-col'>
                                    <div className='flex items-center justify-center'>
                                        <p className="text-primary-white font-medium md:text-4xl text-2xl lg:text-custom-5xl lg:leading-custom-6xl">
                                            {obj.value1}
                                        </p>
                                        {obj.iconName1 && <Icon className='lg:w-10 lg:h-10 sm:w-8 sm:h-8 w-6 h-6' iconName={obj.iconName1} />}
                                    </div>
                                    <p className="lg:text-2xl text-xl text-grey font-bold text-center pt-2">{obj.description1}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="sm:text-lg text-base leading-7 font-medium text-grey text-center lg:pt-[34px]">
                        10M+ Requests served
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RequestThrough;

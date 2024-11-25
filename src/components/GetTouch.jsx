import React from 'react';
import { useForm } from 'react-hook-form';
import CommonHeading from '../common/CommonHeading';
import PrimaryPara from '../common/PrimaryPara';
import CommonButton from '../common/CommonButton';
import getEllipse from '../assets/images/webp/get-touch-ellipse.webp';
import Icon from '../common/Icons';
import { FORM_DATA } from '../utils/Helper'

const GetTouch = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        reset();
    };

    return (
        <div className="lg:pt-[70px] md:pt-14 sm:pt-12 pt-6 lg:pb-[140px] md:pb-[112px] sm:pb-24 pb-12 relative bg-ink-black" id='terms'>
            <img
                className="absolute -z-10 top-[40%] w-full h-[712px] left-0 right-0"
                src={getEllipse}
                alt="get-ellipse"
            />
            <div className="container">
                <div className="flex flex-row flex-wrap justify-between -mx-3">
                    <div className="lg:w-1/3 w-full px-3 flex flex-col justify-center max-lg:items-center">
                        <CommonHeading
                            className="lg:text-start text-center"
                            text={'Get in Touch with Us'}
                        />
                        <PrimaryPara
                            className="lg:text-start text-center"
                            text="Have questions or need more information? Our team is here to help. Reach out to us, and we'll respond promptly."
                        />
                        <div className="md:mt-12 mt-6 max-lg:text-center">                                    
                            <button className="bg-orange group flex gap-[10px] hover:bg-white hover:text-orange duration-700 text-base py-2 px-4 sm:py-3 sm:px-7 rounded-full text-primary-white">
                                <a target='blank' href="https://discord.com/">< svg className="fill-primary-white group-hover:fill-orange transition-colors duration-700" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.9225 4.24655C15.6558 3.66545 14.2844 3.24369 12.8557 3C12.8306 3.00035 12.8067 3.01046 12.7891 3.02812C12.6176 3.33741 12.4176 3.74043 12.2843 4.04973C10.769 3.82493 9.22804 3.82493 7.71275 4.04973C7.57941 3.73106 7.37941 3.33741 7.19845 3.02812C7.18893 3.00937 7.16035 3 7.13178 3C5.70317 3.24369 4.34123 3.66545 3.065 4.24655C3.05548 4.24655 3.04595 4.25592 3.03643 4.2653C0.445883 8.07994 -0.268423 11.7915 0.0839681 15.4655C0.0839681 15.4843 0.0934922 15.503 0.11254 15.5124C1.82687 16.7496 3.47454 17.4994 5.10315 17.9961C5.13173 18.0055 5.1603 17.9961 5.16982 17.9774C5.55078 17.4619 5.89365 16.9183 6.1889 16.3465C6.20795 16.3091 6.1889 16.2716 6.1508 16.2622C5.60793 16.056 5.09363 15.8123 4.58885 15.5311C4.55076 15.5124 4.55076 15.4562 4.57933 15.428C4.68409 15.3531 4.78886 15.2687 4.89362 15.1937C4.91267 15.175 4.94124 15.175 4.96029 15.1843C8.23657 16.6558 11.77 16.6558 15.0082 15.1843C15.0272 15.175 15.0558 15.175 15.0749 15.1937C15.1796 15.2781 15.2844 15.3531 15.3891 15.4374C15.4272 15.4655 15.4272 15.5218 15.3796 15.5405C14.8844 15.8311 14.3605 16.0654 13.8177 16.2716C13.7796 16.2809 13.7701 16.3278 13.7796 16.3559C14.0844 16.9276 14.4272 17.4713 14.7987 17.9867C14.8272 17.9961 14.8558 18.0055 14.8844 17.9961C16.5225 17.4994 18.1702 16.7496 19.8845 15.5124C19.9036 15.503 19.9131 15.4843 19.9131 15.4655C20.3321 11.2197 19.2178 7.53633 16.9606 4.2653C16.9511 4.25592 16.9416 4.24655 16.9225 4.24655ZM6.68415 13.2255C5.70317 13.2255 4.8841 12.3351 4.8841 11.2385C4.8841 10.1419 5.68412 9.25151 6.68415 9.25151C7.6937 9.25151 8.49372 10.1513 8.4842 11.2385C8.4842 12.3351 7.68418 13.2255 6.68415 13.2255ZM13.3224 13.2255C12.3414 13.2255 11.5224 12.3351 11.5224 11.2385C11.5224 10.1419 12.3224 9.25151 13.3224 9.25151C14.332 9.25151 15.132 10.1513 15.1225 11.2385C15.1225 12.3351 14.332 13.2255 13.3224 13.2255Z" />
                                </svg></a>
                                Join Community
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-[46.15%] px-3 w-full max-lg:mt-5 flex flex-col max-lg:items-center">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="rounded-[32px] w-full shadow-custom5xl bg-dark-gray lg:py-8 lg:px-12 sm:py-6 sm:px-8 py-4 px-5 border border-border-primary-gray"
                        >
                            {FORM_DATA.map((field) => (
                                <div key={field.name} className="flex flex-col gap-2 mt-[14px]">
                                    <label className="font-medium text-base sm:text-xl text-primary-white">
                                        {field.label}
                                    </label>
                                    <div className="lg:max-w-[417px] py-4 px-[14px] w-full rounded-xl bg-dark-gray border border-semi-transparent">
                                        {field.type === 'textarea' ? (
                                            <textarea
                                                {...register(field.name, field.validation)}
                                                className="text-lg w-full font-normal text-primary-white resize-none placeholder:text-primary-white opacity-70 bg-transparent outline-none"
                                                placeholder={field.placeholder}
                                                rows="2"
                                            ></textarea>
                                        ) : (
                                            <input
                                                {...register(field.name, field.validation)}
                                                className="text-lg w-full font-normal text-primary-white placeholder:text-primary-white opacity-70 bg-transparent outline-none"
                                                type={field.type}
                                                placeholder={field.placeholder} />
                                        )}
                                    </div>
                                    {errors[field.name] && (
                                        <span className="text-red-500 text-sm">
                                            {errors[field.name].message}
                                        </span>
                                    )}
                                </div>
                            ))}
                            <div className="md:mt-7 mt-4 max-lg:text-center">
                                <CommonButton
                                    type="submit"
                                    className="bg-orange hover:bg-white hover:text-orange duration-700"
                                    text={'Submit Now'} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetTouch;
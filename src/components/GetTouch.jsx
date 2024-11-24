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
        <div className="lg:pt-[70px] md:pt-14 sm:pt-12 pt-6 lg:pb-[140px] md:pb-[112px] sm:pb-24 pb-12 relative bg-ink-black">
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
                            <button className="bg-orange flex gap-[10px] hover:bg-white hover:text-orange duration-700 text-base py-2 px-4 sm:py-3 sm:px-7 rounded-full text-primary-white">
                                <Icon iconName="discord" />
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
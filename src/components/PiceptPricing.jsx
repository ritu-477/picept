import React from "react";
import CommonHeading from "../common/CommonHeading";
import PrimaryPara from "../common/PrimaryPara";
import Icon from "../common/Icons";
import { PRICING_PLANS } from "../utils/Helper"
import aiEllipse from '../assets/images/webp/mission-ellipse.webp'


const PiceptPricing = () => {
    return (
        <div className="lg:py-[70px] md:py-14 sm:py-12 py-6 bg-ink-black relative" id="pricing">
            <img className='absolute left-0 max-w-[411px] lg:block hidden h-[411px] top-0' src={aiEllipse} alt="ai-ellipse" />
            <div className="container">
                <CommonHeading
                    className="text-center mx-auto"
                    text={"Picept Pricing "} />
                <PrimaryPara
                    className="pt-3 mx-auto lg:max-w-[768px] w-full text-center"
                    text={
                        "Prigging ensures rigging stability by using proper equipment, secure connections, and following safety protocols."
                    } />
                <div className="lg:pt-[82px] md:pt-14 pt-12">
                    <div className="lg:flex-row flex flex-col gap-10 lg:gap-6">
                        {PRICING_PLANS.map((plan) => (
                            <div
                                key={plan.id}
                                className="lg:w-1/2 w-full border flex backdrop:blur-[20px] lg:min-h-[908px] flex-col justify-between rounded-[20px] border-charcoal-gray bg-jet-black">
                                <div className="flex flex-col">
                                    <div className="flex justify-between sm:p-[24px_24px_0_24px] px-5 pt-5">
                                        <div
                                            className={`size-14 -mt-10 sm:-mt-[50px] py-[10px] px-[10px] border rounded-lg ${plan.iconClass} border-border-primary-gray`}>
                                            <Icon className="" iconName={plan.iconName} />
                                        </div>
                                        <div
                                            className={`py-2 px-5 rounded-xl flex items-center ${plan.tagClass}`}>
                                            <p
                                                className={`text-xl font-bold ${plan.id === 1 ? "text-primary-white" : "text-vivid-green"
                                                    }`}>
                                                {plan.tag}
                                            </p>
                                        </div>
                                    </div>
                                    <p
                                        className={`md:text-custom-4xl sm:text-2xl md:leading-custom-xl font-bold p-5 sm:px-6 ${plan.id === 1 ? "text-primary-white" : "text-vivid-green"
                                            }`}>
                                        {plan.type}
                                    </p>
                                    <p className="sm:text-2xl text-xl leading-7 ms:pt-5 text-primary-white font-bold px-5 sm:px-6 pb-4">
                                        {plan.price}
                                    </p>
                                    <div className="border-b border-semi-transparent-white opacity-20"></div>
                                    <div className="sm:px-6 p-5 sm:pt-5 flex flex-col gap-3">
                                        {plan.features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <Icon iconName="greenClick" />
                                                <p
                                                    className={`text-xl ${plan.id === 1
                                                        ? [
                                                            0, 2, 3, 10, 11
                                                        ].includes(index)
                                                            ? "font-bold"
                                                            : "font-normal"
                                                        : [
                                                            0, 3, 4, 5, 13, 14
                                                        ].includes(index)
                                                            ? "font-bold"
                                                            : "font-normal"
                                                        } ${plan.id === 2 && index === 2 ? "text-vivid-green !font-bold" : "text-primary-white"}`} >
                                                    {feature}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="sm:px-6 px-5 py-6 flex items-center justify-center">
                                    <button
                                        className={`rounded-full text-primary-white py-[14px] px-20 sm:px-[150px] xl:px-[200px] hover:bg-white hover:text-orange duration-700 ${plan.buttonClass}`}>
                                        {plan.buttonText}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PiceptPricing;
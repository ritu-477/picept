import React, { useState, useRef } from "react";
import CommonHeading from "../common/CommonHeading";
import Icon from "../common/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { PICEPT_DELIVER_DATA_LIST } from "../utils/Helper";

const PiceptDelivers = () => {
    const [activeTab, setActiveTab] = useState(1);
    const swiperTabRef = useRef(null);
    const swiperContentRef = useRef(null);

    const progressSteps = [10, 30, 60, 80, 100];
    const getProgressWidth = () => `${progressSteps[activeTab]}%`;

    const textWidth = [
        "xl:!w-[163px]",
        "xl:!w-[135px]",
        "xl:!w-[173px]",
        "xl:!w-[136px]",
        "xl:!w-[163px]",
    ];
    const paraWidth = [
        "xl:max-w-[452px]",
        "xl:max-w-[452px]",
        "xl:max-w-[496px]",
        "xl:max-w-[452px]",
        "xl:max-w-[467px]",
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
        swiperContentRef.current?.slideTo(index)
    };

    const handleSlideChange = (swiper) => {
        setActiveTab(swiper.activeIndex);
    };

    return (
        <div className="bg-delivers relative bg-center bg-cover bg-no-repeat bg-ink-black">
            <div className="container relative z-20 py-10 xl:py-16">
                <CommonHeading className="mx-auto text-center text-primary-white lg:pb-[60px] md:pb-12 sm:pb-10 pb-8" text={'  Picept Delivers the Best'} />
                <div className="overflow-x-auto scrollbar-hidden">
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={25}
                        autoplay={false}
                        speed={2000}
                        modules={[Autoplay]}
                        breakpoints={{
                            556: { slidesPerView: 3 },
                            1280: { slidesPerView: 5 },
                        }}
                        onSlideChange={handleSlideChange}
                        onSwiper={(swiper) => {
                            swiperTabRef.current = swiper;
                            swiper.slideTo(1);
                        }}
                        className="swiper-tab">
                        {PICEPT_DELIVER_DATA_LIST.map((tab, i) => (
                            <SwiperSlide key={i}>
                                <div
                                    className={`flex items-center mb-2 cursor-pointer ${activeTab === i ? "text-opacity-100" : "text-opacity-70"}`}
                                    onClick={() => handleTabClick(i)}>
                                    <Icon iconName={activeTab === i ? "ActiveIcon" : "inActiveTabIcon"} />
                                    <p
                                        className={`w-fit text-base font-bold ${textWidth[i]} sm:!text-xl ${activeTab === i ? "!text-grey !text-opacity-100" : "!text-grey !text-opacity-70"}`}>
                                        {tab.title}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="relative w-full h-2 mt-4 rounded-full bg-gray-300">
                    <div
                        className="h-2 rounded-full bg-orange transition-all duration-500"
                        style={{ width: getProgressWidth() }}></div>
                </div>
                <div className="mt-12">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={24}
                        autoplay={false}
                        speed={1000}
                        modules={[Autoplay]}
                        onSlideChange={handleSlideChange}
                        onSwiper={(swiper) => {
                            swiperContentRef.current = swiper;
                            swiper.slideTo(1);
                        }}>
                        {PICEPT_DELIVER_DATA_LIST.map((tab, i) => (
                            <SwiperSlide key={i}>
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:p-[24px_24px_24px_36px] p-5 border rounded-[32px] bg-white bg-opacity-10 border-border-primary-gray">
                                    <div className="text-center lg:text-left">
                                        <h3 className="lg:text-5xl lg:leading-custom-7xl sm:text-4xl text-3xl font-medium text-primary-white">{tab.text}</h3>
                                        <p className={`mt-2 sm:mt-4 sm:text-xl text-base font-bold text-grey max-lg:text-center max-w-[600px] ${paraWidth[i]}`}>{tab.description}</p>
                                    </div>
                                    <img className="max-w-full max-h-[240px] lg:w-[500px] rounded-[20px] border border-border-primary-gray" src={tab.image} alt={tab.title} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PiceptDelivers
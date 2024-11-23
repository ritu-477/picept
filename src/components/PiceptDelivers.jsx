// import React, { useState, useRef, useEffect, useCallback } from "react";
// import CommonHeading from "../common/CommonHeading"; 
// import PrimaryPara from "../common/PrimaryPara"; 
// import Icons from "../common/Icons"; 
// import { PICEPT_DELIVER_DATA_LIST } from "../utils/Helper"; 
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/virtual";
// import "swiper/css/autoplay";
// import { Autoplay, Virtual } from "swiper/modules";

// const PiceptDelivers = () => {
//     const [activeTab, setActiveTab] = useState(0);
//     const swiperRef1 = useRef(null);
//     const swiperRef2 = useRef(null);
//     const sectionRef = useRef(null);

//     const progressSteps = [10, 30, 60, 80, 100];
//     const getProgressWidth = () => `${progressSteps[activeTab]}%`;

//     const textWidthClasses = [
//         "xl:w-[163px]",
//         "xl:w-[135px]",
//         "xl:w-[173px]",
//         "xl:w-[136px]",
//         "xl:w-[163px]",
//     ];

//     const paraWidthClasses = [
//         "xl:max-w-[452px]",
//         "xl:max-w-[452px]",
//         "xl:max-w-[496px]",
//         "xl:max-w-[452px]",
//         "xl:max-w-[467px]",
//     ];

//     const handleSlideChange = (swiper) => {
//         setActiveTab(swiper.activeIndex);
//         if (swiper === swiperRef1.current) swiperRef2.current?.slideTo(swiper.activeIndex);
//         else if (swiper === swiperRef2.current) swiperRef1.current?.slideTo(swiper.activeIndex);
//     };

//     const handleTabClick = (index) => {
//         setActiveTab(index);
//         swiperRef1.current?.slideTo(index);
//         swiperRef2.current?.slideTo(index);
//     };

//     const handleIntersection = useCallback((entries) => {
//         entries.forEach((entry) => {
//             if (swiperRef1.current && swiperRef2.current) {
//                 if (entry.isIntersecting) {
//                     swiperRef1.current.autoplay?.start();
//                     swiperRef2.current.autoplay?.start();
//                 } else {
//                     swiperRef1.current.autoplay?.stop();
//                     swiperRef2.current.autoplay?.stop();
//                 }
//             }
//         });
//     }, []);

//     useEffect(() => {
//         const observer = new IntersectionObserver(handleIntersection, { root: null, threshold: 0.1 });

//         if (sectionRef.current) observer.observe(sectionRef.current);

//         return () => {
//             if (sectionRef.current) observer.unobserve(sectionRef.current);
//         };
//     }, [handleIntersection]);

//     return (
//         <div
//             ref={sectionRef}
//             className="bg-delivers relative bg-center bg-cover bg-no-repeat bg-ink-black">
//             <div className="container relative z-20 py-10 xl:py-16 max-w-[1140px]">
//                 <CommonHeading className="text-center !text-primary-white mb-8 md:mb-12">
//                     Picept Delivers the Best
//                 </CommonHeading>

//                 {/* Tabs Navigation */}
//                 <div className="overflow-x-auto scrollbar-hidden">
//                     <Swiper
//                         slidesPerView={1.2}
//                         spaceBetween={25}
//                         autoplay={false}
//                         speed={2000}
//                         modules={[Autoplay, Virtual]}
//                         breakpoints={{
//                             556: { slidesPerView: 3 },
//                             1280: { slidesPerView: 5 },
//                         }}
//                         onSlideChange={handleSlideChange}
//                         onSwiper={(swiper) => (swiperRef1.current = swiper)}
//                         className="swiper-tab"
//                     >
//                         {PICEPT_DELIVER_DATA_LIST.map((tab, i) => (
//                             <SwiperSlide key={i}>
//                                 <div
//                                     className={`flex items-center cursor-pointer py-2 px-3 md:px-4 ${activeTab === i ? "text-opacity-100" : "text-opacity-70"
//                                         }`}
//                                     onClick={() => handleTabClick(i)}
//                                 >
//                                     <Icons icon={activeTab === i ? "active-tab-icon" : "inactive-tab-icon"} />
//                                     <PrimaryPara
//                                         bold
//                                         smallM
//                                         className={`ml-2 ${textWidthClasses[i]} ${activeTab === i ? "text-grey" : "text-grey text-opacity-70"
//                                             }`}
//                                     >
//                                         {tab.title}
//                                     </PrimaryPara>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>
//                 {/* Progress Bar */}
//                 <div className="relative w-full h-2 mt-4 rounded-full bg-gray-300">
//                     <div
//                         className={`h-2 rounded-full transition-all duration-500 ${activeTab === progressSteps.length - 1 ? "bg-orange" : "bg-orange-line"
//                             }`}
//                         style={{ width: getProgressWidth() }}
//                     ></div>
//                 </div>
//                 <div className="mt-12">
//                     <Swiper
//                         slidesPerView={1}
//                         spaceBetween={24}
//                         autoplay={false}
//                         speed={2000}
//                         modules={[Autoplay, Virtual]}
//                         onSwiper={(swiper) => (swiperRef2.current = swiper)}
//                         onSlideChange={handleSlideChange}>
//                         {PICEPT_DELIVER_DATA_LIST.map((tab, i) => (
//                             <SwiperSlide key={i}>
//                                 <div className="flex flex-col lg:flex-row items-center justify-between gap-5 p-5 border rounded-2xl bg-white bg-opacity-10 border-gray-300">
//                                     <div className="text-center lg:text-left">
//                                         <h3 className="text-lg font-medium text-primary-white">{tab.heading}</h3>
//                                         <PrimaryPara className={`mt-4 ${paraWidthClasses[i]}`}>
//                                             {tab.description}
//                                         </PrimaryPara>
//                                     </div>
//                                     <img
//                                         className="max-w-full max-h-[240px] lg:w-[500px] rounded-lg"
//                                         src={tab.image}
//                                         alt={tab.title} />
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>
//             </div>
//             <span className="absolute bottom-0 left-0 w-full h-[200px] bg-picept-delivers"></span>
//         </div>
//     );
// };

// export default PiceptDelivers;
import React, { useState, useRef } from "react";
import CommonHeading from "../common/CommonHeading";
import Icon from "../common/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { PICEPT_DELIVER_DATA_LIST } from "../utils/Helper";

const PiceptDelivers = () => {
    const [activeTab, setActiveTab] = useState(1); // Set second tab as default
    const swiperTabRef = useRef(null);
    const swiperContentRef = useRef(null);

    const progressSteps = [10, 30, 60, 80, 100]; // Progress bar steps
    const getProgressWidth = () => `${progressSteps[activeTab]}%`;

    const handleTabClick = (index) => {
        setActiveTab(index);
        swiperContentRef.current?.slideTo(index); // Sync content slider with tab
    };

    const handleSlideChange = (swiper) => {
        setActiveTab(swiper.activeIndex); // Sync tab with content slider
    };

    return (
        <div className="bg-delivers relative bg-center bg-cover bg-no-repeat bg-ink-black">
            <div className="container relative z-20 py-10 xl:py-16">
        
                <CommonHeading className="mx-auto text-center text-primary-white lg:pb-[60px] md:pb-12 sm:pb-10 pb-8" text={'  Picept Delivers the Best'} />
                {/* Tabs */}
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
                        className="swiper-tab"
                    >
                        {PICEPT_DELIVER_DATA_LIST.map((tab, i) => (
                            <SwiperSlide key={i}>
                                <div
                                    className={`flex items-center cursor-pointer py-2 px-3 md:px-4 ${activeTab === i ? "text-opacity-100" : "text-opacity-70"
                                        }`}
                                    onClick={() => handleTabClick(i)}
                                >
                                    <Icon
                                        iconName={
                                            activeTab === i ? "ActiveIcon" : "inActiveTabIcon"
                                        }
                                    />
                                    <p
                                        className={`ml-2 text-base font-bold ${activeTab === i ? "text-grey" : "text-grey text-opacity-70"
                                            }`}
                                    >
                                        {tab.title}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Progress Bar */}
                <div className="relative w-full h-2 mt-4 rounded-full bg-gray-300">
                    <div
                        className="h-2 rounded-full bg-orange transition-all duration-500"
                        style={{ width: getProgressWidth() }}
                    ></div>
                </div>

                {/* Content Slider */}
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
                        }}
                    >
                        {PICEPT_DELIVER_DATA_LIST.map((tab, i) => (
                            <SwiperSlide key={i}>
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:p-[24px_24px_24px_36px] p-5 border rounded-2xl bg-white bg-opacity-10 border-gray-300">
                                    <div className="text-center lg:text-left">
                                        <h3 className="lg:text-5xl lg:leading-custom-7xl sm:text-4xl text-3xl font-medium text-primary-white">
                                            {tab.text}
                                        </h3>
                                        <p className="mt-4 text-xl text-gray-300 max-w-[500px]">
                                            {tab.description}
                                        </p>
                                    </div>
                                    <img
                                        className="max-w-full max-h-[240px] lg:w-[500px] rounded-[20px] border border-border-primary-gray"
                                        src={tab.image}
                                        alt={tab.title}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PiceptDelivers;


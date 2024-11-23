import React from "react";
import CommonHeading from "../common/CommonHeading";
import Icon from "../common/Icons";
import { PICEPT_RATED_DATA } from "../utils/Helper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import aiEllipse from '../assets/images/webp/mission-ellipse.webp'
import unmatchedStar from '../assets/images/webp/unmatched-star.webp'
import starEllipse from '../assets/images/webp/star-ellipse.webp'

const PiceptRated = () => {
    return (
        <div className="lg:pt-[73px] md:py-14 sm:py-12 py-6 lg:pb-[70px] relative bg-ink-black">
            <img className='absolute lg:block hidden -z-10 right-2 top-[20%] max-w-[67.22px]' src={starEllipse} alt="star-ellipse" />
            <div className='w-[90px] h-[300px] lg:block hidden -z-10 rounded-full blur-[90px] absolute right-0 top-[-6%] bg-orange bg-opacity-[55%]'></div>
            <img src={unmatchedStar} className='absolute lg:block hidden left-[28px] top-[40%] max-w-[61px]' alt="unmatched-star" />
            <img className='absolute left-0 -z-10 max-w-[650px] lg:block hidden h-[411px] top-[2%]' src={aiEllipse} alt="ai-ellipse" />
            <div className="container">
                <CommonHeading
                    className="text-center max-w-[498px] mx-auto pb-12"
                    text={"Picept Rated High Performer"}/>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    modules={[Pagination]}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1280: { slidesPerView: 3 },
                    }}
                    pagination={{
                        el: '.custom-pagination',
                        clickable: true,
                        renderBullet: (index, className) =>
                            `<span class="${className} custom-bullet"></span>`,


                    }}
                    className="max-w-[1140px] mx-auto"
                >
                    {PICEPT_RATED_DATA.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="border group hover:bg-primary-gray rounded-[20px] border-border-primary-gray bg-dark-gray min-h-[330px] flex flex-col justify-between w-full p-4 hover:rounded-[20px] transition duration-700 hover:shadow-[0px_4px_4px_0px_#FFFFFF40_inset]">

                                <div className="flex flex-col">
                                    <div className="flex gap-2 items-center">
                                        {Array.from({ length: item.rating }).map((_, i) => (
                                            <Icon key={i} iconName="yellowStar" />
                                        ))}
                                    </div>
                                    <p className="sm:text-xl group group-hover:text-primary-white text-base text-grey font-bold w-full lg:max-w-[323px] pt-5">
                                        {item.feedback}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3.5">
                                    <img
                                        className="w-[64px] h-[64px] rounded-full object-cover"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                    <div className="flex-col flex gap-1">
                                        <p className="sm:text-2xl text-lg leading-9 text-primary-white font-normal">
                                            {item.name}
                                        </p>
                                        <p className="sm:text-xl text-base font-normal text-grey">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-pagination pt-8 md:pt-12 flex items-center justify-center"></div>
            </div>
        </div>
    );
};

export default PiceptRated;

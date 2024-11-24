import React, { useEffect, useState } from 'react';
import Icon from '../common/Icons';

export const BackToTop = () => {
    const [visible, setValue] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const checkScroll = () => {
        setValue(window.scrollY >= 50);
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScroll);
    },);

    return (
        <div className='relative'>
            {visible && (
                <div
                    className='border bg-light-black cursor-pointer z-10 rounded-full p-2 sm:p-3 fixed bottom-4 right-4'
                    onClick={scrollToTop}
                >
                    <Icon iconName="doubleArrow" />
                </div>
            )}
        </div>
    );
};

export default BackToTop
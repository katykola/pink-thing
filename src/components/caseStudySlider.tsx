'use client';
import { useState } from 'react';
import LaptopMockup from '/public/laptop-mockup.webp';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import CaseStudy from './caseStudy';

const CaseStudySlider = () => {
    const images = [LaptopMockup, LaptopMockup, LaptopMockup]; // You can replace with an array of image sources
    const [currentIndex, setCurrentIndex] = useState(1); // Start with the middle image in focus

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));

    };

    return (
           
            <div className='grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_2fr_auto_1fr] items-center justify-center pb-28'>
                <div className='hidden lg:block opacity-50'>
                    <CaseStudy/>
                </div>
                
                <button onClick={handlePrev} className='hidden md:block'>
                    <IoIosArrowBack size={30} />
                </button>

                <div className='flex justify-center'><CaseStudy/></div>

                <button onClick={handleNext} className='hidden md:block'>
                    <IoIosArrowForward size={30} />
                </button>
                
            <div className='hidden lg:block opacity-50'><CaseStudy/></div>
            </div>
                
        );

};

export default CaseStudySlider;
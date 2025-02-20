'use client';
import { useState } from 'react';
import LaptopMockup from '/public/laptop-mockup.webp';
import Keyboard from '/public/keyboard.webp';
import Jelly from '/public/jelly-pink.webp';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import CaseStudy from './caseStudy';

const CaseStudySlider = () => {
    const images = [Keyboard, LaptopMockup, Jelly];
    const [currentIndex, setCurrentIndex] = useState(1); 

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    console.log(currentIndex);

    return (
        <div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_2fr_auto_1fr] items-center justify-center pb-28">
            <div className="hidden lg:block opacity-50">
                <CaseStudy image={images[(currentIndex - 1 + images.length) % images.length]} />
            </div>
            
            <button onClick={handlePrev} className="hidden md:block">
                <IoIosArrowBack size={30} />
            </button>

            <div className="flex justify-center">
                <CaseStudy image={images[currentIndex]} />
            </div>

            <button onClick={handleNext} className="hidden md:block">
                <IoIosArrowForward size={30} />
            </button>
            
            <div className="hidden lg:block opacity-50">
                <CaseStudy image={images[(currentIndex + 1) % images.length]} />
            </div>
        </div>
    );
};

export default CaseStudySlider;

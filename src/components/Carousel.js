import React, { useState } from 'react';
import AudiImg from '../images/Audi (1).png';
import BugattiImg from '../images/Bugatti.png';
import KoenigseggImg from '../images/K.webp';
import MclarenImg from '../images/Mclaren.png';
import LamboImg from '../images/Lamb.png';
import Lambo1Img from '../images/Lambo1.webp';
import PorscheImg from '../images/porsche.png';
import PaganniImg from '../images/Paganni.png';
import AstonImg from '../images/Aston.jpeg';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = () => {
  const dataSlider = [AudiImg, AstonImg, KoenigseggImg, MclarenImg, LamboImg];

  const [slide, setSlide] = useState(0);

  const length = dataSlider.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className="flex justify-center items-center align-center w-full mx-auto px-4 bg-black mb-20">
      <BsArrowLeftSquareFill onClick={prevSlide} className='text-3xl text-white cursor-pointer left-8'/>
      <BsArrowRightSquareFill onClick={nextSlide} className='text-3xl text-white cursor-pointer right-8'/>
      {dataSlider.map((item, index) => (
        <div className={index === slide ? 'opacity-100' : 'opacity-0'} key={index}>
          {index === slide && (
            <img
              className='rounded-lg  h-[300px] w-auto'
              src={item}
              alt={`Slide ${index}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Carousel;

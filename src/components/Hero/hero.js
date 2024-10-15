import React from 'react';
import CustomCarousel from './CustomCarousel';
import heroContent from './heroContent';
import Homecard from '../../pages/homeCard';

const Hero = ({ className }) => {
  return (<>
    <div className={`hero ${className} bg-light-greyflex flex-col items-center`}>
      <CustomCarousel 
        images={heroContent.images}
        title={heroContent.title}
        subtitle={heroContent.subtitle}
      />
      <div className="w-full max-w-4xl  mt-80 px-4 sm:px-6 lg:px-8">
        <Homecard />
      </div>
    </div>
    </>
  );
}

export default Hero;

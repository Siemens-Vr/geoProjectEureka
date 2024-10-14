import React from 'react';
import CustomCarousel from './CustomCarousel';
import heroContent from './heroContent';

const Hero = ({ className }) => {
  return (
    <div className={`hero ${className} bg-light-grey`}>
      <CustomCarousel
        images={heroContent.images}
        title={heroContent.title}
        subtitle={heroContent.subtitle}
      />
    </div>
  );
}

export default Hero;

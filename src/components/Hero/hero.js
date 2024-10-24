import React from 'react';
import CustomCarousel from './CustomCarousel';
import heroContent from './heroContent';

const Hero = ({ className }) => {
  // const {getUserInfosFromSessionStorage}=useAuthentication();
  // const userInfos = getUserInfosFromSessionStorage();
  return (
    <div className={`hero ${className} bg-light-grey flex flex-col items-center relative`}>
      <CustomCarousel
        images={heroContent.images}
        title={heroContent.title}
        subtitle={heroContent.subtitle}
      />
      
      {/* Position the Homecard absolutely at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-20">
      {/* {userInfos &&<Homecard />} */}
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import TitleFade from "../TitleFade/titleFade";
import ImageHero from "../../assets/images/th.jpg"

const Hero = ({name, heroContent}) => {

    if(heroContent) {
        return(
            <div className="hero min-h-screen bg-light-grey">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={heroContent?.image} alt="" className="sm:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <TitleFade title={"Welcome " + (name ? name : "")}/>
                    <p className="py-6">{heroContent?.description}</p>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div className="hero min-h-screen bg-light-grey">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={ImageHero} alt="" className="sm:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <TitleFade title={"Welcome " + (name ? name : "to the geothermal survey portal")}/>
                    <p className="py-6">{"Tomorrow's future is decided today."}</p>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Hero;
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="relative bg-black flex flex-col justify-center items-center min-h-screen">
      {/* Spotlight elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Spotlight
          className="absolute top-0 left-0 w-full h-full transform scale-150 md:scale-100"
          fill="#441690"
        />
        <Spotlight
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 scale-150 md:scale-100"
          fill="#441690"
        />
        <Spotlight
          className="absolute bottom-0 right-0 w-[50%] h-[80%] md:w-[50vh] md:h-[80vh] transform scale-150 md:scale-100"
          fill="#441690"
        />
      </div>

      {/* Text and content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl md:text-8xl lg:text-12xl font-bold mt-10 animate-pulse">
          <TextGenerateEffect words="K O D A" />
        </h1>
      </div>
    </div>
  );
};

export default Hero;

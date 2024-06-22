import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="bg-black pb-20 pt-40">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#7A2FF4"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#7A2FF4"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#7A2FF4"
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold"
            words="K O D A"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

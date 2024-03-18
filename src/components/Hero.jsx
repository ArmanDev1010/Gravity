import React from "react";
import Left from "./Opposites/Left";
import Right from "./Opposites/Right";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-gray-500">
      <div className="relative w-full h-full">
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default Hero;

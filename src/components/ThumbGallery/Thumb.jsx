import React from "react";

const Thumb = (props) => {
  return (
    <div className="bg-red-500 w-full h-auto">
      <div
        className="bg-center bg-no-repeat bg-cover w-full h-full absolute top-0 left-0"
        style={{
          backgroundImage: `url(${`/src/assets/carousel/thumbs/${props.company}.jpg`})`,
        }}
      ></div>
      <img
        src={`/src/assets/carousel/logo/${props.company}.png`}
        alt={`${props.company}`}
        className={` ${
          props.company == "hsbc"
            ? "!max-w-[200px]"
            : props.company == "sketchers"
            ? "!max-w-[200px]"
            : props.company == "pull&bear"
            ? "!max-w-[200px]"
            : props.company == "centralbank"
            ? "!max-w-[80px]"
            : props.company == "jysk"
            ? "!max-w-[180px]"
            : props.company == "cocacolalab"
            ? "!max-w-[160px]"
            : props.company == "fastbank"
            ? "!max-w-[160px]"
            : props.company == "bershka"
            ? "!max-w-[190px]"
            : props.company == "technamin"
            ? "!max-w-[300px]"
            : props.company == "sportmaster"
            ? "!max-w-[160px]"
            : null
        } relative z-[2] max-w-[250px] mx-auto my-0`}
      />
    </div>
  );
};

export default Thumb;

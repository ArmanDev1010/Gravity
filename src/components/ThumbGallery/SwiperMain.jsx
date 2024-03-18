import React from "react";

const SwiperMain = (props) => {
  return (
    <div
      className="w-full h-full bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(/src/assets/carousel/swiper/${props.company}.jpg)`,
      }}
    >
      {/* <img src={`/src/assets/carousel/swiper/${props.company}.jpg`} /> */}
    </div>
  );
};

export default SwiperMain;

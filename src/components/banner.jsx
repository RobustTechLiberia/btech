import React from "react";
import slide1 from "../images/Gemini_Generated_Image_a8sx2ta8sx2ta8sx.png";

class Banner extends React.Component {
  render() {
    return (
      <>
        <div
          className="relative md:mt-56 lg:mt-56 text-white w-full h-100 sm:h-62.5 md:h-112.5 lg:h-130.5 
                   bg-cover bg-center bg-no-repeat rounded-none"
          style={{ backgroundImage: `url(${slide1})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="absolute inset-0 z-20 bg-linear-to-r from-[#04112B] via-[#081C3F] to-transparent"></div>
          {/* Heading */}
          <div className="absolute inset-0 z-30 flex md:justify-center  justify-center md:items-center md:mx-32 lg:mx-32 mx-8 md:pt-5 mt-10 text-center md:text-left px-4">
            <h1 className="text-white font-extrabold uppercase text-5xl sm:text-4xl md:text-6xl lg:text-6xl leading-tight">
              bushrod college of <br />
              science &amp; technology
              {/* <br />
              <p className="font-sans text-center text-sm font-light">
                accredited by the commission for higher education &amp; board of
                midwifery
              </p> */}
            </h1>
          </div>
        </div>
      </>
    );
  }
}

export default Banner;

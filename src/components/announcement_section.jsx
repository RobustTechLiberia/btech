import React from "react";
import img1 from "../images/1785753214077.jpg";

class Announcement extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap w-full md:justify-center lg:justify-center lg:items-center md:items-center justify-end items-end md:h-96 md:my-44 h-96">
          {/* announcements */}
          {/* Changed mx-20 to sm:mx-20 and mx-4 to keep it bounded and centered nicely on mobile screens */}
          <div className="flex flex-wrap justify-center items-center md:w-auto md:mx-10 sm:mx-20 mx-4 w-auto bg-gray h-80">
            {/* Replaced fixed w-lg with mobile-friendly max-w-full, leaving w-lg for md screens and up */}
            <div className="md:w-80 md:max-w-none max-w-full w-lg h-80 bg-blue-800">
              <img
                src={img1}
                alt=""
                srcSet=""
                className="md:w-auto w-full h-auto object-cover cursor-pointer brightness-100"
              />
            </div>

            {/* Replaced fixed w-lg with mobile-friendly max-w-full, leaving w-lg for md screens and up */}
            <div className="md:w-80 md:max-w-none max-w-full w-lg h-80 bg-blue-600">
              <div className="md:mt-28 mt-20">
                {" "}
                {/* Adjusted top margin slightly for mobile view tracking */}
                <h1 className="font-sans text-center font-bold uppercase text-3xl text-white mx-14">
                  information sheet
                </h1>
                <p className="font-sans lowercase text-lg text-center mx-14 py-8 text-white">
                  our information is always free
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Announcement;

import React from "react";
import img1 from "../images/1785753083256.jpg";
import img2 from "../images/1785753104955.jpg";
import img3 from "../images/1785753245749.jpg";

class UpdateSection extends React.Component {
  render() {
    return (
      <>
        {/* Top heading */}
        <div className="flex flex-nowrap md:justify-start lg:justify-start md:mt-5 mt-10 bg-white h-auto md:mx-10 lg:mx-10 mx-10">
          <h1 className="md:text-5xl mx-8 text-4xl text-left lg:text-5xl sm:text-xl font-sans font-bold uppercase text-gray-900 md:py-10 py-5 md:mx-10">
            courses
          </h1>
        </div>

        {/* Content cards */}
        <div className="flex flex-wrap md:justify-evenly lg:justify-evenly sm:justify-center md:mx-8 mx-5 h-auto bg-white lg:gap-5 md:gap-8 sm:gap-5 gap-8 md:pt-3 mt-5 justify-evenly">
          {/* 1 */}
          <div className="bg-white block max-w-sm border-none border-default rounded-none shadow-none">
            <img
              className="rounded-none h-80 w-full object-cover cursor-pointer"
              src={img1}
              alt=""
            />
            <div className="p-3 text-left">
              <a href="#">
                <h5 className="mt-3 mb-6 text-left capitalize text-2xl md:text-3xl font-semibold text-blue-950">
                  college of science &amp; technology <br /> B.S.C in
                  information technology <br />
                </h5>
              </a>
            </div>
          </div>

          {/* 2 */}
          <div className="bg-white block max-w-sm border-none border-default rounded-none shadow-none">
            <img
              className="rounded-none h-80 w-full object-cover cursor-pointer"
              src={img2}
              alt=""
            />
            <div className="p-3 text-left">
              <a href="#">
                <h5 className="mt-3 mb-6 text-left capitalize text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-950">
                  college of health science <br /> B.S.C in Health Science{" "}
                  <br />
                </h5>
              </a>
            </div>
          </div>

          {/* 3 */}
          <div className="bg-neutral-primary-soft block max-w-sm border-none border-default rounded-none shadow-none">
            <img
              className="rounded-none h-80 cursor-pointer w-full object-cover"
              src={img3}
              alt=""
            />
            <div className="p-3 text-left">
              <a href="#">
                <h5 className="mt-3 mb-6 text-left capitalize text-2xl md:text-3xl font-semibold text-blue-950">
                  college of health science <br /> professional diploma <br />
                </h5>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UpdateSection;

import React from "react";
import img1 from "../images/MIDWIFERY.jpg";
import img2 from "../images/NCHE.jpg";

class Accredit extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-col justify-center items-center bg-white md:h-auto h-auto md:pt-20 my-28 mt-10">
          <h1 className="text-center font-sans font-bold text-4xl text-[#253C6D] uppercase">
            accreditation
          </h1>
          <p className="text-center md:text-xl text-2xl font-sans text-md text-900 mt-8 md:mx-auto mx-8 md:w-xl md:py-5 py-5 lg:py-5 lg:w-xl">
            Bushrod College of Science & Technology is working towards ensuring
            our programs meet national and international standards
          </p>
          {/* institutions */}
          <div className="flex flex-wrap justify-center items-center md:mt-10 mt-8 gap-10 h-auto bg-white">
            <div className="md:w-60 h-80 flex flex-wrap justify-center items-center">
              <img
                src={img1}
                alt=""
                srcset=""
                className="md:w-auto w-60 cursor-pointer hover:opacity-50 h-auto object-cover rounded-full"
              />
              <div className="h-20 w-auto">
                <p className="font-sans text-center md:text-lg text-3xl font-semibold capitalize">
                  the liberian board for nursing &amp; midwifery
                </p>
              </div>
            </div>
            <div className="w-60 h-80 flex flex-wrap justify-center items-center">
              <img
                src={img2}
                alt=""
                srcset=""
                className="md:w-auto w-60 cursor-pointer hover:opacity-50 h-auto object-cover rounded-full"
              />
              <div className="h-20 w-auto">
                <p className="font-sans text-center  md:text-lg text-3xl font-semibold capitalize">
                  national commission on higher education
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Accredit;

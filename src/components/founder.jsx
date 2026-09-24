import React from "react";
import founder from "../images/ChatGPT Image Aug 3, 2026, 10_47_04 AM.png";

class MeetFounder extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap justify-center items-center md:flex-wrap md:justify-end md:items-start lg:justify-end lg:items-end md:mt-0 md:gap-0 md:bg-white lg:bg-white  lg:mt-0 gap-0 h-auto bg-white">
          <div className="w-auto">
            <div className="md:w-xl md:flex md:flex-wrap md:justify-start md:items-start lg:w-xl h-auto object-cover">
              <img
                src={founder}
                alt=""
                className="w-auto h-auto cursor-pointer"
              />
            </div>
          </div>
          <div className="md:w-auto lg:w-auto w-auto md:bg-white lg:bg-white md:h-96 lg:h-96 h-auto bg-white">
            <h1 className="lg:text-center md:text-center text-center mt-10 md:mx-0 lg:mx-0 text-5xl  font-sans md:text-5xl lg:text-5xl text-[#253C6D] font-bold capitalize">
              meet the founder
              <br />
              dr. edward forh
            </h1>
            <p className="font-sans  md:w-lg lg:w-xl text-900  lg:text-lg md:text-xl text-2xl  mt-10 md:text-justify text-center md:mx-10">
              A Liberian politician and educator who served as Representative
              for Montserrado County District #16 (formerly District #12) from
              2005 to 2017. He retired from legislative politics in November
              2025 but remains active in community development and education.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default MeetFounder;

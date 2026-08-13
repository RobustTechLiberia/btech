import React from "react";
import founder from "../images/ChatGPT Image Aug 3, 2026, 10_47_04 AM.png";

class MeetFounder extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap justify-start md:mt-0 md:gap-0 lg:gap-0 lg:mt-0 mt-0 md:mx-5 lg:mx-5 mx-0 h-96 bg-white">
          <div className="w-auto">
            <div className="md:w-3xl lg:w-3xl h-auto object-cover">
              <img src={founder} alt="" className="w-auto h-auto" />
            </div>
          </div>
          <div className="md:w-xl lg:w-xl md:bg-gray-100">
            <h1 className="lg:text-center md:text-center text-center md:pt-50 lg:pt-50 mt-10 md:mx-18 lg:mx-18 text-5xl  font-sans md:text-5xl lg:text-5xl text-gray-900 font-bold capitalize">
              meet the founder
              <br />
              dr. edward forh
            </h1>
            <p className="font-sans md:text-lg  lg:text-lg mt-10 text-justify mx-5">
              Is a Liberian politician and educator who served as Representative
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

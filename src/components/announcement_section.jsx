import React from "react";

class Announcement extends React.Component {
  render() {
    return (
      <>
        <div className="h-auto bg-gray-20">
          <div className="flex flex-wrap justify-center items-center">
            <h1 className="font-sans font-bold text-4xl text-center md:mt-20 mt-10 capitalize text-[#253C6D]">
              why choose btech?
            </h1>
          </div>
          <div className="flex justify-center items-center md:gap-20 gap-10 mt-20">
            {/* reasons */}
            <div className="w-80 h-80 shadow-sm border bg-white border-gray-200"></div>
            <div className="w-80 h-80 shadow-sm border bg-white border-gray-200">
              {" "}
            </div>
            <div className="w-80 h-80 shadow-sm border bg-white border-gray-200"></div>
          </div>
        </div>{" "}
      </>
    );
  }
}

export default Announcement;

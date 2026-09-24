import React from "react";

class Announcement extends React.Component {
  render() {
    return (
      <>
        <h1 className="font-sans font-bold text-4xl text-center capitalize text-[#253C6D]">
          why choose btech?
        </h1>
        <div className="flex justify-center items-center bg-white md:gap-20 gap-10 mt-20">
          {/* reasons */}
          <div className="w-80 h-80 shadow-sm border border-gray-200"></div>
          <div className="w-80 h-80 shadow-sm border border-gray-200"> </div>
          <div className="w-80 h-80 shadow-sm border border-gray-200"></div>
        </div>
      </>
    );
  }
}

export default Announcement;

import React from "react";

class TopNav extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-nowrap justify-end md:h-auto bg-white">
          <a
            href="http://"
            className="py-3 px-8 font-bold font-sans bg-gray-200 md:mx-20 mx-5"
          >
            Apply for Admission
          </a>
        </div>
      </>
    );
  }
}

export default TopNav;

import React from "react";

class Notice extends React.Component {
  render() {
    return (
      <>
        <div className="bg-[#253C6D] h-auto">
          <p className="font-sans font-semibold py-2 text-center text-lg text-white capitalize">
            <ul className="flex flex-col text-left md:justify-end md:items-end md:mx-28 mx-8">
              <li>district 16</li>
              <li>montserrado county</li>
              <li>new kru town</li>
            </ul>
          </p>
        </div>
      </>
    );
  }
}

export default Notice;

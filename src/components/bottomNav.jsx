import React from "react";

class BottomNav extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-nowrap justify-evenly py-3 md:py-8 md:mt-0 mt-10 mb-5 md:mx-0 mx-5">
          <ul className="flex md:flex-nowrap md:mt-10 text-lg md:text-lg text-[#253C6D]  flex-wrap justify-evenly md:gap-50 lg:gap-32 md:mx-20  gap-5">
            <li>
              <a
                href="http://"
                className="font-sans uppercase font-bold md:text-xl lg:text-xl text-xl"
              >
                about
              </a>
            </li>
            <li>
              <a
                href="http://"
                className="font-sans uppercase font-bold md:text-xl lg:text-xl text-xl"
              >
                academics
              </a>
            </li>
            <li className="md:w-20 w-auto">
              <a
                href="http://"
                className="font-sans uppercase font-bold md:text-lg lg:text-xl text-xl"
              >
                admission scholarship
              </a>
            </li>

            <li>
              <a
                href="http://"
                className="font-sans uppercase font-bold md:text-lg lg:text-xl text-xl"
              >
                campus life
              </a>
            </li>
            {/* eportal */}
            {/* <li>
              <a
                href="http://"
                className="font-sans uppercase font-bold md:text-lg lg:text-xl text-xl"
              >
                <span className="lowercase">e</span>
                <span className="capitalize">portal</span>
              </a>
            </li> */}
            {/* jobs */}
            <li className="md:w-20 w-auto">
              <a
                href="http://"
                className="font-sans uppercase font-bold md:text-lg lg:text-xl text-xl"
              >
                jobs careers
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default BottomNav;

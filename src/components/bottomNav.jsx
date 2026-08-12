import React from "react";

class BottomNav extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-nowrap justify-evenly py-3 md:py-8 md:mt-0 mt-10 mb-8">
          <ul className="flex md:flex-nowrap md:mt-10 text-sm md:text-lg  flex-wrap justify-evenly md:gap-50 lg:gap-32 md:mx-20  gap-0">
            <li>
              <a
                href="http://"
                className="font-sans uppercase font-bold md:text-xl lg:text-xl text-lg"
              >
                about
              </a>
            </li>
            <li>
              <a
                href="http://"
                className="font-sans uppercase font-bold md:text-xl lg:text-xl text-lg"
              >
                academics
              </a>
            </li>
            <li className="md:w-20 w-auto">
              <a
                href="http://"
                className="font-sans uppercase font-bold md:text-lg lg:text-xl text-lg"
              >
                admission scholarship
              </a>
            </li>
            <li>
              <a
                href="http://"
                className="font-sans uppercase font-bold md:text-lg lg:text-xl text-lg"
              >
                campus life
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default BottomNav;

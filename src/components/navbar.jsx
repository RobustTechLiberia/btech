import React from "react";
import TopNav from "../components/topnav";
import BottomNav from "../components/bottomNav";
import logo from "../assets/logo.jpg";

class Nav extends React.Component {
  render() {
    return (
      <>
        {/* Navbar wrapper */}
        <div className="w-full md:fixed md:top-0 md:left-0 bg-white z-50 m-0 p-0">
          {/* Top Nav */}
          <TopNav />

          {/* Logo + University name */}
          {/* Increased mobile height to h-36 to accommodate the larger logo */}
          <div className="flex flex-nowrap justify-center items-center md:mt-0 mt-5 md:mx-20 mx-5 md:h-20 h-36 bg-white">
            <div className="flex flex-nowrap justify-center items-center h-auto gap-0 bg-white">
              <div className="md:w-auto w-auto">
                <img
                  src={logo}
                  alt="Bushrod College Logo"
                  /* Increased mobile width to w-44 (up from w-36) and fixed standard Tailwind breakpoints */
                  className="w-44 sm:w-32 md:w-32 lg:w-32 h-auto object-contain"
                />
              </div>

              {/* University name */}
              <div className="px-5">
                <h1 className="font-serif capitalize font-semibold text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[#253C6D] whitespace-normal md:mx-0 mx-4">
                  bushrod college <br /> science & technology
                </h1>
              </div>
            </div>
          </div>

          {/* Bottom Nav */}
          <BottomNav />
        </div>

        {/* Content wrapper with offset for fixed navbar */}
        <div className="md:mt-26 mt-0">{/* Page content goes here */}</div>
      </>
    );
  }
}

export default Nav;

import React from "react";
import "../App.scss";

class ContentSection extends React.Component {
  render() {
    return (
      <>
        <div
          className="h-96 mt-20 object-cover bg-blend-overlay"
          id="section-content"
        >
          <h1 className="text-white font-sans font-bold text-5xl w-lg md:mx-32 mx-10 pt-10 md:text-5xl uppercase lg:text-5xl justify-center md:justify-start md:items-start">
            <span className="text-center md:mx-32 my-20 mx-8">BTECH</span>
            <br />
            <span className="py-20">admission + entrance</span>
          </h1>
          <br />
          <div className="md:mt-8 lg:mt-8">
            <a
              href="http://"
              className="bg-yellow-500 text-blue-950 uppercase md:mx-80 mx-10 lg:mx-80 font-semibold py-5 px-3 w-28"
            >
              entrance enrollment
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default ContentSection;

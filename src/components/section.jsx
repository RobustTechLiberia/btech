import React from "react";

class Section extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap justify-evenly gap-5 bg-yellow-500 md:h-96 h-auto">
          <div className="h-auto md:w- w-lg md:mt-5">
            <h1 className="md:text-5xl text-5xl mx-8 mt-10 capitalize md:w-xl font-sans font-semibold">
              academic year 2026 <br /> admission is open
            </h1>
          </div>
          <div className="w-xl h-auto md:mt-5 mb-20">
            <p className="font-sans text-lg font-normal text-gray-900 md:mx-5 mx-5 mt-5 mb-10 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              molestias. Fugiat omnis minus ab quibusdam voluptates enim est
              adipisci nihil minima, aliquid, doloremque a. Deserunt earum animi
              impedit expedita repudiandae. Iusto corrupti autem tenetur!
            </p>
            <br />
            <div className="flex flex-wrap justify-center h-auto">
              <a
                href="/files/brochure.pdf"
                className="bg-blue-950 capitalize text-white font-sans text-xl py-5 text-center w-80 rounded-none cursor-pointer"
                download="Bushrod_College_Brochure.pdf"
              >
                download course guide{" "}
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Section;

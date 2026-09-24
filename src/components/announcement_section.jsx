import React from "react";
import img1 from "../images/1785753214077.jpg";
// Import additional slide images here (e.g., img2, img3)

class Announcement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };

    // Add your list of slideshow items here
    this.slides = [
      {
        image: img1,
        title: "information sheet",
        description: "our information is always free",
      },
      // Example placeholders for automatic sliding:
      // {
      //   image: img2,
      //   title: "Second Slide Title",
      //   description: "this is your second slide subtitle text"
      // },
    ];
  }

  componentDidMount() {
    // Automatically changes the slide index every 4 seconds (4000ms)
    this.slideTimer = setInterval(() => {
      this.setState((prevState) => ({
        currentIndex: (prevState.currentIndex + 1) % this.slides.length,
      }));
    }, 4000);
  }

  componentWillUnmount() {
    // Clean up timer to prevent memory leaks
    if (this.slideTimer) {
      clearInterval(this.slideTimer);
    }
  }

  render() {
    // Extract the active slide data dynamically based on active state index
    const currentSlide = this.slides[this.state.currentIndex] || this.slides[0];

    return (
      <>
        <div className="flex flex-wrap w-full md:justify-center lg:justify-center lg:items-center md:items-center justify-end items-end md:h-96 md:my-44 h-96">
          {/* announcements */}
          <div className="flex flex-wrap justify-center items-center md:w-auto md:mx-10 sm:mx-20 mx-4 w-auto bg-gray h-80">
            <div className="md:w-80 md:max-w-none max-w-full w-lg h-80 bg-blue-800">
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                srcSet=""
                className="md:w-auto w-full h-auto object-cover cursor-pointer brightness-100"
              />
            </div>

            {/* Replaced fixed w-lg with mobile-friendly max-w-full, leaving w-lg for md screens and up */}
            <div className="md:w-80 md:max-w-none max-w-full w-lg h-80 bg-blue-600">
              <div className="md:mt-28 mt-20">
                {" "}
                {/* Adjusted top margin slightly for mobile view tracking */}
                <h1 className="font-sans text-center font-bold uppercase text-3xl text-white mx-14">
                  {currentSlide.title}
                </h1>
                <p className="font-sans lowercase text-lg text-center mx-14 py-8 text-white">
                  {currentSlide.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Announcement;

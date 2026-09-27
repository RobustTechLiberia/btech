import React from "react";
import Modal from "react-modal";
import $ from "jquery";
import Nav from "../components/navbar";
import Banner from "../components/banner";
import Section from "../components/section";
import UpdateSection from "../components/updates_section";
import ContentSection from "../components/content-section";
import MeetFounder from "../components/founder";
import Accredit from "../components/accredition";
import Annoucement from "../components/announcement_section";
import Notice from "../components/notice";
import Footer from "../components/footer";
import { BsWhatsapp } from "react-icons/bs";
import flyer1 from "../images/1785753214077.jpg";
import flyer2 from "../images/1785769541977.jpg";
import flyer3 from "../images/1785753223455.jpg";
import flyer4 from "../images/1785753173073.jpg";

if (typeof window !== "undefined") {
  Modal.setAppElement("body");
}

class Home extends React.Component {
  state = {
    isModalOpen: true,
    currentImageIndex: 0,
  };

  images = [flyer1, flyer2, flyer3, flyer4];

  componentDidMount() {
    this.startImageLoop();
  }

  componentWillUnmount() {
    this.stopImageLoop();
  }

  startImageLoop = () => {
    this.imageInterval = setInterval(() => {
      if (!this.state.isModalOpen) return;

      $("#jquery-flyer-image").fadeOut(400, () => {
        this.setState(
          (prevState) => ({
            currentImageIndex:
              (prevState.currentImageIndex + 1) % this.images.length,
          }),
          () => {
            $("#jquery-flyer-image").fadeIn(400);
          },
        );
      });
    }, 5000);
  };

  stopImageLoop = () => {
    if (this.imageInterval) {
      clearInterval(this.imageInterval);
    }
  };

  closeModal = () => {
    this.setState({ isModalOpen: false }, () => {
      this.stopImageLoop();
    });
  };

  render() {
    return (
      <>
        <div
          className={
            this.state.isModalOpen
              ? "opacity-40 transition-opacity duration-300"
              : "opacity-100 transition-opacity duration-300"
          }
        >
          <Nav />
          <Banner />
          <Section />
          <UpdateSection />
          <ContentSection />
          <MeetFounder />
          <Accredit />
          <Annoucement />
          <Notice />
          <Footer />
        </div>

        <a
          href="https://wa.me"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-0 md:mx-20 mx-5 z-40 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center text-white"
          style={{ backgroundColor: "#25D366" }}
        >
          <BsWhatsapp size={28} />
        </a>

        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          contentLabel="Flyer Presentation"
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
            },
            content: {
              position: "relative",
              inset: "auto",
              background: "transparent",
              padding: "0px",
              borderRadius: "0px",
              maxWidth: "512px",
              width: "91.666667%",
              maxHeight: "85vh",
              outline: "none",
              border: "none",
            },
          }}
        >
          <div className="relative w-full h-full flex flex-col items-center">
            <button
              onClick={this.closeModal}
              className="absolute -top-12 right-0 text-white bg-gray-800 hover:bg-gray-700 font-bold rounded-full w-8 h-8 flex items-center justify-center text-xl transition-colors duration-200 shadow-lg border border-gray-600"
            >
              &times;
            </button>
            <img
              id="jquery-flyer-image"
              src={this.images[this.state.currentImageIndex]}
              alt="Promotional Flyer"
              className="w-full h-auto object-contain cursor-pointer max-h-[75vh]"
            />
          </div>
        </Modal>
      </>
    );
  }
}

export default Home;

import React from "react";
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

class Home extends React.Component {
  render() {
    return (
      <>
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

        <a
          href="https://wa.me"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-0 mx-20 z-40 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center text-white"
          style={{ backgroundColor: "#25D366" }}
        >
          <BsWhatsapp size={28} />
        </a>
      </>
    );
  }
}

export default Home;

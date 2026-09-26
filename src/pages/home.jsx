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
        <Footer/>
      </>
    );
  }
}

export default Home;

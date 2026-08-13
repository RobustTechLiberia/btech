import React from "react";
import Nav from "../components/navbar";
import Banner from "../components/banner";
import Section from "../components/section";
import UpdateSection from "../components/updates_section";
import ContentSection from "../components/content-section";
import MeetFounder from "../components/founder";

class Home extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Banner />
        <Section />
        <UpdateSection />
        <ContentSection />
        <MeetFounder/>
      </>
    );
  }
}

export default Home;

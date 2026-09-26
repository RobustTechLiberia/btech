import React from "react";
import Home from "./pages/home";
import Eportal from "./eportal/pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/eportal" element={<Eportal />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;

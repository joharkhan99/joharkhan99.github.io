import React from "react";
// import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Main = () => {
  return (
    <div>
      {/* <!-- preloader --> */}
      {/* <Preloader /> */}

      {/* <!-- Main Site --> */}
      <div id="home">
        <div id="about">
          <div id="resume">
            <div id="portfolio">
              <div id="contact">
                {/* <!-- navbar --> */}
                <Navbar />
                {/* <!-- Home Section --> */}
                <Home />
                {/* <!-- About Section --> */}
                <About />
                {/* <!-- Resume Section --> */}
                <Resume />
                {/* <!-- Portfolio Section --> */}
                <Portfolio />
                {/* <!-- Contact Section --> */}
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

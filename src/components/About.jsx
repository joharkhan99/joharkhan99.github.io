import React from "react";

const About = () => {
  return (
    <div class="page pt-about" data-simplebar>
      <section class="container">
        {/* <!-- Section Title --> */}
        <div class="header-page mt-70 mob-mt">
          <h2>About Me</h2>
          <span></span>
        </div>

        {/* <!-- Personal Info Start --> */}
        <div class="row mt-100">
          {/* <!-- Information Block --> */}
          <div class="col-lg-12 col-sm-12">
            <div class="info box-1">
              <div class="row">
                <div class="col-lg-3 col-sm-4">
                  <div class="photo">
                    <img alt="" src={require("../assets/me.jpg")} />
                  </div>
                </div>
                <div class="col-lg-9 col-sm-8">
                  <h4>Johar Khan</h4>
                  <div class="loc">
                    <i class="fas fa-map-marked-alt"></i> Islamabad, Pakistan
                  </div>
                  <p>
                    I'm a tech enthusiast with over 2 years of experience in web
                    and app development. From Python and Flutter to React and
                    beyond, I navigate the world of coding with ease, ensuring
                    projects come to life smoothly. Managing projects from start
                    to finish is my forte, making sure everything runs on time
                    and within budget.
                  </p>
                  <p>
                    Outside of coding, you'll find me exploring the latest tech
                    trends, diving into a good book, and enjoying outdoor
                    adventures. I believe in a balanced life, where curiosity
                    extends beyond screens. Let's connect to explore not just
                    coding but the colorful tapestry of life. 🌐🚀
                  </p>
                </div>

                {/* <!-- Icon Info --> */}
                <div class="col-lg-3 col-sm-4">
                  <div class="info-icon">
                    <i class="fas fa-award"></i>
                    <div class="desc-icon">
                      <h6>2+ Years Work</h6>
                      <p>Experience</p>
                    </div>
                  </div>
                </div>

                {/* <!-- Icon Info --> */}
                <div class="col-lg-3 col-sm-4">
                  <div class="info-icon">
                    <i class="fas fa-certificate"></i>
                    <div class="desc-icon">
                      <h6>10+ Projects</h6>
                      <p>Completed</p>
                    </div>
                  </div>
                </div>

                {/* <!-- Icon Info --> */}
                <div class="col-lg-3 col-sm-4">
                  <div class="info-icon">
                    <i class="fas fa-user-astronaut"></i>
                    <div class="desc-icon">
                      <h6>Freelance</h6>
                      <p>Available</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12 pt-50">
                  <a
                    href="img/JoharKhanResume.pdf"
                    target="_blank"
                    class="btn-st"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Service Row Start --> */}
        <div class="row mt-100">
          {/* <!-- Header Block --> */}
          <div class="col-md-12">
            <div class="header-box mb-50">
              <h3>Services</h3>
            </div>
          </div>

          {/* <!-- Service Item --> */}
          <div class="col-lg-6 col-sm-6">
            <div class="service box-1 mb-40">
              <i class="fas fa-desktop"></i>
              <h4>Web Design</h4>
              <p>
                I appreciate the simple content structure, clear design
                patterns, and thoughtful interactions.
              </p>
            </div>
          </div>

          {/* <!-- Service Item --> */}
          <div class="col-lg-6 col-sm-6">
            <div class="service box-2 mb-40">
              <i class="fas fa-laptop-code"></i>
              <h4>Front End Development</h4>
              <p>
                Creating things from scratch and enjoy bringing ideas to life in
                the browser.
              </p>
            </div>
          </div>

          {/* <!-- Service Item --> */}
          <div class="col-lg-6 col-sm-6">
            <div class="service box-2 mb-40">
              <i class="fas fa-code"></i>
              <h4>Back End Development</h4>
              <p>
                Fast and scalable backend solutions ranging from apps based on
                wordpress to big custom solutions.
              </p>
            </div>
          </div>

          {/* <!-- Service Item --> */}
          <div class="col-lg-6 col-sm-6">
            <div class="service box-2 mb-40">
              <i class="fas fa-database"></i>
              <h4>Databases</h4>
              <p>
                Can design, develop, implement, test, and maintain databases.
              </p>
            </div>
          </div>

          {/* <!-- Service Item --> */}
          <div class="col-lg-6 col-sm-6">
            <div class="service box-2 mb-40">
              <i class="fas fa-gamepad"></i>
              <h4>2d/3d Game Development</h4>
              <p>
                Created small games that makes no sense but are not boring
                either!
              </p>
            </div>
          </div>

          {/* <!-- Service Item --> */}
          <div class="col-lg-6 col-sm-6">
            <div class="service box-2 mb-40">
              <i class="fas fa-mobile-alt"></i>
              <h4>App Development</h4>
              <p>
                Building Mobile applications that help grow you and your
                business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

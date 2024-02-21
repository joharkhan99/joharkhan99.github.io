import React from "react";

const Contact = () => {
  return (
    <div class="page pt-contact" data-simplebar>
      <section class="container">
        <div class="header-page mt-70 mob-mt">
          <h2>Contact</h2>
          <span></span>
        </div>

        <div class="row mt-50">
          <div class="col-lg-12 col-sm-12"></div>
        </div>

        <div class="box-2 contact-info w-auto">
          <div class="row">
            <div className="col-lg-12">
              <div className="row">
                <div class="col-lg-6 col-sm-12 info">
                  <i class="fas fa-paper-plane"></i>
                  <p>joharkhan1999@gmail.com</p>
                  <span>Email</span>
                </div>
                <div class="col-lg-6 col-sm-12 info">
                  <a
                    href="https://www.linkedin.com/in/johar-khan"
                    target="_blank"
                    rel="noreferrer"
                    title="Linkedin"
                  >
                    <i
                      className="fab fa-linkedin"
                      style={{ fontSize: "2rem", color: "#006699" }}
                    ></i>
                  </a>
                  <a
                    href="https://github.com/joharkhan99"
                    target="_blank"
                    rel="noreferrer"
                    title="Github"
                  >
                    <i
                      class="fa-brands fa-github"
                      style={{ fontSize: "2rem", color: "black" }}
                    ></i>
                  </a>
                  <a
                    href="https://www.fiverr.com/joharkhan"
                    target="_blank"
                    rel="noreferrer"
                    title="Fiverr"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="35"
                      height="35"
                      viewBox="0 0 50 50"
                    >
                      <path
                        d="M25,2C12.32,2,2,12.32,2,25s10.32,23,23,23s23-10.32,23-23S37.68,2,25,2z M34,36h-6V25h-4v11h-6V25h-4v-6h4.04 c0.37-4.96,3.54-8,8.46-8h2.53v6H26.5c-0.92,0-2.14,0-2.43,2H34V36z"
                        style={{ fill: "rgb(29,191,115)" }}
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="mailto:joharkhan1999@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    title="Gmail: joharkhan1999@gmail.com"
                  >
                    <i
                      class="fa-brands fa-google text-2xl"
                      style={{ color: "rgb(206,60,48)" }}
                    ></i>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/developer?id=Johar+Khan"
                    target="_blank"
                    rel="noreferrer"
                    title="Google Play Store"
                  >
                    <svg
                      style={{ enableBackground: "new 0 0 512 512" }}
                      version="1.1"
                      viewBox="0 0 512 512"
                      width={33}
                      height={33}
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g id="_x31_52-google-play">
                        <g>
                          <g>
                            <path
                              d="M430.472,227.608c17.25,12.85,17.25,41.79,1.08,54.641l-45.509,25.77l-67.441-53.09l67.607-52.077     L430.472,227.608z"
                              style={{ fill: "#FFC801" }}
                            />
                          </g>
                          <path
                            d="M386.396,307.769l-0.01-0.01h-0.01l-67.835-52.801l-0.021-0.02l-0.01,0.01l0.021,0.021    l-0.021-0.021l-0.03-0.03l-0.239,0.181l-249.79,190.25v7.95c-0.001,10.503,2.457,21.705,10.845,25.595    c11.052,5.125,27.177-4.892,27.177-4.892L386.396,307.769z"
                            style={{ fill: "#F93647" }}
                          />
                          <g>
                            <polygon
                              points="318.242,255.099 68.452,445.349 68.452,60.588 318.182,255.019    "
                              style={{ fill: "#00D3FF" }}
                            />
                          </g>
                          <path
                            d="M68.452,56.738v3.85l249.729,194.431l0.061,0.08l0.239-0.181l0.021-0.01l0.1-0.08l67.607-51.685    c0,0-217.433-129.992-280.465-167.482c-2.742-1.631-9.313-5.768-17.192-3.188C79.113,35.565,68.452,46.793,68.452,56.738z"
                            style={{ fill: "#00EF77" }}
                          />
                        </g>
                      </g>
                      <g id="Layer_1" />
                    </svg>
                  </a>
                  <a
                    href="https://stackoverflow.com/users/13256774/joharkhan"
                    target="_blank"
                    rel="noreferrer"
                    title="StackOverflow"
                  >
                    <i
                      className="fab fa-stack-overflow"
                      style={{
                        fontSize: "2rem",
                        color: "#FFA500",
                      }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p
          class="pt-20 mb-0 text-center"
          style={{ color: "#495057", marginTop: "40px" }}
        >
          Made with ❤️ by Johar Khan
        </p>
      </section>
    </div>
  );
};

export default Contact;

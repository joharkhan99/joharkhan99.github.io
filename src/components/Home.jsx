import React from "react";

const Home = () => {
  return (
    <div class="pt-home">
      <div>
        <div
          class="glitch"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            // backgroundImage: url('../img/home-bg10.jpg'),
            // -webkit-background-size: "cover",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: "-1 !important",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#fff",
            animation: "shrink 15s infinite alternate",
          }}
        ></div>
      </div>

      <section>
        <div class="banner">
          <img
            src={require("../assets/me.jpg")}
            alt="Johar Khan"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center",
              boxShadow: "0 0 100px 0 rgba(0,0,0,0.2)",
            }}
          />
          <h1>👋Hi, I'm Johar Khan</h1>
          <p class="cd-headline rotate-1">
            <span>
              I'm a Software Developer on a journey to turn ideas into reality.
            </span>
          </p>
          <button
            onClick={() => (window.location.href = "#contact")}
            className="get-in-touch-btn"
          >
            <span>Get in touch</span>
            {/* <i class="fas fa-arrow-right"></i> */}
          </button>
        </div>

        <div class="social">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/johar-khan"
                target="_blank"
                rel="noreferrer"
                title="linkedin"
              >
                <i class="fab fa-linkedin-in linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/joharkhan99"
                target="_blank"
                rel="noreferrer"
                title="github"
              >
                <i class="fab fa-github github"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:joharkhan1999@gmail.com"
                title="joharkhan1999@gmail.com"
              >
                <i class="fas fa-at"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from "react";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "QuickCal: Calendar & Events App",
      image: require("../assets/portfolio/quickcal.png"),
      link: "",
    },
    {
      title: "NFLUENCER Website",
      image: require("../assets/portfolio/nfluencermock.png"),
      link: "https://nfluencer-website.vercel.app/",
    },
    {
      title: "NFLUENCER Mobile App",
      image: require("../assets/portfolio/nfluencermobile1.png"),
      link: "https://play.google.com/store/apps/details?id=com.joharkhan051.nfluencer&pcampaignid=web_share",
    },
    {
      title: "Less More Japan",
      image: require("../assets/portfolio/lessmore.png"),
      link: "https://less-more-japan.vercel.app/",
    },
    {
      title: "MovieLand: Free Movie Streaming",
      image: require("../assets/portfolio/movieland.png"),
      link: "https://joharkhan.itch.io/movieland",
    },
    {
      title: "Bueno Express Transport",
      image: require("../assets/portfolio/bueno.png"),
      link: "https://www.buenoexpresstransport.com/",
    },
    {
      title: "LYEL Accountants",
      image: require("../assets/portfolio/lyel.png"),
      link: "https://lyel.co.uk/",
    },
    {
      title: "TELA",
      image: require("../assets/portfolio/tela.png"),
      link: "#",
      status: "in development",
    },
    {
      title: "Postlink POS System",
      image: require("../assets/portfolio/pos.png"),
      link: "https://postlink-erp.co.za/postlink/",
      status: "in development",
    },
    {
      title: "Likhdy.com",
      image: require("../assets/portfolio/likhdy.png"),
      link: "https://likhdy.com/",
    },
    {
      title: "Savour Foods",
      image: require("../assets/portfolio/savour.png"),
      link: "http://bruh.ezyro.com/savour-foods/",
    },
    {
      title: "QWQER",
      image: require("../assets/portfolio/qwqer.png"),
      link: "https://qwqer.pk/",
    },
    {
      title: "Tiffin Box",
      image: require("../assets/portfolio/tiffin.png"),
      link: "https://www.tiffinboxcompany.com/",
    },

    {
      title: "Bullion VTU",
      image: require("../assets/portfolio/bullion.png"),
      link: "https://bullionvtu.com/",
    },
    {
      title: "BME Real Estate",
      image: require("../assets/portfolio/bme.png"),
      link: "https://beaumonde-estate.com/",
    },
    {
      title: "Winston Investment",
      image: require("../assets/portfolio/winstoninvestment.png"),
      link: "https://winstoninvestment.co.uk",
    },
    {
      title: "InSol",
      image: require("../assets/portfolio/insol.png"),
      link: "https://infologysolutions.com/",
    },
    {
      title: "ZigZag Ball 3D Game",
      image: require("../assets/portfolio/zigzag.webp"),
      link: "https://play.google.com/store/apps/details?id=com.ActivGames.ZigZagBall3D",
    },
    {
      title: "DayCare",
      image: require("../assets/portfolio/daycare.png"),
      link: "https://hellokiddiesdaycare.com/",
      status: "closed",
    },
    {
      title: "Khyrie Allyene",
      image: require("../assets/portfolio/khyrie.png"),
      link: "http://khyriealleyne.com/",
      status: "closed",
    },
    {
      title: "Music Player Web App",
      image: require("../assets/portfolio/music.png"),
      link: "http://bruh.ezyro.com/spotifyclone",
      status: "closed",
    },
  ];

  return (
    <>
      <div class="page pt-portfolio" data-simplebar>
        <section class="container-fluid">
          <div class="header-page mt-70 mob-mt">
            <h2>Portfolio</h2>
            <span></span>
          </div>
          <div class="row portfolio-items mt-100 mb-100">
            {/* <!-- Portfolio Item --> */}

            {portfolioItems.map((item, index) => (
              <div class="item col-lg-4 col-sm-6 graphic w-100" key={index}>
                <figure>
                  <img alt="" src={item.image} />
                  <figcaption>
                    <h3>{item.title}</h3>
                    <p>
                      <a href={item.link} target="_blank" rel="noreferrer">
                        <i class="fas fa-eye"></i>
                      </a>
                    </p>
                    <i href={item.image} class="fas fa-image image-link"></i>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>

          <div
            class="d-flex justify-content-center portfolio-buttons"
            style={{ marginBottom: "120px", gap: "10px" }}
          >
            <a
              href="https://github.com/joharkhan99"
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "16px",
                border: "2px solid rgb(18, 23, 27)",
                padding: "14px 30px",
                borderRadius: "37px",
                background: "rgb(18, 23, 27)",
                color: "white",
                textAlign: "center",
              }}
            >
              <i class="fab fa-github github mr-3"></i>
              <span>View More on Github</span>
            </a>
            <a
              href="https://play.google.com/store/apps/developer?id=Johar+Khan"
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "16px",
                border: "2px solid rgb(255 255 255)",
                padding: "14px 30px",
                borderRadius: "37px",
                background: "rgb(255 255 255)",
                color: "#12171b",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              <svg
                version="1.1"
                viewBox="0 0 512 512"
                width="30"
                height="30"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g id="_x31_52-google-play">
                  <g>
                    <g>
                      <path
                        d="M430.472,227.608c17.25,12.85,17.25,41.79,1.08,54.641l-45.509,25.77l-67.441-53.09l67.607-52.077     L430.472,227.608z"
                        style={{ fill: "rgb(255, 200, 1)" }}
                      ></path>
                    </g>
                    <path
                      d="M386.396,307.769l-0.01-0.01h-0.01l-67.835-52.801l-0.021-0.02l-0.01,0.01l0.021,0.021    l-0.021-0.021l-0.03-0.03l-0.239,0.181l-249.79,190.25v7.95c-0.001,10.503,2.457,21.705,10.845,25.595    c11.052,5.125,27.177-4.892,27.177-4.892L386.396,307.769z"
                      style={{ fill: "rgb(0, 211, 255)" }}
                    ></path>
                    <g>
                      <polygon
                        points="318.242,255.099 68.452,445.349 68.452,60.588 318.182,255.019    "
                        style={{ fill: "rgb(0, 211, 255)" }}
                      ></polygon>
                    </g>
                    <path
                      d="M68.452,56.738v3.85l249.729,194.431l0.061,0.08l0.239-0.181l0.021-0.01l0.1-0.08l67.607-51.685    c0,0-217.433-129.992-280.465-167.482c-2.742-1.631-9.313-5.768-17.192-3.188C79.113,35.565,68.452,46.793,68.452,56.738z"
                      style={{ fill: "rgb(0, 239, 119)" }}
                    ></path>
                  </g>
                </g>
                <g id="Layer_1"></g>
              </svg>
              <span>Play Store Apps</span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;

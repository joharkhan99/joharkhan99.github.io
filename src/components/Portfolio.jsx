import React from "react";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "TELA",
      image: require("../assets/portfolio/tela.png"),
      link: "#",
      status: "in development",
    },
    {
      title: "Likhdy.com",
      image: require("../assets/portfolio/likhdy.png"),
      link: "https://likhdy.com/",
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
      title: "Bueno Express Transport",
      image: require("../assets/portfolio/bueno.png"),
      link: "https://www.buenoexpresstransport.com/",
    },
    {
      title: "MovieLand: Free Movie Streaming",
      image: require("../assets/portfolio/movieland.png"),
      link: "https://play.google.com/store/apps/details?id=com.joharkhan051.MovieLand",
    },
    {
      title: "Bullion VTU",
      image: require("../assets/portfolio/bullion.png"),
      link: "https://bullionvtu.com/",
    },
    {
      title: "Savour Foods",
      image: require("../assets/portfolio/savour.png"),
      link: "https://www.savourfoods.com.pk/",
    },
    {
      title: "BME Real Estate",
      image: require("../assets/portfolio/bme.PNG"),
      link: "https://beaumonde-estate.com/",
    },
    {
      title: "Winston Investment",
      image: require("../assets/portfolio/winstoninvestment.png"),
      link: "https://winstoninvestment.co.uk",
    },
    {
      title: "LYEL Accountants",
      image: require("../assets/portfolio/lyel.PNG"),
      link: "https://lyel.co.uk/",
    },
    {
      title: "InSol",
      image: require("../assets/portfolio/insol.PNG"),
      link: "https://infologysolutions.com/",
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
  ];

  return (
    <>
      <div class="page pt-portfolio" data-simplebar>
        <section class="container">
          <div class="header-page mt-70 mob-mt">
            <h2>Portfolio</h2>
            <span></span>
          </div>
          <div class="row portfolio-items mt-100 mb-100">
            {/* <!-- Portfolio Item --> */}

            {portfolioItems.map((item, index) => (
              <div class="item col-lg-4 col-sm-6 graphic" key={index}>
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
            style={{ marginBottom: "120px" }}
            class="d-flex justify-content-center"
          >
            <a
              href="https://github.com/joharkhan99?tab=repositories"
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "16px",
                border: "2px solid rgb(51, 125, 120)",
                padding: "10px 20px",
                borderRadius: "37px",
                background: "rgb(51, 125, 120)",
                color: "white",
              }}
            >
              <i
                class="fa-brands fa-github mr-3"
                style={{
                  fontFfamily: "Font Awesome 5 Brands",
                }}
              ></i>
              View More on Github
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;

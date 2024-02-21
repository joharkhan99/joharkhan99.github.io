import React from "react";

const Portfolio = () => {
  const portfolioItems = [
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
            style={{ marginBottom: "120px" }}
            class="d-flex justify-content-center"
          >
            <a
              href="https://github.com/joharkhan99"
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "16px",
                border: "2px solid #12171b",
                padding: "14px 30px",
                borderRadius: "37px",
                background: "#12171b",
                color: "white",
              }}
            >
              <i class="fab fa-github github mr-3"></i>
              View More on Github
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;

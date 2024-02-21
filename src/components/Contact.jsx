import React from "react";

const Contact = () => {
  return (
    <div class="page pt-contact" data-simplebar>
      <section class="container">
        {/* <!-- Section Title --> */}
        <div class="header-page mt-70 mob-mt">
          <h2>Contact</h2>
          <span></span>
        </div>

        {/* <!-- Form Start --> */}
        <div class="row mt-100">
          <div class="col-lg-12 col-sm-12"></div>
        </div>

        {/* <!-- Contact Info --> */}
        <div class="box-2 contact-info">
          <div class="row">
            <div class="col-lg-4 col-sm-12 info">
              <i class="fas fa-paper-plane"></i>
              <p>joharkhan1999@gmail.com</p>
              <span>Email</span>
            </div>
            <div class="col-lg-4 col-sm-12 info">
              <i class="fas fa-map-marker-alt"></i>
              <p>Islamabad, Pakistan</p>
              <span>Addres</span>
            </div>
            <div class="col-lg-4 col-sm-12 info">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/johar-khan-2899sc/"
                    target="_blank"
                    title="linkedin"
                  >
                    <i class="fab fa-linkedin-in linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/joharkhan99?tab=repositories"
                    target="_blank"
                    title="github"
                  >
                    <i class="fab fa-github github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://codepen.io/single-byte" target="_blank">
                    <i class="fab fa-codepen codepen" title="codepen"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://disqus.com/by/disqus_u2LPwagtuK"
                    target="_blank"
                    title="disqus"
                  >
                    <i class="fab fa-discourse disqus"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackoverflow.com/users/13256774/single-byte"
                    target="_blank"
                    title="stackoverflow"
                  >
                    <i class="fab fa-stack-overflow stack"></i>
                  </a>
                </li>
              </ul>
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

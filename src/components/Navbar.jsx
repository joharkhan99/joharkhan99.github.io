import React from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Resume", link: "#resume" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      <div class="header-mobile">
        <a class="header-toggle" href="#s">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      {/* <!-- Left Block --> */}
      <nav class="header-main" data-simplebar>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index} data-tooltip={link.name} data-position="top">
              <button onClick={() => (window.location.href = link.link)}>
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

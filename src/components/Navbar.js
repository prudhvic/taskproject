import React from "react";
import { FaSearch, FaFacebook } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Navbar = () => {
  let [active, setActive] = useState(false);
  let toggleMenu = () => {
    console.log("Hi");
    setActive((prev) => !prev);
  };
  return (
    <>
      <header className="desktop-navigation">
        <a href="/">
          <img
            alt="pofo logo"
            src="https://www.themezaa.com/html/pofo/images/logo-white@2x.png"
          />
        </a>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">pages</a>
            </li>
            <li>
              <a href="/">Portfilio</a>
            </li>
            <li>
              <a href="/">BLOG</a>
            </li>
            <li>
              <a href="/">Elements</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li className="search">
              <a href="/">
                <FaSearch />
              </a>
            </li>
            <li className="social-links">
              <a href="/">
                <FaFacebook />
              </a>
              <a href="/">
                <BsInstagram />
              </a>
              <a href="/">
                <BsTwitter />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <header className="mobile-navigation">
        <a href="/">
          <img
            alt="pofo logo"
            src="https://www.themezaa.com/html/pofo/images/logo-white@2x.png"
          />
        </a>
        <div className="menu">
          <li onClick={() => setActive((prev) => !prev)}>
            <GiHamburgerMenu />
          </li>
          <li className="search">
            <a href="/">
              <FaSearch />
            </a>
          </li>
        </div>
        <nav className={active ? "active" : ""}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">pages</a>
            </li>
            <li>
              <a href="/">Portfilio</a>
            </li>
            <li>
              <a href="/">BLOG</a>
            </li>
            <li>
              <a href="/">Elements</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

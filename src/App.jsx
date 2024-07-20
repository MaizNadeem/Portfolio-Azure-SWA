/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Maiz Nadeem",
  title: "Web Designer & Developer",
  email: "contact.maiz@proton.me",
  gitHub: "https://github.com/maiznadeem",
  instagram: "https://www.instagram.com/m.maiznadeem/",
  linkedIn: "https://www.linkedin.com/in/maiznadeem",
  medium: "https://medium.com/@maiznadeem",
  twitter: "https://twitter.com/MaizNadeem",
  youTube: "https://www.youtube.com/@ROYAL-THUNDER",
};

const primaryColor = "#00385B";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;

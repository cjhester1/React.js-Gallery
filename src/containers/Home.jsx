import React, { useEffect, useState } from "react";
import { useRef } from "react";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Featured from "../components/Featured";
import CustomCursor from "../CustomCursor";

import "../styles/home.scss";
import useLocoScroll from "../hooks/useLocoScroll";

// if (screen.width <= 699) {
//   <h1>please go to desktop</h1>;
// }

const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreloader] = useState(true);
  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);
  const [timer, setTimer] = React.useState(2);
  const id = React.useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <>
      <CustomCursor />
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Welcome</h1>
          <h2>One Sec</h2>
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={ref}
        >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;

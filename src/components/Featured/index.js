import React from "react";
import "./styles.scss";
import { motion } from "framer-motion";
//import photos from "../../utils/sampleData";
import image1 from "../../images/image-1.jpg";
import image2 from "../../images/image-2.jpg";
import image3 from "../../images/image-3.jpg";
import image5 from "../../images/image-5.jpg";
import image6 from "../../images/tower.jpeg";
//import image7 from "../../images/backdrop2.jpg";
import image8 from "../../images/euphoria1.jpg";
import image9 from "../../images/euphoria2.jpg";
//import image2 from "../../images/IMG_0002.JPG";

export default function Featured() {
  // const [firstUrl, SecondUrl] = photos;
  return (
    <section className="featured-section" data-scroll-section>
      <motion.div
        whileHover={{
          scale: [1, 1.1, 1.2],
          rotate: [0, 10, -10, 0],
          filter: [
            "hue-rotate(0) contrast(100%)",
            "hue-rotate(360deg)contrast(200%)",
            "hue-rotate(45deg)contrast(300%)",
            "hue-rotate(0)contrast(100%)",
          ],
          scale: 1.2,
          position: "relative",
          // zIndex: 1,
          // background: "white",
          transition: {
            duration: 0.2,
          },
        }}
        className="featured-row-layout"
      >
        <h6 data-scroll>@AngusCloud</h6>
        {/* // */}
        <img src={image9} data-scroll />
      </motion.div>
      {/* <motion.div
        whileHover={{
          scale: [1, 1.05, 1.1],
          rotate: [0, 10, -10, 0],
          filter: [
            "hue-rotate(0) contrast(100%)",
            "hue-rotate(360deg)contrast(200%)",
            "hue-rotate(45deg)contrast(300%)",
            "hue-rotate(0)contrast(100%)",
          ],
          // scale: 1.2,
          position: "relative",
          zIndex: 1,
          //background: "white",
          transition: {
            duration: 0.2,
          },
        }}
        >
              </motion.div> */}
      <div className="featured-column-layout">
        <h6 className="title1">37.77˚N, 122.45˚W</h6>
        <img src={image8} data-scroll />
      </div>
    </section>
  );
}

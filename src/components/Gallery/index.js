import React, { useEffect, useState, useRef } from "react";
import image2 from "../../images/image-2.jpg";
import image3 from "../../images/image-3.jpg";
import image5 from "../../images/image-5.jpg";
import image6 from "../../images/hill.jpeg";
//import image7 from "../../images/clouds.jpeg";
import image8 from "../../images/tall.jpeg";
import "./styles.scss";
import "./styles.scss";
import { gsap } from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

import cn from "classnames";

import useOnScreen from "../../hooks/useOnScreen";
import "./styles.scss";
// gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: image2,

    title: "Roots",

    subtitle: "Oakland,CA",

    category: "Photography / Kidus Solomon",
  },
  {
    src: image3,

    title: "The City",

    subtitle: "San Francisco, CA",

    category: "Photography / Kidus Solomon",
  },
  {
    src: image6,

    title: "Views",
    subtitle: "Embrace the Journey",
    category: "Photography / Kidus Solomon",
  },
  {
    src: image8,
    title: "Perspective",
    subtitle: "Live the Beauty",
    category: "Photography / Kidus Solomon",
  },
];
function GalleryItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, 0.5);
  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);
  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div />
      <div className="gallery-item">
        <div className="gallery-item-info">
          <h1 className="gallery-info-title"> {title}</h1>
          <h6 className="gallery-info-subtitle"> {subtitle} </h6>
          <p className="gallery-info-category"> {category} </p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div></div>
    </div>
  );
}
export default function Gallery({ src, index, columnOffset }) {
  const [activeImage, setActiveImage] = useState(1);
  const ref = useRef(null);
  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      console.log(ref.current.offsetWidth);
      console.log(ref.current.clientWidth);
      console.log({ current: ref.current });
      let sections = gsap.utils.toArray(".gallery-item-wrapper");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);
  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };
  return (
    <section data-scroll-section className="section-wrapper gallery-wrap">
      <div className="gallery" ref={ref}>
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem
            key={src}
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
}

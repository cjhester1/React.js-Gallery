import React, { useEffect, useState, useRef } from "react";
import SectionHeader from "../../SectionHeader";

import cn from "classNames";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min.js";
import useOnScreen from "../../hooks/useOnScreen";
import "./styles.scss";

export default function Footer() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineChildren",
      });

      gsap.fromTo(
        split.lines,
        { y: 200 },
        {
          duration: 1,
          y: 0,
          opacity: 1,

          stagger: 0.1,
          ease: "power2",
        }
      );
    }
  }, [reveal]);
  return (
    <section className={"footer"} data-scroll-section>
      <SectionHeader title="Created by" />
      <h1>
        <a
          href="https://www.google.com"
          target={"_blank"}
          className={cn("location", { "is-reveal": reveal })}
          id="location-text"
          ref={ref}
        >
          CJ Hester
        </a>
      </h1>
    </section>
  );
}

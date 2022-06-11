import React, { useEffect, useState, useRef } from "react";
import SectionHeader from "../../SectionHeader";
import "./styles.scss";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min.js";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";
export default function About() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);
  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);
  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", {
        type: "lines",
      });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out",
        onComplete: () => split.revert(),
      });
    }
  }, [reveal]);
  // console.log(reveal);
  return (
    <section
      className={cn("about-section", { "is-reveal": reveal })}
      data-scroll-section
    >
      <SectionHeader title="about" />
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        Our deepest fear is not that we are inadequate. Our deepest fear is that
        we are powerful beyond measure. It is our light, not our darkness that
        most frightens us. We ask ourselves, 'Who am I to be brilliant,
        gorgeous, talented, fabulous?' Actually, who are you not to be?
        {/* 'You are
        a child of God. Your playing small does not serve the world. There is
        nothing enlightened about shrinking so that other people won't feel
        insecure around you. We are all meant to shine, as children do. We were
        born to make manifest the glory of God that is within us. It's not just
        in some of us; it's in everyone. And as we let our own light shine, we
        unconsciously give other people permission to do the same. As we are
        liberated from our own fear, our presence automatically liberates
        others. */}
      </p>
    </section>
  );
}

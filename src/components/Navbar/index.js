import React from "react";
import "./styles.scss";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className={"navbar"} data-scroll-section>
      <motion.div
        initial="hidden"
        animate="visible"
        onScroll={"hidden"}
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 1.0,
            },
          },
        }}
      >
        <div>
          <motion.div
            whileHover={{
              scale: [1, 1.1, 1.2],
              rotate: [0, 10, -10, 0],

              // scale: 1.2,
              position: "relative",
              zIndex: 1,
              //background: "white",
              transition: {
                duration: 0.4,
              },
            }}
          >
            {" "}
            <a href="https://www.google.com" target={"_blank"}>
              LinkedIn
            </a>
          </motion.div>{" "}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 1.5,
            },
          },
        }}
      >
        <div>
          <motion.div
            whileHover={{
              scale: [1, 1.1, 1.2],
              rotate: [0, 10, -10, 0],

              // scale: 1.2,
              position: "relative",
              zIndex: 1,
              //background: "white",
              transition: {
                duration: 0.4,
              },
            }}
          >
            <a href="https://www.google.com" target={"_blank"}>
              Instagram
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 2.0,
            },
          },
        }}
      >
        {" "}
        <div>
          <motion.div
            whileHover={{
              scale: [1, 1.1, 1.2],
              rotate: [0, 10, -10, 0],

              // scale: 1.2,
              position: "relative",
              zIndex: 1,
              //background: "white",
              transition: {
                duration: 0.4,
              },
            }}
          >
            {" "}
            <a
              href="https://www.google.com"
              target={"_blank"}
              className="3dffect"
            >
              Github
            </a>
          </motion.div>
        </div>{" "}
      </motion.div>
    </div>
  );
}

import React from "react";
// image
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
// Framer Motion
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              Your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photgraphy or videographys ideas that you have. We
          have professionnals with amazing skills.
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="camera dude" />
      </Image>
    </About>
  );
}

// Styled Components

export default AboutSection;

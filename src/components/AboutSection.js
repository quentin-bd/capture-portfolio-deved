import React from "react";
// image
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
// Framer Motion & animations
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from './Wave'

function AboutSection() {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photgraphy or videographys ideas that you have. We
          have professionnals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="camera dude" />
      </Image>
      <Wave />
    </About>
  );
}

// Styled Components

export default AboutSection;

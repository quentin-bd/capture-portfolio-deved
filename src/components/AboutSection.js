import React from "react";
// image
import home1 from "../img/home1.png";
//Styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

function AboutSection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              Your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
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

import React from "react";
// Styles
import styled from "styled-components";
import { About } from "../styles";
//Toggle
import Toggle from "./Toggle";

function FaqSection() {
  return (
    <Faq>
      <h2>Any questions ?</h2>

      <div className="question">
        <h4>How Do I Start ?</h4>
        
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <Toggle>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
              iste!
            </p>
            </Toggle>
          </div>
          <div className="faq-line"></div>
        
      </div>
      <div className="question">
        <h4>Daily Schedule ?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, iste!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Differement Payment Methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, iste!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What Products Do You Offer ?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, iste!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;

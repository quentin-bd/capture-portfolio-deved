import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
// Movie data
import { MovieState } from "../movieState";
// Import animations
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from "../animation";

function OurWork() {
  const [movies, setMovies] = useState(MovieState);
  console.log(movies);
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}/>
      <Frame2 variants={slider}/>
      <Frame3 variants={slider}/>
      <Frame4 variants={slider}/>
      </motion.div>
      
      {movies.map((mov, i) => (
        <Movie key={i} movies={movies}>
          <motion.h2 variants={fade}>{mov.title}</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to={mov.url}>
            <Hide>
              <motion.img
                variants={photoAnim}
                src={mov.mainImg}
                alt={mov.title}
              />
            </Hide>
          </Link>
        </Movie>
      ))}
    </Work>
  );
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background-color: white;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame anim
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
  background: #8effa0;
`


export default OurWork;

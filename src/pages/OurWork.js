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
import { pageAnimation } from "../animation";

function OurWork() {
  const [movies, setMovies] = useState(MovieState);
  console.log(movies);
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      {movies.map((mov, i) => (
        <Movie key={i} movies={movies}>
          <h2>{mov.title}</h2>
          <div className="line"></div>
          <Link to={mov.url}>
            <img src={mov.mainImg} alt={mov.title} />
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
    background-color: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;

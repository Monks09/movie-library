import React from "react";
import styles from "./SingleMovie.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function SingleMovie(props) {
  let { id } = useParams();
  id = Number(id);

  const movie = useSelector((store) => {
    let filteredMovie = store.movies.filter((el) => {
      return el.id === id;
    });

    return filteredMovie[0];
  });

  //   console.log(movie);

  return (
    <div className={styles.SingleMovie}>
      <h1>Movie Details</h1>
      <div className={styles.movie_details_div}>
        <div>
          <img src={movie.image} alt="movie" />
        </div>
        <div>
          <h3>{movie.title}</h3>
          <p>
            <strong>Director: </strong>
            {movie.director}
          </p>
          <p>
            <strong>Release year: </strong>
            {movie.year}
          </p>
          <p>
            <strong>Genre: </strong>
            {movie.genre}
          </p>
          <p>
            <strong>Ratings: </strong>
            {movie.ratings}
          </p>
          <p>
            <strong>Actor: </strong>
            {movie.actor}
          </p>
          <p>
            <strong>Synopsis: </strong>
            {movie.synopsis}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleMovie;

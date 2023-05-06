import React from "react";
import styles from "./MovieCard.module.css";

function MovieCard({ image, title, director, year }) {
  return (
    <div className={styles.MovieCard}>
      <div className={styles.movieImage}>
        <img src={image} alt="movie" />
      </div>
      <div className={styles.movieInfo}>
        <h3>{title}</h3>
        <p>
          <strong>Director: </strong>
          {director}
        </p>
        <p>
          <strong>Release year: </strong>
          {year}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;

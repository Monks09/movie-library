import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesThunkActionCreator } from "../../redux/actions";
import styles from "./Home.module.css";
import MovieCard from "../../components/MovieCard/MovieCard";

function Home(props) {
  const dispatch = useDispatch();
  const movies = useSelector((store) => {
    return store.movies;
  });

  console.log("In Home comp", movies);

  useEffect(() => {
    dispatch(fetchMoviesThunkActionCreator());
  }, []);

  return (
    <div className={styles.Home}>
      <h1>Welcome to Movie Library</h1>
      <div className={styles.moviesContainer}>
        {movies.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />;
        })}
      </div>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesThunkActionCreator } from "../../redux/actions";
import styles from "./Home.module.css";
import MovieCard from "../../components/MovieCard/MovieCard";

function Home(props) {
  const [ratingFilter, setRatingFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  const dispatch = useDispatch();
  const movies = useSelector((store) => {
    return store.movies;
  });

  console.log("In Home comp", movies);

  useEffect(() => {
    dispatch(
      fetchMoviesThunkActionCreator(
        `http://localhost:3000/movies?_sort=year,ratings&_order=${yearFilter},${ratingFilter}`
      )
    );
  }, [ratingFilter, yearFilter]);

  return (
    <div className={styles.Home}>
      <h1>Welcome to Movie Library</h1>
      <div className={styles.filtersDiv}>
        <select
          name="filterByRating"
          id="filterByRating"
          onChange={(e) => {
            setRatingFilter(e.target.value);
          }}
        >
          <option value="">Filter By Rating</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
        <select
          name="filterByYear"
          id="filterByYear"
          onChange={(e) => {
            setYearFilter(e.target.value);
          }}
        >
          <option value="">Filter By Year</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div className={styles.moviesContainer}>
        {movies.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />;
        })}
      </div>
    </div>
  );
}

export default Home;

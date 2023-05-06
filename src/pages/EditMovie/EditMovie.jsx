import React, { useState } from "react";
import styles from "./EditMovie.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";

function EditMovie(props) {
  let { id } = useParams();
  id = Number(id);

  const navigate = useNavigate();
  const toast = useToast();

  const movie = useSelector((store) => {
    let filteredMovie = store.movies.filter((el) => {
      return el.id === id;
    });

    return filteredMovie[0];
  });

  const [movieDetails, setMovieDetails] = useState(movie);

  const showToast = () => {
    toast({
      title: "Movie Edited",
      description: "The movie details were edited successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleChange = (e) => {
    setMovieDetails({
      ...movieDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch(`http://localhost:3000/movies/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieDetails),
    });

    let data = await res.json();
    // console.log(data);
    showToast();
    navigate("/");
  };

  return (
    <div className={styles.EditMovie}>
      <h1>Edit Movie Details</h1>
      <form action="#" onSubmit={handleSubmit}>
        <div className={styles.form_element}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter movie title"
            onChange={handleChange}
            defaultValue={movieDetails.title}
          />
        </div>
        <div className={styles.form_element}>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Enter image url"
            onChange={handleChange}
            defaultValue={movieDetails.image}
          />
        </div>
        <div className={styles.form_element}>
          <input
            type="text"
            name="director"
            id="director"
            placeholder="Enter director name"
            onChange={handleChange}
            defaultValue={movieDetails.director}
          />
        </div>
        <div className={styles.form_element}>
          <input
            type="number"
            name="year"
            id="year"
            placeholder="Enter release year"
            onChange={handleChange}
            defaultValue={movieDetails.year}
          />
        </div>
        <div className={styles.form_element}>
          <input
            type="text"
            name="genre"
            id="genre"
            placeholder="Enter genre"
            onChange={handleChange}
            defaultValue={movieDetails.genre}
          />
        </div>
        <div className={styles.form_element}>
          <input
            type="number"
            name="ratings"
            id="ratings"
            placeholder="Enter ratings"
            min="0"
            step="0.1"
            onChange={handleChange}
            defaultValue={movieDetails.ratings}
          />
        </div>
        <div className={styles.form_element}>
          <input
            type="actor"
            name="actor"
            id="actor"
            placeholder="Enter actor name"
            onChange={handleChange}
            defaultValue={movieDetails.actor}
          />
        </div>
        <div className={styles.form_element}>
          <textarea
            name="synopsis"
            id="synopsis"
            cols="30"
            rows="10"
            placeholder="Write synopsis here"
            onChange={handleChange}
            defaultValue={movieDetails.synopsis}
          ></textarea>
        </div>
        <div>
          <input type="submit" value="Save Changes" />
        </div>
      </form>
    </div>
  );
}

export default EditMovie;

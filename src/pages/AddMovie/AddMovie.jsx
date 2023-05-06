import React, { useState } from "react";
import styles from "./AddMovie.module.css";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

function AddMovie(props) {
  const navigate = useNavigate();
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "New Movie Added",
      description: "The movie was added to your library.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const initialState = {
    title: "",
    image: "",
    director: "",
    year: 0,
    genre: "",
    ratings: 0,
    actor: "",
    synopsis: "",
  };
  const [movieDetails, setMovieDetails] = useState(initialState);

  const handleChange = (e) => {
    setMovieDetails({
      ...movieDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch(` https://fierce-gown-colt.cyclic.app/movies`, {
      method: "POST",
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
    <div className={styles.AddMovie}>
      <h1>Add a new movie</h1>
      <form action="#" onSubmit={handleSubmit}>
        <div className={styles.form_element}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter movie title"
            onChange={handleChange}
          />
        </div>
        <div className={styles.form_element}>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Enter image url"
            onChange={handleChange}
          />
        </div>
        <div className={styles.form_element}>
          <input
            type="text"
            name="director"
            id="director"
            placeholder="Enter director name"
            onChange={handleChange}
          />
        </div>
        <div className={styles.form_element}>
          <input
            type="number"
            name="year"
            id="year"
            placeholder="Enter release year"
            onChange={handleChange}
          />
        </div>
        <div className={styles.form_element}>
          <input
            type="text"
            name="genre"
            id="genre"
            placeholder="Enter genre"
            onChange={handleChange}
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
          />
        </div>
        <div className={styles.form_element}>
          <input
            type="actor"
            name="actor"
            id="actor"
            placeholder="Enter actor name"
            onChange={handleChange}
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
          ></textarea>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default AddMovie;

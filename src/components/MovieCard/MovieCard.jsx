import React from "react";
import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
  useToast,
} from "@chakra-ui/react";
import { fetchMoviesThunkActionCreator } from "../../redux/actions";
import { useDispatch } from "react-redux";

function MovieCard({ id, image, title, director, year }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();
  const dispatch = useDispatch();

  const showToast = () => {
    toast({
      title: "Movie Deleted.",
      description: "The movie was deleted from your library",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const deleteMovie = async () => {
    let res = await fetch(` https://fierce-gown-colt.cyclic.app/movies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    // console.log(data);
    dispatch(fetchMoviesThunkActionCreator(`http://localhost:3000/movies`));
    showToast();
    onClose();
  };
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
        <Link to={`/movie-details/${id}`}>
          <p className={styles.movie_details_link}>View Details</p>
        </Link>
      </div>
      <div className={styles.buttonsDiv}>
        <Link to={`/edit-movie/${id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={onOpen}>Delete</button>
      </div>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={deleteMovie} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}

export default MovieCard;

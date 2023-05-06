export function fetchMoviesThunkActionCreator() {
    return async function (dispatch, getState) {
        let res = await fetch(`http://localhost:3000/movies`);
        let data = await res.json();
        console.log(data);
        dispatch({
            type: "GET_MOVIES",
            payload: data,
        })
    }
}
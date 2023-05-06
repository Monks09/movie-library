export function fetchMoviesThunkActionCreator(url) {
    return async function (dispatch, getState) {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        dispatch({
            type: "GET_MOVIES",
            payload: data,
        })
    }
}
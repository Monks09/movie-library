const initialState = {
    movies: [],
    isLoggedIn: false,
}

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'GET_MOVIES':
            return {
                ...state,
                movies: payload,
            }
        default:
            return state;
    }
}

export default reducer;
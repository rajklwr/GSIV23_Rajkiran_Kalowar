import MoviesList from '../../data/movies.json'

const initialState = {
    movies: MoviesList
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        // case 'SET_USER':
        //     return { ...state, user: action.payload };
        default:
            return state;
    }
};

export default movieReducer;

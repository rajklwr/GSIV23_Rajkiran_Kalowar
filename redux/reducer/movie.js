import MoviesList from '../../data/movies.json'
import {
    SEARCH_KEY,
    FILTERED_MOVIES
} from '../action/movie'

const initialState = {
    movies: MoviesList.sort((a, b) => b.date - a.date),
    filteredMovies: MoviesList.sort((a, b) => b.date - a.date),
    searchKey: ""
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_KEY:
            return { ...state, searchKey: action.payload };
        case FILTERED_MOVIES:
            const filtered = state.movies.filter(movie =>
                movie?.title?.toLowerCase().includes(state.searchKey.toLowerCase())
            );
            return {
                ...state,
                filteredMovies: filtered
            };
        default:
            return state;
    }
};

export default movieReducer;

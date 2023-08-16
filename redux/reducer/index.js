import { combineReducers } from 'redux';
import movieReducer from './movie.js';

const rootReducer = combineReducers({
    movie: movieReducer
});

export default rootReducer;

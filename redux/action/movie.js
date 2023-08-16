export const ALL_MOVIES = "ALL_MOVIES"
export const SEARCH_KEY = "SEARCH_KEY"
export const FILTERED_MOVIES = "FILTERED_MOVIES"


export const AllMovies = (movies) => ({
    type: ALL_MOVIES,
    payload: movies
});

export const updateSearchKey = (searchKey) => ({
    type: SEARCH_KEY,
    payload: searchKey
});

export const filterMovies = () => ({
    type: FILTERED_MOVIES
});
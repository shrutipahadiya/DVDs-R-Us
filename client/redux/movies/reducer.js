import MOVIE_TYPES from './types';

const initialState = {
  movies: [],
  imdbSearchResults: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_TYPES.GET_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case MOVIE_TYPES.SEARCH_IMDB:
      return {
        ...state,
        imdbSearchResults: action.results,
      };
    case MOVIE_TYPES.ORDER_STOCK:
      return {
        ...state,
        movies: [...state.movies, action.movie],
        imdbSearchResults: [],
      };
    default:
      return state;
  }
};

export default movieReducer;

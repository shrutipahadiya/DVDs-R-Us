import { combineReducers } from 'redux';
import movieReducer from './movies/reducer';

const rootReducer = combineReducers({
  movieReducer,
});

export default rootReducer;

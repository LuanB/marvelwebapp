import { combineReducers } from 'redux';

import comicsReducer from './comics';
import charactersReducer from './characters';

export default combineReducers({
  comics: comicsReducer,
  characters: charactersReducer
});

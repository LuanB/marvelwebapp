import { FETCH_CHARACTERS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case 'FETCH_CHARACTERS':
      return action.payload || false;
    default:
      return state;
  }
}

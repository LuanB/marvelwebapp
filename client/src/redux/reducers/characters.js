import { FETCH_CHARACTERS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case 'FETCH_CHARACTERS':
      return action.payload || false;
    default:
      return state;
  }
}

// export function comicsHasErrored(state = false, action) {
//   switch (action.type) {
//     case 'COMICS_HAS_ERRORED':
//       return action.hasErrored;
//     default:
//       return state;
//   }
// }
// export function comicsIsLoading(state = false, action) {
//   switch (action.type) {
//     case 'COMICS_IS_LOADING':
//       return action.isLoading;
//     default:
//       return state;
//   }
// }
// export function comics(state = [], action) {
//   switch (action.type) {
//     case 'COMICS_FETCH_DATA_SUCCESS':
//       return action.comics;
//     default:
//       return state;
//   }
// }

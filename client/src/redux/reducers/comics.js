import {
  FETCH_COMICS,
  LOAD_COMICS_ERROR,
  LOAD_COMICS_LOADING,
  FETCH_COMIC_DETAIL,
  LOAD_COMIC_DETAIL_LOADING,
  LOAD_COMIC_DETAIL_ERROR
} from '../actions/types';

const initialState = {
  comics: [],
  comicDetails: [],
  comicDetailsLoading: false,
  loading: false,
  error: '',
  comicDetailsError: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMICS:
      console.log('fetch comics reducer');
      return { ...state, comics: action.payload, loading: false };

    case LOAD_COMICS_LOADING: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }

    case LOAD_COMICS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }

    case FETCH_COMIC_DETAIL:
      console.log('comics detail reducer');
      return {
        ...state,
        comicDetails: action.payload,
        comicDetailsLoading: false
      };

    case LOAD_COMIC_DETAIL_LOADING: {
      return {
        ...state,
        comicDetailsLoading: true,
        comicDetailsError: ''
      };
    }

    case LOAD_COMIC_DETAIL_ERROR: {
      return {
        ...state,
        comicDetailsLoading: false,
        comicDetailsError: action.error
      };
    }

    default:
      return state;
  }
}

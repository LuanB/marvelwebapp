//import axios from 'axios';
import { API_COMICS, API_COMIC_DETAILS } from '../../common/constants/routes';
import {
  FETCH_COMICS,
  FETCH_CHARACTERS,
  LOAD_COMICS_LOADING,
  LOAD_COMICS_ERROR,
  FETCH_COMIC_DETAIL,
  LOAD_COMIC_DETAIL_LOADING,
  LOAD_COMIC_DETAIL_ERROR
} from './types';

export const fetchCharacters = () => async (dispatch) => {
  const url = API_COMICS;

  const res = await fetch(url, { method: 'GET' });

  dispatch({ type: FETCH_CHARACTERS, payload: res.data });
};

export const fetchComics = () => async (dispatch) => {
  const url = API_COMICS;
  console.log('url is ', url);
  console.log('in the fetch comics action');
  dispatch({ type: LOAD_COMICS_LOADING });

  try {
    const fetchRes = await fetch(url, { method: 'GET' });
    const res = await fetchRes.json();

    dispatch({ type: FETCH_COMICS, payload: res.data });
    console.log('res data is ', res);
  } catch (e) {
    dispatch({ type: LOAD_COMICS_ERROR, error: e || 'Unexpected Error!!!' });
    console.log(e);
  }
};

export const fetchComicDetails = (comicID) => async (dispatch) => {
  const url = API_COMIC_DETAILS + comicID;
  console.log('in fetch comic details');
  dispatch({ type: LOAD_COMIC_DETAIL_LOADING });

  try {
    const fetchRes = await fetch(url, { method: 'GET' });
    const res = await fetchRes.json();
    console.log('res data of comic details is ', res.data);
    dispatch({ type: FETCH_COMIC_DETAIL, payload: res.data });
  } catch (e) {
    dispatch({
      type: LOAD_COMIC_DETAIL_ERROR,
      error: e || 'Unexpected Error!!!'
    });
    console.log(e);
  }
};

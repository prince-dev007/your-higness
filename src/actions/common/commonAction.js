import axios from 'axios';
import { backendURLs } from '../../helpers';
import { commonTypes } from '../../actionTypes';

/**
* Action to testing backend connetion successfully with "${backendURLs.BACKEND_URL}" API.
* @returns {object} welcome message from the backend.
*/
export const loadingApp = () => (dispatch) => axios.get(`${backendURLs.BACKEND_URL}`)
  .then((response) => {
    dispatch({
      type: commonTypes.LOADING_SUCCESS,
      payload: response.data
    });
  })
  .catch((error) => {
    dispatch({
      type: commonTypes.LOADING_FAILURE,
      payload: error.response
    });
  });

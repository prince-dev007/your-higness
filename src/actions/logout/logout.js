import axios from 'axios';
import { backendURLs } from '../../helpers';
import { logoutTypes } from '../../actionTypes';

/**
* logout a user with "${backendURLs.BACKEND_URL}auth/logout" API.
* @param {string} token  a user token.
* @returns {object} status and message.
*/
export const logoutUser = (token) => (dispatch) => axios.post(`${backendURLs.BACKEND_URL}auth/logout/${token}`)
  .then((response) => {
    dispatch({
      type: logoutTypes.LOGOUT_SUCCESS,
      payload: response.data
    });
  })
  .catch((error) => {
    dispatch({
      type: logoutTypes.LOGOUT_FAILURE,
      payload: error.response.data
    });
  });

import axios from 'axios';
import { backendURLs } from '../../../helpers';
import { loginTypes } from '../../../actionTypes';

/**
* login a user with "${backendURLs.BACKEND_URL}auth/signin-user" API.
* @param {object} state holds user's credentials.
* @returns {object} status and message.
*/
export const loginUserAction = (state) => {
  const { credential, password } = state;
  return (dispatch) => axios.post(`${backendURLs.BACKEND_URL}auth/signin-user`, { credential, password })
    .then((response) => {
      dispatch({
        type: loginTypes.LOGIN_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: loginTypes.LOGIN_FAILURE,
        payload: error.response
      });
    });
};

import axios from 'axios';
import { backendURLs } from '../../helpers';
import { resetPasswordType } from '../../actionTypes';

/**
* Action to request a reset password link with "${backendURLs.BACKEND_URL}reset-password-link" API.
* @param {object} state state oject.
* @param {string} token a user token.
* @returns {object} status and message.
*/
export const resetPassword = (state, token) => {
  const { credential, password } = state;
  return (dispatch) => axios.post(`${backendURLs.BACKEND_URL}reset-password/${token}`, { credential, password })
    .then((response) => {
      dispatch({
        type: resetPasswordType.RESET_PASSWORD_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: resetPasswordType.RESET_PASSWORD_FAILURE,
        payload: error.response.data
      });
    });
};

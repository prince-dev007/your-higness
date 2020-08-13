import axios from 'axios';
import { backendURLs } from '../../helpers';
import { submitVerificationType } from '../../actionTypes';

/**
* Action to submit a verification with "${backendURLs.BACKEND_URL}verify-account/${token}" API.
* @param {string} token a user token.
* @returns {object} status and message.
*/
export const submitVerification = (token) => (dispatch) => axios.get(`${backendURLs.BACKEND_URL}verify-account/${token}`)
  .then((response) => {
    dispatch({
      type: submitVerificationType.VERIFY_USER_SUCCESS,
      payload: response.data
    });
  })
  .catch((error) => {
    dispatch({
      type: submitVerificationType.VERIFY_USER_FAILURE,
      payload: error.response
    });
  });

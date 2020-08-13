import axios from 'axios';
import { backendURLs } from '../../helpers';
import { verificationType } from '../../actionTypes';


/**
* Action to submit a verification with "${backendURLs.BACKEND_URL}resend-verification-link" API.
* @param {string} email a user email.
* @returns {object} status and message.
*/
export const verifyUser = (email) => (dispatch) => axios.post(`${backendURLs.BACKEND_URL}resend-verification-link`, { email })
  .then((response) => {
    dispatch({
      type: verificationType.VERIFIED_USER_SUCCESS,
      payload: response.data
    });
  })
  .catch((error) => {
    dispatch({
      type: verificationType.VERIFIED_USER_FAILURE,
      payload: error.response
    });
  });

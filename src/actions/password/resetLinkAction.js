import axios from 'axios';
import { backendURLs } from '../../helpers';
import { resetLinkType } from '../../actionTypes';


/**
* Action to request a reset password link with "${backendURLs.BACKEND_URL}reset-password-link" API.
* @param {string} email user email.
* @returns {object} status and message.
*/
export const resetLink = (email) => (dispatch) => axios.post(`${backendURLs.BACKEND_URL}reset-password-link`, { email })
  .then((response) => {
    dispatch({
      type: resetLinkType.RESET_LINK_SUCCESS,
      payload: response.data
    });
  })
  .catch((error) => {
    dispatch({
      type: resetLinkType.RESET_LINK_FAILURE,
      payload: error.response
    });
  });

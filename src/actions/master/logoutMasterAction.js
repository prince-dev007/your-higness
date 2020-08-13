import axios from 'axios';
import { backendURLs } from '../../helpers';
import { logoutMasterTypes } from '../../actionTypes';

/**
* logout a master with "${backendURLs.BACKEND_URL}auth/signout-master/${masterSession}" API.
* @param {string} masterSession  a master session token.
* @returns {object} status and message.
*/
export const logoutMasterAction = (masterSession) => (dispatch) => axios.post(`${backendURLs.BACKEND_URL}auth/signout-master/${masterSession}`)
  .then((response) => {
    dispatch({
      type: logoutMasterTypes.LOGOUT_MASTER_SUCCESS,
      payload: response.data
    });
  })
  .catch((error) => {
    dispatch({
      type: logoutMasterTypes.LOGOUT_MASTER_FAILURE,
      payload: error.response
    });
  });

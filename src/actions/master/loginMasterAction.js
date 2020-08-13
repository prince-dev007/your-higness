import axios from 'axios';
import { backendURLs } from '../../helpers';
import { loginMasterTypes } from '../../actionTypes';

/**
* login a master with "${backendURLs.BACKEND_URL}auth/signin-master" API.
* @param {object} state holds master's credentials.
* @returns {object} status and message.
*/
export const loginMasterAction = (state) => {
  const { email, password } = state;
  return (dispatch) => axios.post(`${backendURLs.BACKEND_URL}auth/signin-master`, { email, password })
    .then((response) => {
      dispatch({
        type: loginMasterTypes.LOGIN_MASTER_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: loginMasterTypes.LOGIN_MASTER_FAILURE,
        payload: error.response
      });
    });
};

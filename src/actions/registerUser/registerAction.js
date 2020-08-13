import axios from 'axios';
import { backendURLs } from '../../helpers';
import { registerTypes } from '../../actionTypes';

/**
* Action to check a register a new user with "${backendURLs.BACKEND_URL}auth/signup-user" API.
* @param {object} state state object.
* @returns {object} status and message.
*/
export const registerUser = (state) => {
  const {
    firstname,
    lastname,
    email,
    phone,
    password,
    confirmpassword
  } = state;
  return (dispatch) => axios.post(`${backendURLs.BACKEND_URL}auth/signup-user`, {
    firstname,
    lastname,
    email,
    phone,
    password,
    confirmpassword
  })
    .then((response) => {
      dispatch({
        type: registerTypes.REGISTER_USER_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: registerTypes.REGISTER_USER_FAILURE,
        payload: error.response
      });
    });
};

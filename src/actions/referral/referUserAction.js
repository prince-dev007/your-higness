import axios from 'axios';
import { backendURLs } from '../../helpers';
import { referUserLinkTypes } from '../../actionTypes';

/**
* Action to check a refer a new user with "${backendURLs.BACKEND_URL}/refer-user/:referralLink" API.
* @param {object} state state object.
* @param {String} referralLink referal link.
* @returns {object} status and message.
*/
export const referUser = (state, referralLink) => {
  const {
    firstname,
    lastname,
    email,
    phone,
    password,
    confirmpassword
  } = state;
  return (dispatch) => axios.post(`${backendURLs.BACKEND_URL}refer-user/${referralLink}`, {
    firstname,
    lastname,
    email,
    phone,
    password,
    confirmpassword
  })
    .then((response) => {
      dispatch({
        type: referUserLinkTypes.REFER_USER_LINK_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: referUserLinkTypes.REFER_USER_LINK_FAILURE,
        payload: error.response.data
      });
    });
};

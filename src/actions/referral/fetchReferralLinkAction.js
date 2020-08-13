import axios from 'axios';
import { backendURLs } from '../../helpers';
import { fetchReferralLinkTypes } from '../../actionTypes';

/**
* Action to fetch referral user link  with "${backendURLs.BACKEND_URL}fetch-referral-link" API.
* @param {string} token user token.
* @returns {object} status and data.
*/
export const fetchReferralLink = (token) => {
  const config = { headers: { token } };
  return (dispatch) => axios.get(`${backendURLs.BACKEND_URL}fetch-referral-link`, config)
    .then((response) => {
      dispatch({
        type: fetchReferralLinkTypes.FETCH_REFERRAL_LINK_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: fetchReferralLinkTypes.FETCH_REFERRAL_LINK_FAILURE,
        payload: error.response.data
      });
    });
};

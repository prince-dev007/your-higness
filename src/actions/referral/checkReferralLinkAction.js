import axios from 'axios';
import { backendURLs } from '../../helpers';
import { checkReferralLinkTypes } from '../../actionTypes';

/**
* Action to check referral link  with "${backendURLs.BACKEND_URL}check-referral-link" API.
* @param {string} referralLink user referral link.
* @returns {object} status and data.
*/
export const checkReferralLink = (referralLink) => (dispatch) => axios.get(`${backendURLs.BACKEND_URL}check-referral-link/${referralLink}`)
  .then((response) => {
    dispatch({
      type: checkReferralLinkTypes.CHECK_REFERRAL_LINK_SUCCESS,
      payload: response.data
    });
  })
  .catch((error) => {
    dispatch({
      type: checkReferralLinkTypes.CHECK_REFERRAL_LINK_FAILURE,
      payload: error.response.data
    });
  });

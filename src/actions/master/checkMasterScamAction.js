import axios from 'axios';
import { backendURLs } from '../../helpers';
import { checkMasterScamTypes } from '../../actionTypes';

/**
* Action to check scam master from provided token with "${backendURLs.BACKEND_URL}/check-master-scam" API.
* @param {string} masterSession master session token.
* @returns {object} status and message.
*/
export const checkMasterScam = (masterSession) => {
  const config = { headers: { masterSession } };
  return (dispatch) => axios.get(`${backendURLs.BACKEND_URL}check-master-scam`, config)
    .then((response) => {
      dispatch({
        type: checkMasterScamTypes.CHECK_MASTER_SCAM_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: checkMasterScamTypes.CHECK_MASTER_SCAM_FAILURE,
        payload: error.response
      });
    });
};

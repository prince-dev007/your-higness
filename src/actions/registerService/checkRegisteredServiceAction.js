import axios from 'axios';
import { backendURLs } from '../../helpers';
import { checkRegisteredServiceTypes } from '../../actionTypes';

/**
* Action to check a registered service with "${backendURLs.BACKEND_URL}check-existing-service" API.
* @param {string} userSession a user token.
* @returns {object} status and message.
*/
export const checkRegisteredService = (userSession) => {
  const token = userSession;
  const config = { headers: { token } };
  return (dispatch) => axios.get(`${backendURLs.BACKEND_URL}check-existing-service`, config)
    .then((response) => {
      dispatch({
        type: checkRegisteredServiceTypes.CHECK_REGISTERED_SERVICE_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: checkRegisteredServiceTypes.CHECK_REGISTERED_SERVICE_FAILURE,
        payload: error.response
      });
    });
};

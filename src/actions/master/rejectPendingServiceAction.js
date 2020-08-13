import axios from 'axios';
import { backendURLs } from '../../helpers';
import { rejectPendingServiceTypes } from '../../actionTypes';

/**
* Action to reject a service with "${backendURLs.BACKEND_URL}reject-service/${id}" API.
* @param {string} masterSession master Session token.
* @param {string} status service status to change.
* @param {integer} id service id.
* @returns {object} message and reject service.
*/
export const rejectPendingService = (masterSession, status, id) => {
  const config = { headers: { masterSession } };
  return (dispatch) => axios.patch(`${backendURLs.BACKEND_URL}reject-service/${id}`, { status }, config)
    .then((response) => {
      dispatch({
        type: rejectPendingServiceTypes.REJECT_PENDING_SERVICES_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: rejectPendingServiceTypes.REJECT_PENDING_SERVICES_FAILURE,
        payload: error.response.data
      });
    });
};

import axios from 'axios';
import { backendURLs } from '../../helpers';
import { approvePendingServiceTypes } from '../../actionTypes';

/**
* Action to approve pending service with "${backendURLs.BACKEND_URL}approve-service/${id}" API.
* @param {string} masterSession master session token.
* @param {integer} status status to change.
* @param {integer} id service id.
* @returns {object} message and approved service.
*/
export const approvePendingService = (masterSession, status, id) => {
  const config = { headers: { masterSession } };
  return (dispatch) => axios.patch(`${backendURLs.BACKEND_URL}approve-service/${id}`, { status }, config)
    .then((response) => {
      dispatch({
        type: approvePendingServiceTypes.APPROVE_PENDING_SERVICES_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: approvePendingServiceTypes.APPROVE_PENDING_SERVICES_FAILURE,
        payload: error.response.data
      });
    });
};

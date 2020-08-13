import axios from 'axios';
import { backendURLs } from '../../helpers';
import { fetchPendingServiceTypes } from '../../actionTypes';

/**
* Action to view pending services with "view-all-pending-service/?page=${page}&limit=${limit}" API.
* @param {string} masterSession user token.
* @param {integer} page page number.
* @returns {object} message and pending services.
*/
export const fetchPendingServices = (masterSession, page) => {
  const config = { headers: { masterSession } };
  const limit = 2;
  return (dispatch) => axios.get(`${backendURLs.BACKEND_URL}view-all-pending-service/?page=${page}&limit=${limit}`, config)
    .then((response) => {
      dispatch({
        type: fetchPendingServiceTypes.FETCH_PENDING_SERVICES_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: fetchPendingServiceTypes.FETCH_PENDING_SERVICES_FAILURE,
        payload: error.response
      });
    });
};

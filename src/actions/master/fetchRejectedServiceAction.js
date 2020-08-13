import axios from 'axios';
import { backendURLs } from '../../helpers';
import { fetchRejectedServiceTypes } from '../../actionTypes';

/**
* Action to view rejected services with "view-all-rejected-service/?page=${page}&limit=${limit}" API.
* @param {string} masterSession user token.
* @param {integer} page page number.
* @returns {object} message and rejected services.
*/
export const fetchRejectedService = (masterSession, page) => {
  const config = { headers: { masterSession } };
  const limit = 2;
  return (dispatch) => axios.get(`${backendURLs.BACKEND_URL}view-all-rejected-service/?page=${page}&limit=${limit}`, config)
    .then((response) => {
      dispatch({
        type: fetchRejectedServiceTypes.FETCH_REJECTED_SERVICES_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: fetchRejectedServiceTypes.FETCH_REJECTED_SERVICES_FAILURE,
        payload: error.response
      });
    });
};

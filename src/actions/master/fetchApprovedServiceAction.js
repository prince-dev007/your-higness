import axios from 'axios';
import { backendURLs } from '../../helpers';
import { fetchApprovedServiceTypes } from '../../actionTypes';

/**
* Action to view approved services with "view-all-approved-service/?page=${page}&limit=${limit}" API.
* @param {string} masterSession user token.
* @param {integer} page page number.
* @returns {object} message and approved services.
*/
export const fetchApprovedService = (masterSession, page) => {
  const config = { headers: { masterSession } };
  const limit = 2;
  return (dispatch) => axios.get(`${backendURLs.BACKEND_URL}view-all-approved-service/?page=${page}&limit=${limit}`, config)
    .then((response) => {
      dispatch({
        type: fetchApprovedServiceTypes.FETCH_APPROVED_SERVICES_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: fetchApprovedServiceTypes.FETCH_APPROVED_SERVICES_FAILURE,
        payload: error.response
      });
    });
};

import axios from 'axios';
import { backendURLs } from '../../helpers';
import { viewSingleServiceTypes } from '../../actionTypes';

/**
* Action to view single service details with "${backendURLs.BACKEND_URL}view-single-service/${id}" API.
* @param {string} masterSession master Session token.
* @param {integer} id service id.
* @returns {object} message and viewed service.
*/
export const viewSingleService = (masterSession, id) => {
  const config = { headers: { masterSession } };
  return (dispatch) => axios.get(`${backendURLs.BACKEND_URL}view-single-service/${id}`, config)
    .then((response) => {
      dispatch({
        type: viewSingleServiceTypes.VIEW_SINGLE_SERVICE_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: viewSingleServiceTypes.VIEW_SINGLE_SERVICE_FAILURE,
        payload: error.response
      });
    });
};

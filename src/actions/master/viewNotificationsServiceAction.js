import axios from 'axios';
import { backendURLs } from '../../helpers';
import { viewNotificationsServiceTypes } from '../../actionTypes';

/**
* Action to view all services notifications with "${backendURLs.BACKEND_URL}view-services-notifications" API.
* @param {string} masterSession master Session token.
* @returns {object} message and viewed notifications.
*/
export const viewNotificationsService = (masterSession) => {
  const config = { headers: { masterSession } };
  return (dispatch) => axios.get(`${backendURLs.BACKEND_URL}view-services-notifications`, config)
    .then((response) => {
      dispatch({
        type: viewNotificationsServiceTypes.VIEW_NOTIFICATIONS_SERVICE_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: viewNotificationsServiceTypes.VIEW_NOTIFICATIONS_SERVICE_FAILURE,
        payload: error.response
      });
    });
};

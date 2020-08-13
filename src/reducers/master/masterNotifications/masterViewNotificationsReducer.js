import { viewNotificationsServiceTypes } from '../../../actionTypes';

/**
* This is view services notification reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case viewNotificationsServiceTypes.VIEW_NOTIFICATIONS_SERVICE_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case viewNotificationsServiceTypes.VIEW_NOTIFICATIONS_SERVICE_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

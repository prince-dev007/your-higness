import { fetchPendingServiceTypes } from '../../../actionTypes';

/**
* This is view pending services reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case fetchPendingServiceTypes.FETCH_PENDING_SERVICES_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case fetchPendingServiceTypes.FETCH_PENDING_SERVICES_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

import { approvePendingServiceTypes } from '../../../actionTypes';

/**
* This is approve pending service reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case approvePendingServiceTypes.APPROVE_PENDING_SERVICES_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case approvePendingServiceTypes.APPROVE_PENDING_SERVICES_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

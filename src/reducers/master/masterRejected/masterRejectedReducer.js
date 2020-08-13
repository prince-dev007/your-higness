import { fetchRejectedServiceTypes } from '../../../actionTypes';

/**
* This is view rejected services reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case fetchRejectedServiceTypes.FETCH_REJECTED_SERVICES_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case fetchRejectedServiceTypes.FETCH_REJECTED_SERVICES_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

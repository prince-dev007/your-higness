import { viewSingleServiceTypes } from '../../../actionTypes';

/**
* This is view single service details reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case viewSingleServiceTypes.VIEW_SINGLE_SERVICE_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case viewSingleServiceTypes.VIEW_SINGLE_SERVICE_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

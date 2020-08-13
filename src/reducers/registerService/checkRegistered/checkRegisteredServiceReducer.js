import { checkRegisteredServiceTypes } from '../../../actionTypes';

/**
* This is check registered service reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case checkRegisteredServiceTypes.CHECK_REGISTERED_SERVICE_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case checkRegisteredServiceTypes.CHECK_REGISTERED_SERVICE_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

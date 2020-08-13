import { registerServiseTypes } from '../../../actionTypes';

/**
* This is registered service reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case registerServiseTypes.REGISTER_SERVICE_SUCCESS:
      return {
        ...state,
        registeredService: true,
        data: payload,
      };
    case registerServiseTypes.REGISTER_SERVICE_FAILURE:
      return {
        ...state,
        registeredService: false,
        data: payload,
      };

    default:
      return null;
  }
};

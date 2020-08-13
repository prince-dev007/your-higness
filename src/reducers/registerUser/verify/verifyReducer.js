import { verificationType } from '../../../actionTypes';

/**
* This is verify a user reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case verificationType.VERIFIED_USER_SUCCESS:
      return {
        ...state,
        sent: true,
        data: payload,
      };
    case verificationType.VERIFIED_USER_FAILURE:
      return {
        ...state,
        sent: false,
        data: payload,
      };

    default:
      return null;
  }
};

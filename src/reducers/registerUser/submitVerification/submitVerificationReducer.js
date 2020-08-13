import { submitVerificationType } from '../../../actionTypes';

/**
* This is submit verification reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case submitVerificationType.VERIFY_USER_SUCCESS:
      return {
        ...state,
        isVerified: true,
        data: payload,
      };
    case submitVerificationType.VERIFY_USER_FAILURE:
      return {
        ...state,
        isVerified: false,
        data: payload,
      };

    default:
      return null;
  }
};

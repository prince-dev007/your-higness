import { resetPasswordType } from '../../../actionTypes';

/**
* This is reset password account reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case resetPasswordType.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        reseted: true,
        data: payload,
      };
    case resetPasswordType.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        reseted: false,
        data: payload,
      };

    default:
      return null;
  }
};

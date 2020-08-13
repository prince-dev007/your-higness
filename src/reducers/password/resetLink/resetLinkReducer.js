import { resetLinkType } from '../../../actionTypes';

/**
* This is reset password link reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case resetLinkType.RESET_LINK_SUCCESS:
      return {
        ...state,
        sent: true,
        data: payload,
      };
    case resetLinkType.RESET_LINK_FAILURE:
      return {
        ...state,
        sent: false,
        data: payload,
      };

    default:
      return null;
  }
};

import { logoutTypes } from '../../actionTypes';

/**
* This is logout a user reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case logoutTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        loggedout: true,
        data: payload,
      };
    case logoutTypes.LOGOUT_FAILURE:
      return {
        ...state,
        loggedout: false,
        data: payload,
      };

    default:
      return null;
  }
};

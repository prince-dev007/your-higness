import { loginTypes } from '../../actionTypes';

/**
* This is login a user reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case loginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        data: payload,
      };
    case loginTypes.LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        data: payload,
      };

    default:
      return null;
  }
};

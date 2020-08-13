import { loginMasterTypes } from '../../../actionTypes';

/**
* This is login a master reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case loginMasterTypes.LOGIN_MASTER_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        data: payload,
      };
    case loginMasterTypes.LOGIN_MASTER_FAILURE:
      return {
        ...state,
        loggedIn: false,
        data: payload,
      };

    default:
      return null;
  }
};

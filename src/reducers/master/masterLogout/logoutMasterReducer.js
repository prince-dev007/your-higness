import { logoutMasterTypes } from '../../../actionTypes';

/**
* This is logout a master reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case logoutMasterTypes.LOGOUT_MASTER_SUCCESS:
      return {
        ...state,
        loggedout: true,
        data: payload,
      };
    case logoutMasterTypes.LOGOUT_MASTER_FAILURE:
      return {
        ...state,
        loggedout: false,
        data: payload,
      };

    default:
      return null;
  }
};

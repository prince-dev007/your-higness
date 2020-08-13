import { referUserLinkTypes } from '../../../actionTypes';


/**
* This is refer a new user details reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case referUserLinkTypes.REFER_USER_LINK_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case referUserLinkTypes.REFER_USER_LINK_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

import { registerTypes } from '../../../actionTypes';

/**
* This is registered user reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case registerTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        registered: true,
        data: payload,
      };
    case registerTypes.REGISTER_USER_FAILURE:
      return {
        ...state,
        registered: false,
        data: payload,
      };

    default:
      return null;
  }
};

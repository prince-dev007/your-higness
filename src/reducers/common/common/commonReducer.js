import { commonTypes } from '../../../actionTypes';

/**
* This is check backend connection reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case commonTypes.LOADING_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case commonTypes.LOADING_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

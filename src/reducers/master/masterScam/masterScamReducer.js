import { checkMasterScamTypes } from '../../../actionTypes';

/**
* This is checking master scam reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case checkMasterScamTypes.CHECK_MASTER_SCAM_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case checkMasterScamTypes.CHECK_MASTER_SCAM_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

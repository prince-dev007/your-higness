import { checkDoctorScamTypes } from '../../../actionTypes';

/**
* This is check scam doctor reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case checkDoctorScamTypes.CHECK_DOCTOR_SCAM_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case checkDoctorScamTypes.CHECK_DOCTOR_SCAM_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

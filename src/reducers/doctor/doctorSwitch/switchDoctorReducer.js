import { switchDoctorTypes } from '../../../actionTypes';

/**
* This is switch doctor reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case switchDoctorTypes.SWITCH_DOCTOR_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case switchDoctorTypes.SWITCH_DOCTOR_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

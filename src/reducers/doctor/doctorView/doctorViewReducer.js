import { doctorViewSingleAppointmentTypes } from '../../../actionTypes';


/**
* This is view appointment details reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case doctorViewSingleAppointmentTypes.DOCTOR_VIEW_SINGLE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case doctorViewSingleAppointmentTypes.DOCTOR_VIEW_SINGLE_APPOINTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

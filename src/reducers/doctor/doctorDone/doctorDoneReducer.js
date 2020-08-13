import { doctorDoneAcceptedAppointmentTypes } from '../../../actionTypes';


/**
* This is done approved appointments reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case doctorDoneAcceptedAppointmentTypes.DOCTOR_DONE_APPROVED_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case doctorDoneAcceptedAppointmentTypes.DOCTOR_DONE_APPROVED_APPOINTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

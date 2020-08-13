import { doctorRejectPendingAppointmentTypes } from '../../../actionTypes';

/**
* This is reject pending appointments reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case doctorRejectPendingAppointmentTypes.DOCTOR_REJECT_PENDING_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case doctorRejectPendingAppointmentTypes.DOCTOR_REJECT_PENDING_APPOINTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

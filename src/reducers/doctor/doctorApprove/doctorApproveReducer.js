import { doctorApprovePendingAppointmentTypes } from '../../../actionTypes';

/**
* This is approve pending appointment reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case doctorApprovePendingAppointmentTypes.DOCTOR_APPROVE_PENDING_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case doctorApprovePendingAppointmentTypes.DOCTOR_APPROVE_PENDING_APPOINTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

import { doctorFetchPendingAppointmentTypes } from '../../../actionTypes';

/**
* This is view pending appointments reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case doctorFetchPendingAppointmentTypes.DOCOTR_FETCH_PENDING_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case doctorFetchPendingAppointmentTypes.DOCOTR_FETCH_PENDING_APPOINTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

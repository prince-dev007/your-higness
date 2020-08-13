import { doctorFetchRejectedAppointmentTypes } from '../../../actionTypes';

/**
* This is view rejected pending appointments reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case doctorFetchRejectedAppointmentTypes.DOCOTR_FETCH_REJECTED_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case doctorFetchRejectedAppointmentTypes.DOCOTR_FETCH_REJECTED_APPOINTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

import { doctorFetchDoneAppointmentTypes } from '../../../actionTypes';

/**
* This is view done appointments reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case doctorFetchDoneAppointmentTypes.DOCOTR_FETCH_DONE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case doctorFetchDoneAppointmentTypes.DOCOTR_FETCH_DONE_APPOINTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

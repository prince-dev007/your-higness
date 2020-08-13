import { shiftAppointmentTypes } from '../../../actionTypes';

/**
* This is shift appointments reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case shiftAppointmentTypes.SHIFT_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case shiftAppointmentTypes.SHIFT_APPOINTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

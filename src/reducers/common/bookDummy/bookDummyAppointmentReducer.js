import { bookDummyAppointmentTypes } from '../../../actionTypes';

/**
* This is check backend connection reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case bookDummyAppointmentTypes.BOOK_DUMMY_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case bookDummyAppointmentTypes.BOOK_DUMMY_APPOINTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

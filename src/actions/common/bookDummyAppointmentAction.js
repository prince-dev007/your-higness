import axios from 'axios';
import { backendURLs } from '../../helpers';
import { bookDummyAppointmentTypes } from '../../actionTypes';

/**
* Action to check a register a new user with "${backendURLs.BACKEND_URL}auth/signup-user" API.
* @param {object} state state object.
* @returns {object} status and message.
*/
export const bookDummyAppointment = (state) => {
  const {
    appointmentName,
    appointmentEmail,
    appointmentPhone,
    appointmentLocation,
    appointmentDate,
    appointmentStartTime,
    appointmentSessionTime,
  } = state;
  return (dispatch) => axios.post(`${backendURLs.BACKEND_URL}book-dummy-appointment`, {
    appointmentName,
    appointmentEmail,
    appointmentPhone,
    appointmentLocation,
    appointmentDate,
    appointmentStartTime,
    appointmentSessionTime,
  })
    .then((response) => {
      dispatch({
        type: bookDummyAppointmentTypes.BOOK_DUMMY_APPOINTMENT_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: bookDummyAppointmentTypes.BOOK_DUMMY_APPOINTMENT_FAILURE,
        payload: error.response.data
      });
    });
};

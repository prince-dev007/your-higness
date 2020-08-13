import axios from 'axios';
import { backendURLs } from '../../helpers';
import { shiftAppointmentTypes } from '../../actionTypes';


/**
* Action to shift an appointment with "${backendURLs.BACKEND_URL}shift-appointment/${id}" API.
* @param {string} token user token.
* @param {integer} id appointment id.
* @param {object} shift shift details.
* @returns {object} message and shifted appointment.
*/
export const shiftAppointment = (token, id, shift) => {
  const config = { headers: { token } };
  const {
    reason,
    visitType,
    appointmentDate,
    appointmentStartTime,
    appointmentSessionTime,
  } = shift;
  return (dispatch) => axios.patch(`${backendURLs.BACKEND_URL}shift-appointment/${id}`, {
    reason,
    visitType,
    appointmentDate,
    appointmentStartTime,
    appointmentSessionTime,
  }, config)
    .then((response) => {
      dispatch({
        type: shiftAppointmentTypes.SHIFT_APPOINTMENT_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: shiftAppointmentTypes.SHIFT_APPOINTMENT_FAILURE,
        payload: error.response.data
      });
    });
};

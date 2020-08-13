import axios from 'axios';
import { backendURLs } from '../../helpers';
import { doctorDoneAcceptedAppointmentTypes } from '../../actionTypes';

/**
*Action to  done accepted appointment with "${backendURLs.BACKEND_URL}done-appointment/${id}" API.
* @param {string} doctorSession user token.
* @param {integer} id appointment id.
* @returns {object} message and done appointment.
*/
export const doctorDoneAcceptedAppointment = (doctorSession, id) => {
  const token = doctorSession;
  const config = { headers: { token } };
  return (dispatch) => axios.patch(`${backendURLs.BACKEND_URL}done-appointment/${id}`, {}, config)
    .then((response) => {
      dispatch({
        type: doctorDoneAcceptedAppointmentTypes.DOCTOR_DONE_APPROVED_APPOINTMENT_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: doctorDoneAcceptedAppointmentTypes.DOCTOR_DONE_APPROVED_APPOINTMENT_FAILURE,
        payload: error.response
      });
    });
};

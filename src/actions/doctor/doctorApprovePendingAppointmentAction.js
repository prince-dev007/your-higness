import axios from 'axios';
import { backendURLs } from '../../helpers';
import { doctorApprovePendingAppointmentTypes } from '../../actionTypes';

/**
* Action to approve pending appointment with "${backendURLs.BACKEND_URL}approve-appointment/${id}" API.
* @param {string} doctorSession user token.
* @param {integer} id appointment id.
* @returns {object} message and approved appointment.
*/
export const doctorApprovePendingAppointment = (doctorSession, id) => {
  const token = doctorSession;
  const config = { headers: { token } };
  return (dispatch) => axios.patch(`${backendURLs.BACKEND_URL}approve-appointment/${id}`, {}, config)
    .then((response) => {
      dispatch({
        type: doctorApprovePendingAppointmentTypes.DOCTOR_APPROVE_PENDING_APPOINTMENT_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: doctorApprovePendingAppointmentTypes.DOCTOR_APPROVE_PENDING_APPOINTMENT_FAILURE,
        payload: error.response.data
      });
    });
};

import axios from 'axios';
import { backendURLs } from '../../helpers';
import { doctorRejectPendingAppointmentTypes } from '../../actionTypes';

/**
* Action to reject pending appointment with "${backendURLs.BACKEND_URL}reject-appointment/${id}" API.
* @param {string} doctorSession user token.
* @param {integer} id appointment id.
* @returns {object} message and reject appointment.
*/
export const doctorRejectPendingAppointment = (doctorSession, id) => {
  const token = doctorSession;
  const config = { headers: { token } };
  return (dispatch) => axios.patch(`${backendURLs.BACKEND_URL}reject-appointment/${id}`, {}, config)
    .then((response) => {
      dispatch({
        type: doctorRejectPendingAppointmentTypes.DOCTOR_REJECT_PENDING_APPOINTMENT_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: doctorRejectPendingAppointmentTypes.DOCTOR_REJECT_PENDING_APPOINTMENT_FAILURE,
        payload: error.response.data
      });
    });
};

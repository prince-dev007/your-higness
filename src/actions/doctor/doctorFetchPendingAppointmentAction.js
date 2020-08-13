import axios from 'axios';
import { backendURLs } from '../../helpers';
import { doctorFetchPendingAppointmentTypes } from '../../actionTypes';

/**
* Action to view pending appointments with "${backendURLs.BACKEND_URL}doctor-view-pending-appointment/?page=${page}&limit=${limit}" API.
* @param {string} doctorSession user token.
* @param {integer} page page number.
* @returns {object} message and pending appointments.
*/
export const doctorFetchPendingAppointment = (doctorSession, page) => {
  const token = doctorSession;
  const config = { headers: { token } };
  const limit = 10;
  return (dispatch) => axios.get(`${backendURLs.BACKEND_URL}doctor-view-pending-appointment/?page=${page}&limit=${limit}`, config)
    .then((response) => {
      dispatch({
        type: doctorFetchPendingAppointmentTypes.DOCOTR_FETCH_PENDING_APPOINTMENT_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: doctorFetchPendingAppointmentTypes.DOCOTR_FETCH_PENDING_APPOINTMENT_FAILURE,
        payload: error.response
      });
    });
};

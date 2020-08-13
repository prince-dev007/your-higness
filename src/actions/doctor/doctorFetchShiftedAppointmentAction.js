import axios from 'axios';
import { backendURLs } from '../../helpers';
import { doctorFetchShiftedAppointmentTypes } from '../../actionTypes';

/**
* Action to view shifted appointments with "${backendURLs.BACKEND_URL}doctor-view-shifted-appointment/?page=${page}&limit=${limit}" API.
* @param {string} doctorSession user token.
* @param {integer} page page number.
* @returns {object} message and shifted appointments.
*/
export const doctorFetchShiftedAppointment = (doctorSession, page) => {
  const token = doctorSession;
  const config = { headers: { token } };
  const limit = 10;
  return (dispatch) => axios.get(`${backendURLs.BACKEND_URL}doctor-view-shifted-appointment/?page=${page}&limit=${limit}`, config)
    .then((response) => {
      dispatch({
        type: doctorFetchShiftedAppointmentTypes.DOCOTR_FETCH_SHIFTED_APPOINTMENT_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: doctorFetchShiftedAppointmentTypes.DOCOTR_FETCH_SHIFTED_APPOINTMENT_FAILURE,
        payload: error.response
      });
    });
};

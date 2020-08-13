import axios from 'axios';
import { backendURLs } from '../../helpers';
import { doctorFetchDoneAppointmentTypes } from '../../actionTypes';

/**
* Action to view done appointments with "${backendURLs.BACKEND_URL}doctor-view-done-appointment/?page=${page}&limit=${limit}" API.
* @param {string} doctorSession user token.
* @param {integer} page page number.
* @returns {object} message and completed appointments.
*/
export const doctorFetchDoneAppointment = (doctorSession, page) => {
  const token = doctorSession;
  const config = { headers: { token } };
  const limit = 10;
  return (dispatch) => axios.get(`${backendURLs.BACKEND_URL}doctor-view-done-appointment/?page=${page}&limit=${limit}`, config)
    .then((response) => {
      dispatch({
        type: doctorFetchDoneAppointmentTypes.DOCOTR_FETCH_DONE_APPOINTMENT_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: doctorFetchDoneAppointmentTypes.DOCOTR_FETCH_DONE_APPOINTMENT_FAILURE,
        payload: error.response
      });
    });
};

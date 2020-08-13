import axios from 'axios';
import { backendURLs } from '../../helpers';
import { doctorFetchApprovedAppointmentTypes } from '../../actionTypes';

/**
* Action to view approved appointments with "${backendURLs.BACKEND_URL}doctor-view-approved-appointment/?page=${page}&limit=${limit}" API.
* @param {string} doctorSession user token.
* @param {integer} page page number.
* @returns {object} message and approved appointments.
*/
export const doctorFetchApprovedAppointment = (doctorSession, page) => {
  const token = doctorSession;
  const config = { headers: { token } };
  const limit = 10;
  return (dispatch) => axios.get(`${backendURLs.BACKEND_URL}doctor-view-approved-appointment/?page=${page}&limit=${limit}`, config)
    .then((response) => {
      dispatch({
        type: doctorFetchApprovedAppointmentTypes.DOCOTR_FETCH_APPROVED_APPOINTMENT_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: doctorFetchApprovedAppointmentTypes.DOCOTR_FETCH_APPROVED_APPOINTMENT_FAILURE,
        payload: error.response
      });
    });
};

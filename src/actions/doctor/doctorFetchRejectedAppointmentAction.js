import axios from 'axios';
import { backendURLs } from '../../helpers';
import { doctorFetchRejectedAppointmentTypes } from '../../actionTypes';


/**
* Action to view rejected appointments with "${backendURLs.BACKEND_URL}doctor-view-rejected-appointment/?page=${page}&limit=${limit}" API.
* @param {string} doctorSession user token.
* @param {integer} page page number.
* @returns {object} message and rejected appointments.
*/
export const doctorFetchRejectedAppointment = (doctorSession, page) => {
  const token = doctorSession;
  const config = { headers: { token } };
  const limit = 10;
  return (dispatch) => axios.get(`${backendURLs.BACKEND_URL}doctor-view-rejected-appointment/?page=${page}&limit=${limit}`, config)
    .then((response) => {
      dispatch({
        type: doctorFetchRejectedAppointmentTypes.DOCOTR_FETCH_REJECTED_APPOINTMENT_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: doctorFetchRejectedAppointmentTypes.DOCOTR_FETCH_REJECTED_APPOINTMENT_FAILURE,
        payload: error.response
      });
    });
};

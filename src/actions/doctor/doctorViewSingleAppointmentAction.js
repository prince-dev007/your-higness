import axios from 'axios';
import { backendURLs } from '../../helpers';
import { doctorViewSingleAppointmentTypes } from '../../actionTypes';

/**
* Action to view single appointment details with "${backendURLs.BACKEND_URL}view-single-appointment/${id}" API.
* @param {string} doctorSession user token.
* @param {integer} id appointment id.
* @returns {object} message and viewed appointment.
*/
export const doctorViewSingleAppointment = (doctorSession, id) => {
  const token = doctorSession;
  const config = { headers: { token } };
  return (dispatch) => axios.get(`${backendURLs.BACKEND_URL}view-single-appointment/${id}`, config)
    .then((response) => {
      dispatch({
        type: doctorViewSingleAppointmentTypes.DOCTOR_VIEW_SINGLE_APPOINTMENT_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: doctorViewSingleAppointmentTypes.DOCTOR_VIEW_SINGLE_APPOINTMENT_FAILURE,
        payload: error.response
      });
    });
};

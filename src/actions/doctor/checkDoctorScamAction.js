import axios from 'axios';
import { backendURLs } from '../../helpers';
import { checkDoctorScamTypes } from '../../actionTypes';

/**
* Action to check scam user from provided token with "${backendURLs.BACKEND_URL}/check-doctor-scam" API.
* @param {string} doctorSession user token.
* @returns {object} status and message.
*/
export const checkDoctorScam = (doctorSession) => {
  const token = doctorSession;
  const config = { headers: { token } };
  return (dispatch) => axios.get(`${backendURLs.BACKEND_URL}check-doctor-scam`, config)
    .then((response) => {
      dispatch({
        type: checkDoctorScamTypes.CHECK_DOCTOR_SCAM_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: checkDoctorScamTypes.CHECK_DOCTOR_SCAM_FAILURE,
        payload: error.response
      });
    });
};

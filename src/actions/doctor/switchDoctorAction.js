import axios from 'axios';
import { backendURLs } from '../../helpers';
import { switchDoctorTypes } from '../../actionTypes';

export const switchDoctor = (doctorSession) => {
  const token = doctorSession;
  const config = { headers: { token } };
  return (dispatch) => axios.get(`${backendURLs.BACKEND_URL}switch-doctor`, config)
    .then((response) => {
      dispatch({
        type: switchDoctorTypes.SWITCH_DOCTOR_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: switchDoctorTypes.SWITCH_DOCTOR_FAILURE,
        payload: error.response
      });
    });
};

import axios from 'axios';
import { backendURLs } from '../../helpers';
import { registerServiseTypes } from '../../actionTypes';

/**
* Action to register service with "${backendURLs.BACKEND_URL}register-service" API.
* @param {string} token a user token.
* @param {object} serviceData service object.
* @returns {object} status and registered service.
*/

export const registerService = (token, serviceData) => {
  const config = { headers: { token } };
  const {
    name,
    gender,
    specialization,
    treatment,
    city,
    regnumber,
    regcouncil,
    regyear,
    degree,
    college,
    completionyear,
    experience,
    establishment,
    establishmentname,
    establishmentcity,
    establishmentlocality,
    medicalregproofdocument,
    identityproofdocument,
    userPhone,
    userEmail,
    addressname,
    weekday,
    starttime,
    endtime,
    sessiontime,
    consultationfees,
    establishmenthours,
    establishmentlocation,
  } = serviceData;

  const phone = userPhone;
  const email = userEmail;

  const data = new FormData();
  data.append('name', name);
  data.append('gender', gender);
  data.append('specialization', specialization);
  data.append('treatment', treatment);
  data.append('city', city);
  data.append('regnumber', regnumber);
  data.append('regcouncil', regcouncil);
  data.append('regyear', regyear);
  data.append('degree', degree);
  data.append('college', college);
  data.append('completionyear', completionyear);
  data.append('experience', experience);
  data.append('establishment', establishment);
  data.append('establishmentname', establishmentname);
  data.append('establishmentcity', establishmentcity);
  data.append('establishmentlocality', establishmentlocality);
  data.append('phone', phone);
  data.append('email', email);
  data.append('addressname', addressname);
  data.append('weekday', weekday);
  data.append('starttime', starttime);
  data.append('endtime', endtime);
  data.append('sessiontime', sessiontime);
  data.append('consultationfees', consultationfees);
  data.append('establishmenthours', establishmenthours);
  data.append('establishmentlocation', establishmentlocation);
  if (medicalregproofdocument) {
    data.append('medicalregproofdocument', medicalregproofdocument);
  } if (identityproofdocument) {
    data.append('identityproofdocument', identityproofdocument);
  }
  return (dispatch) => axios.post(`${backendURLs.BACKEND_URL}register-service`, data, config)
    .then((response) => {
      dispatch({
        type: registerServiseTypes.REGISTER_SERVICE_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: registerServiseTypes.REGISTER_SERVICE_FAILURE,
        payload: error.response.data
      });
    });
};

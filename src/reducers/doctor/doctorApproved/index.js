import doctorFetchApprovedAppointmentInitialState from '../../../store/initialState';
import doctorApprovedReducer from './doctorApprovedReducer';


/**
* This is where we update  doctorFetchApprovedAppointmentInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = doctorFetchApprovedAppointmentInitialState, action) => {
  const doctorApproved = doctorApprovedReducer(state, action);
  return (doctorApproved || state);
};

import doctorFetchRejectedAppointmentInitialState from '../../../store/initialState';
import doctorRejectedReducer from './doctorRejectedReducer';

/**
* This is where we update doctorFetchRejectedAppointmentInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = doctorFetchRejectedAppointmentInitialState, action) => {
  const doctorRejected = doctorRejectedReducer(state, action);
  return (doctorRejected || state);
};

import doctorRejectPendingAppointmentInitialState from '../../../store/initialState';
import doctorRejectReducer from './doctorRejectReducer';

/**
* This is where we update doctorRejectPendingAppointmentInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = doctorRejectPendingAppointmentInitialState, action) => {
  const doctorReject = doctorRejectReducer(state, action);
  return (doctorReject || state);
};

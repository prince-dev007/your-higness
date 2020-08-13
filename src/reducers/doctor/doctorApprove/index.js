import doctorApprovePendingAppointmentInitialState from '../../../store/initialState';
import doctorApproveReducer from './doctorApproveReducer';

/**
* This is where we update  doctorApprovePendingAppointmentInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = doctorApprovePendingAppointmentInitialState, action) => {
  const doctorApprove = doctorApproveReducer(state, action);
  return (doctorApprove || state);
};

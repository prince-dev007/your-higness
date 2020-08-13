import doctorFetchPendingAppointmentInitialState from '../../../store/initialState';
import doctorPendingReducer from './doctorPendingReducer';

/**
* This is where we update doctorFetchPendingAppointmentInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = doctorFetchPendingAppointmentInitialState, action) => {
  const doctorPending = doctorPendingReducer(state, action);
  return (doctorPending || state);
};

import doctorFetchShiftedAppointmentInitialState from '../../../store/initialState';
import doctorShiftedReducer from './doctorShiftedReducer';

/**
* This is where we update doctorFetchShiftedAppointmentInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = doctorFetchShiftedAppointmentInitialState, action) => {
  const doctorShifted = doctorShiftedReducer(state, action);
  return (doctorShifted || state);
};

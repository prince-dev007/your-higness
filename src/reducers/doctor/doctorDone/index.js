import doctorDoneAcceptedAppointmentInitialState from '../../../store/initialState';
import doctorDoneReducer from './doctorDoneReducer';

/**
* This is where we update doctorDoneAcceptedAppointmentInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = doctorDoneAcceptedAppointmentInitialState, action) => {
  const doctorDone = doctorDoneReducer(state, action);
  return (doctorDone || state);
};

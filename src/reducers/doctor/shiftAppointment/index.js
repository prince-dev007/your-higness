import shiftAppointmentInitialState from '../../../store/initialState';
import shiftAppointmentReducer from './shiftAppointmentReducer';

/**
* This is where we update shiftAppointmentInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = shiftAppointmentInitialState, action) => {
  const shiftAppointment = shiftAppointmentReducer(state, action);
  return (shiftAppointment || state);
};

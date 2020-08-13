import bookDummyAppointmentInitialState from '../../../store/initialState';
import bookDummyAppointmentReducer from './bookDummyAppointmentReducer';

/**
* This is where we update  bookDummyAppointmentInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = bookDummyAppointmentInitialState, action) => {
  const bookDummyAppointment = bookDummyAppointmentReducer(state, action);
  return (bookDummyAppointment || state);
};

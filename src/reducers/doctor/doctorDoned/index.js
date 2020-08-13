import doctorFetchDoneAppointmentInitialState from '../../../store/initialState';
import doctorDonedReducer from './doctorDonedReducer';

/**
* This is where we update doctorFetchDoneAppointmentInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = doctorFetchDoneAppointmentInitialState, action) => {
  const doctorDoned = doctorDonedReducer(state, action);
  return (doctorDoned || state);
};

import doctorViewSingleAppointmentInitialState from '../../../store/initialState';
import doctorViewReducer from './doctorViewReducer';

/**
* This is where we update doctorViewSingleAppointmentInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = doctorViewSingleAppointmentInitialState, action) => {
  const doctorView = doctorViewReducer(state, action);
  return (doctorView || state);
};

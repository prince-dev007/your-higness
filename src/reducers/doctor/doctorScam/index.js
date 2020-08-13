import checkDoctorScamInitialState from '../../../store/initialState';
import doctorScamReducer from './doctorScamReducer';

/**
* This is where we update checkDoctorScamInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = checkDoctorScamInitialState, action) => {
  const doctorScam = doctorScamReducer(state, action);
  return (doctorScam || state);
};

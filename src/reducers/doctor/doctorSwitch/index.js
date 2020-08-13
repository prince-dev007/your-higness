import switchDoctorInitialState from '../../../store/initialState';
import switchDoctorReducer from './switchDoctorReducer';

/**
* This is where we update switchDoctorInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = switchDoctorInitialState, action) => {
  const switchDoctor = switchDoctorReducer(state, action);
  return (switchDoctor || state);
};

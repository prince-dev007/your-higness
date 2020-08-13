import submitVerificationInitialState from '../../../store/initialState';
import submitVerificationReducer from './submitVerificationReducer';

/**
* This is where we update submitVerificationInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = submitVerificationInitialState, action) => {
  const SubmitVerification = submitVerificationReducer(state, action);
  return (SubmitVerification || state);
};

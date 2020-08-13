import resetPasswordInitialState from '../../../store/initialState';
import resetPasswordReducer from './resetPasswordReducer';

/**
* This is where we update resetPasswordInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = resetPasswordInitialState, action) => {
  const resetPassword = resetPasswordReducer(state, action);
  return (resetPassword || state);
};

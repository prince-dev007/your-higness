import resetLinkInitialState from '../../../store/initialState';
import resetLinkReducer from './resetLinkReducer';

/**
* This is where we update resetLinkInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = resetLinkInitialState, action) => {
  const resetLink = resetLinkReducer(state, action);
  return (resetLink || state);
};

import verifyInitialState from '../../../store/initialState';
import verifyReducer from './verifyReducer';

/**
* This is where we update verifyInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = verifyInitialState, action) => {
  const Verify = verifyReducer(state, action);
  return (Verify || state);
};

import registerInitialState from '../../../store/initialState';
import registerReducer from './registerReducer';

/**
* This is where we update registerServiceInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = registerInitialState, action) => {
  const Register = registerReducer(state, action);
  return (Register || state);
};

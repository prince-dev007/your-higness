import loginInitialState from '../../store/initialState';
import loginReducer from './loginReducer';

/**
* This is where we update loginInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = loginInitialState, action) => {
  const Login = loginReducer(state, action);
  return (Login || state);
};

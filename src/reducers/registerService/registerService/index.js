import registerServiceInitialState from '../../../store/initialState';
import registerServiceReducer from './registerServiceReducer';

/**
* This is where we update registerServiceInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = registerServiceInitialState, action) => {
  const RegisterService = registerServiceReducer(state, action);
  return (RegisterService || state);
};

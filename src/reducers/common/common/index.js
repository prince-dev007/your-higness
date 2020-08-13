import commonInitialState from '../../../store/initialState';
import commonReducer from './commonReducer';

/**
* This is where we update  commonInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = commonInitialState, action) => {
  const Common = commonReducer(state, action);
  return (Common || state);
};

import viewSingleServiceInitialState from '../../../store/initialState';
import masterViewReducer from './masterViewReducer';

/**
* This is where we update viewSingleServiceInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = viewSingleServiceInitialState, action) => {
  const masterView = masterViewReducer(state, action);
  return (masterView || state);
};

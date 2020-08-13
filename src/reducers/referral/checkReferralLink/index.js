import checkReferralLinkInitialState from '../../../store/initialState';
import checkRefferralLinkReducer from './checkRefferralLinkReducer';

/**
* This is where we checkReferralLinkInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = checkReferralLinkInitialState, action) => {
  const checkRefferralLink = checkRefferralLinkReducer(state, action);
  return (checkRefferralLink || state);
};

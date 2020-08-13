import fetchReferralLinkInitialState from '../../../store/initialState';
import fetchRefferralLinkReducer from './fetchRefferralLinkReducer';

/**
* This is where we fetchReferralLinkInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = fetchReferralLinkInitialState, action) => {
  const fetchRefferralLink = fetchRefferralLinkReducer(state, action);
  return (fetchRefferralLink || state);
};

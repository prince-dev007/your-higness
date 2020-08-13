import { checkReferralLinkTypes } from '../../../actionTypes';


/**
* This is fetch user referral link details reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case checkReferralLinkTypes.CHECK_REFERRAL_LINK_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case  checkReferralLinkTypes.CHECK_REFERRAL_LINK_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

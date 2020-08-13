import { masterSendMessageTypes } from '../../../actionTypes';

/**
* This is send omment to service reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case masterSendMessageTypes.MASTER_SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case masterSendMessageTypes.MASTER_SEND_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

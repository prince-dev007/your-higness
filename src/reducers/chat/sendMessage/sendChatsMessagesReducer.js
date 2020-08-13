import { sendChatMessageTypes } from '../../../actionTypes';

/**
* This is send chat messages reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case sendChatMessageTypes.SEND_CHATS_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case sendChatMessageTypes.VIEW_CHATS_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

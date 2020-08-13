import { viewChatsMessagesTypes } from '../../../actionTypes';

/**
* This is view chat messages reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case viewChatsMessagesTypes.VIEW_CHATS_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case viewChatsMessagesTypes.VIEW_CHATS_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

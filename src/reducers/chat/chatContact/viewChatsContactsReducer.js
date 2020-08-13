import { viewChatsContactsTypes } from '../../../actionTypes';

/**
* This is view chat contacts reducer.
* @param {object} state state object.
* @param {string}  type action type.
* @param {object} payload object of data.
* @returns {null}.
*/
export default (state, { type, payload }) => {
  switch (type) {
    case viewChatsContactsTypes.VIEW_CHATS_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case viewChatsContactsTypes.VIEW_CHATS_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};

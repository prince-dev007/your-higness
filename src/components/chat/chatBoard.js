/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import openSocket from 'socket.io-client';

import { backendURLs } from '../../helpers';
import ChatIcon from '../../assets/images/chatIcon.png';
import SendIcon from '../../assets/images/sendButton.png';
import ChatProfile from '../../assets/images/ChatProfile.png';
import ConnectedDevice from '../../assets/images/connectedDevice.png';
import ChatMessageProfile from '../../assets/images/ChatMessageProfile.png';
import { checkDoctorScam, viewChatsContacts, viewChatsMeesages, sendChatMessage } from '../../actions';


/**
 * This is ChatBoard class which hold chat component.
 */
class ChatBoard extends Component {
  /* State Staff */
  constructor() {
    super();
    this.state = { message: '', result: '', showServerResult: false };
  }

  componentDidMount() {
    const { checkCurrentDoctorScam, viewCurrentChatsContacts, viewCurrentChatsMeesages, history } = this.props;
    const token = localStorage.getItem('token');
    if (!(localStorage.getItem('token'))) {
      localStorage.removeItem('token');
      localStorage.removeItem('firstame');
      localStorage.removeItem('lastname');
      history.push('/login-user-account');
    }
    if (sessionStorage.getItem('activeChatUserId') && localStorage.getItem('accountOwnerId')) {
      viewCurrentChatsMeesages(token, sessionStorage.getItem('activeChatUserId'), localStorage.getItem('accountOwnerId'));
    }

    const serverURL = backendURLs.LISTEN_SERVER;
    const socket = openSocket(serverURL);
    socket.on('newChat', () => {
      if (sessionStorage.getItem('activeChatUserId') && localStorage.getItem('accountOwnerId')) {
        viewCurrentChatsMeesages(token, sessionStorage.getItem('activeChatUserId'), localStorage.getItem('accountOwnerId'));
      }
    });

    checkCurrentDoctorScam(token);
    viewCurrentChatsContacts(token);
  }

  /**
   * This is fuction to view chat messages.
   * @param {object} key prevent browser to reload.
   * @param {object} senderId sender id.
   * @param {object} senderName sender name.
   * @param {object} receiverId receiver id.
   * @returns {null}.
   */
  viewChatMessage(key, senderId, senderName, receiverId) {
    key.preventDefault();
    const { viewCurrentChatsMeesages, history } = this.props;
    const token = localStorage.getItem('token');
    if (!(localStorage.getItem('token'))) {
      localStorage.removeItem('token');
      localStorage.removeItem('firstame');
      localStorage.removeItem('lastname');
      history.push('/login-user-account');
    }
    if (localStorage.getItem('accountOwnerId') !== receiverId) {
      sessionStorage.setItem('activeChatUserName', senderName);
      sessionStorage.setItem('activeChatUserId', senderId);
    }

    viewCurrentChatsMeesages(token, senderId, receiverId);
  }

  /**
   * This is fuction to send message.
   * @param {object} key prevent browser to reload.
   * @param {object} receiverId receiver id.
   * @returns {null}.
   */
  sendMessage(key, receiverId) {
    key.preventDefault();
    const { message } = this.state;
    const token = localStorage.getItem('token');
    const { sendCurrentChatMessage, viewCurrentChatsMeesages, history } = this.props;

    if (!(localStorage.getItem('token'))) {
      localStorage.removeItem('token');
      localStorage.removeItem('firstame');
      localStorage.removeItem('lastname');
      history.push('/login-user-account');
    }

    if (message.length < 1) {
      this.setState({ result: 'Empty Message' });
    } else {
      this.setState({ showServerResult: true, message: '', result: 'Loading...' });
      sendCurrentChatMessage(token, receiverId, message);
      this.componentDidMount();

      const serverURL = backendURLs.LISTEN_SERVER;
      const socket = openSocket(serverURL);
      socket.on('sentChat', () => {
        if (sessionStorage.getItem('activeChatUserId') && localStorage.getItem('accountOwnerId')) {
          viewCurrentChatsMeesages(token, sessionStorage.getItem('activeChatUserId'), localStorage.getItem('accountOwnerId'));
        }
      });
    }
  }

  handleChange(key) {
    this.setState({ [key.target.id]: key.target.value, });
  }

  render() {
    const { message, result, showServerResult } = this.state;
    const {
      viewContactLoading,
      viewContactData,

      viewMessagesLoading,
      viewMessagesData,

      history,
      scamLoading,
      scamServerData,

      sendChatLoading,
      sendChatData,

    } = this.props;


    if (sendChatLoading !== null) {
      setTimeout(() => {
        this.setState({ showServerResult: false });
      }, 3000);
    }

    if (viewMessagesLoading === true) {
      const getviewMessagesLoading = JSON.stringify(viewMessagesLoading);
      sessionStorage.setItem('viewedMessagesLoading', getviewMessagesLoading);

      const getviewMessagesData = JSON.stringify(viewMessagesData);
      sessionStorage.setItem('viewedChatsMessagesData', getviewMessagesData);
    }

    const getviewMessagesData = sessionStorage.getItem('viewedChatsMessagesData');
    const unStringfiedChatsMessages = JSON.parse(getviewMessagesData);

    const getviewMessagesLoading = sessionStorage.getItem('viewedMessagesLoading');
    const unStringfiedMessagesLoading = JSON.parse(getviewMessagesLoading);

    return (
      <div>
        <Helmet>
          <style>{'body { background-color: rgb(134, 134, 134); }'}</style>
        </Helmet>

        {
          scamLoading === false
            ? (
              <div>
                <div className="doctor-dashbord-container">
                  <div className="doctor-dashbord">
                    <h2 className="doctor-scam">{scamServerData.data.data}</h2>
                    <br />
                    <a href="/login-user-account" className="reset-link"> Go with us like Pro </a>
                  </div>
                </div>
              </div>
            )
            : localStorage.getItem('token')
              ? (
                <div>

                  <div className="chat-Container">

                    <div className="chat-title">
                      <span> <img src={ChatIcon} alt="ChatIcon" /> </span> <div>Chats</div>
                    </div>

                    <div className="chat-panel">

                      {
                        viewContactLoading === true
                        && viewContactData.data
                          ? viewContactData.data.map((contact) => (

                            <div key={contact.id}>
                              <div className="chat-border chat-border-dammy" />
                              <img src={ChatProfile} alt="ProfileIcon" /><div className="message-sender" onClick={(key) => { this.viewChatMessage(key, contact.senderId, contact.senderName, contact.receiverId); }}> {contact.senderName} </div>
                              <div className="chat-border" />
                            </div>

                          ))
                          : viewContactLoading === false
                            ? (
                              <div>
                                <div className="chat-border chat-border-dammy" />
                                <div className="message-sender"> { viewContactData.data } </div>
                              </div>
                            )
                            : null

                      }

                    </div>

                    <div>

                      {
                        viewContactLoading === true
                        && unStringfiedMessagesLoading === true
                        && unStringfiedChatsMessages.data
                          ? (
                            <div>

                              <div className="message-panel">


                                <div className="user-profile">

                                  {
                                    sessionStorage.getItem('activeChatUserName')
                                      ? <div><img src={ChatMessageProfile} alt="ProfileIcon" /> <div className="user-name">{sessionStorage.getItem('activeChatUserName')}</div></div>
                                      : null
                                  }

                                </div>


                                <div className="message-dashboard">

                                  <div className="head">
                                    <h2>Messages</h2>
                                  </div>

                                  <div>
                                    {
                                      unStringfiedChatsMessages.data.map((sender) => (

                                        <div key={sender.id}>

                                          {
                                          sender.senderName !== localStorage.getItem('lastname')
                                            ? (
                                              <div>
                                                <br /><br /><br /><br />
                                                <div className="left-message">
                                                  <div className="name">{sender.senderName}</div>
                                                  <br />
                                                  <div className="message">{sender.message}</div>
                                                  <br />
                                                  <div className="date">{new Date(sender.createdAt).toDateString()} {new Date(sender.createdAt).toLocaleTimeString()}</div>
                                                </div>
                                                <br /><br /><br /><br />
                                              </div>
                                            )
                                            : (
                                              <div>
                                                <br /><br /><br /><br />
                                                <div className="right-message">
                                                  <div className="name">{sender.senderName}</div>
                                                  <br />
                                                  <div className="message">{sender.message}</div>
                                                  <br />
                                                  <div className="date">{new Date(sender.createdAt).toDateString()} {new Date(sender.createdAt).toLocaleTimeString()}</div>
                                                </div>
                                                <br /><br /><br /><br />
                                              </div>
                                            )
                                        }

                                        </div>
                                      ))
                                    }
                                  </div>


                                  <div>
                                    {
                                      showServerResult === true
                                        ? (
                                          <div id="sent-msg">
                                            {
                                              sendChatLoading !== null
                                              && sendChatData.data
                                                ? sendChatData.data || result
                                                : 'Loading...'
                                            }
                                          </div>
                                        )
                                        : null
                                    }
                                  </div>

                                </div>

                                <div>

                                  <div className="reply-panel">

                                    <textarea
                                      id="message"
                                      placeholder=" Any message!! Please type here."

                                      value={message}
                                      onChange={(id) => this.handleChange(id)}
                                    />

                                    <img src={SendIcon} alt="SendIcon" onClick={(key) => { this.sendMessage(key, sessionStorage.getItem('activeChatUserId')); }} />

                                  </div>

                                </div>

                              </div>

                            </div>
                          )
                          : (
                            <div className="chat-welcome">
                              <img src={ConnectedDevice} alt="ConnectedDevice" />
                              <h2>Stay Connected With YH Chats Web App ):</h2>
                            </div>
                          )
                      }

                    </div>

                  </div>

                </div>
              )
              : history.push('/login-user-account')
        }

      </div>
    );
  }
}

ChatBoard.defaultProps = {
  scamLoading: false,
  sendChatLoading: null,
  viewContactLoading: null,
  viewMessagesLoading: null,
  history: {},
  sendChatData: {},
  scamServerData: {},
  viewContactData: {},
  viewMessagesData: {},
  sendCurrentChatMessage: PropTypes.func,
  checkCurrentDoctorScam: PropTypes.func,
  viewCurrentChatsMeesages: PropTypes.func,
  viewCurrentChatsContacts: PropTypes.func,
};

ChatBoard.propTypes = {
  scamLoading: PropTypes.bool,
  sendChatLoading: PropTypes.bool,
  viewContactLoading: PropTypes.bool,
  viewMessagesLoading: PropTypes.bool,
  history: PropTypes.shape(),
  sendChatData: PropTypes.shape(),
  scamServerData: PropTypes.shape(),
  viewContactData: PropTypes.shape(),
  viewMessagesData: PropTypes.shape(),
  checkCurrentDoctorScam: PropTypes.func,
  sendCurrentChatMessage: PropTypes.func,
  viewCurrentChatsMeesages: PropTypes.func,
  viewCurrentChatsContacts: PropTypes.func,
};


const mapStateToProps = ({
  sendChatMessageInitialState,
  checkDoctorScamInitialState,
  viewChatsContactsInitialState,
  viewChatsMessagesInitialState,
}) => ({
  scamLoading: checkDoctorScamInitialState.loading,
  scamServerData: checkDoctorScamInitialState.data,

  sendChatLoading: sendChatMessageInitialState.loading,
  sendChatData: sendChatMessageInitialState.data,

  viewContactLoading: viewChatsContactsInitialState.loading,
  viewContactData: viewChatsContactsInitialState.data,

  viewMessagesLoading: viewChatsMessagesInitialState.loading,
  viewMessagesData: viewChatsMessagesInitialState.data,
});


const mapDispatchToProps = (dispatch) => (
  {
    checkCurrentDoctorScam: (token) => {
      dispatch(checkDoctorScam(token));
    },

    viewCurrentChatsContacts: (token) => {
      dispatch(viewChatsContacts(token));
    },

    viewCurrentChatsMeesages: (token, senderId, receiverId) => {
      dispatch(viewChatsMeesages(token, senderId, receiverId));
    },

    sendCurrentChatMessage: (token, receiverId, message) => {
      dispatch(sendChatMessage(token, receiverId, message));
    },
  });
export default connect(mapStateToProps, mapDispatchToProps)(ChatBoard);

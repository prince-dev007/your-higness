/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MasterLogout from './masterLogout';
import MasterNotifyPanel from './masterNotifyPanel';
import { viewNotificationsService } from '../../actions';
import BlueMenuIcon from '../../assets/images/menuIcon.png';
import chatIcon from '../../assets/images/masterChatIcon.png';
import NotificationIcon from '../../assets/images/masterNotificationIcon.png';


/**
 * This is MasterHeader class which hold Master Header component.
 */
class MasterHeader extends Component {
  /* Srate Staff */
  constructor() {
    super();
    this.state = { showNotifyPanel: false, };
  }

  showNotificationPanel(key) {
    key.preventDefault();
    this.setState({ showNotifyPanel: true });
  }

  hideNotificationPanel(key) {
    key.preventDefault();
    setTimeout(() => {
      this.setState({ showNotifyPanel: false });
    }, 500);
  }

  viewNotifications(key) {
    key.preventDefault();
    const { viewCurrentNotificationsService } = this.props;
    const masterSession = localStorage.getItem('masterSessionID');
    if (masterSession) {
      viewCurrentNotificationsService(masterSession);
      setTimeout(() => {
        this.showNotificationPanel(key);
      }, 500);
    } else {
      viewCurrentNotificationsService(masterSession);
      setTimeout(() => {
        this.showNotificationPanel(key);
      }, 500);
    }
  }

  render() {
    const { showNotifyPanel } = this.state;
    return (
      <div className="master-header-container">

        <div className="header">
          <div className="your-highness-menu">
            <span>
              <img src={BlueMenuIcon} alt="menu" />
            </span>
          </div>
          <div className="user-alert">
            <div className="user-button-event">
              <ul>

                <li>
                  <span className="notification">
                    {
                      showNotifyPanel === false
                        ? <img onClick={(key) => { this.viewNotifications(key); }} src={NotificationIcon} alt="alert" />
                        : <img onClick={(key) => { this.hideNotificationPanel(key); }} src={NotificationIcon} alt="alert" />
                    }
                  </span>
                </li>

                <li>
                  <span className="chat">
                    <img src={chatIcon} alt="chat" />
                  </span>
                </li>

              </ul>
            </div>
          </div>
          <div className="nav-bar">
            <div>
              <MasterLogout />
            </div>
          </div>
        </div>

        <div>
          {
            showNotifyPanel === true
              ? <div className="notification-container"> <MasterNotifyPanel notifyProps={this.props} /> </div>
              : null
          }
        </div>

      </div>
    );
  }
}


MasterHeader.defaultProps = { viewCurrentNotificationsService: PropTypes.func, };

MasterHeader.propTypes = { viewCurrentNotificationsService: PropTypes.func, };

const mapStateToProps = ({ viewNotificationsServiceInitialState }) => ({
  masterNotificationLoading: viewNotificationsServiceInitialState.loading,
  masterNotificationData: viewNotificationsServiceInitialState.data,
});
const mapDispatchToProps = (dispatch) => ({ viewCurrentNotificationsService: (masterSession) => { dispatch(viewNotificationsService(masterSession)); }, });

export default connect(mapStateToProps, mapDispatchToProps)(MasterHeader);

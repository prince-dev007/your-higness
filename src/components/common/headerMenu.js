/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import Logo from './logo';
import AppMenu from './appMenu';
// import Referral from './referral';
import LogoutUser from './logoutUser';
import Profile from '../../assets/images/profile.jpg';
import SearchIcon from '../../assets/images/search.png';
import ChatIcon from '../../assets/images/chatIcon.png';
import BlueMenuIcon from '../../assets/images/menuIcon.png';
import SettingIcon from '../../assets/images/settingIcon.png';
import ChatProfile from '../../assets/images/ChatProfile.png';
import BlueChatIcon from '../../assets/images/blueChatIcon.png';
import WhiteMenuIcon from '../../assets/images/internalMenuIcon.png';
import NotificationIcon from '../../assets/images/notificationIcon.png';
import CloseBlueMenuIcon from '../../assets/images/closeBlueMenuIcon.png';
import BlueNotificationIcon from '../../assets/images/blueNotificationIcon.png';

/**
 * This is HeaderMenu class which hold header menu component.
 */
class HeaderMenu extends Component {
  /* Srate Staff */
  constructor() {
    super();
    this.state = { showMenuIcon: false };
  }

  showMenu(key) {
    key.preventDefault();
    this.setState({ showMenuIcon: true });
  }

  hideMenu(key) {
    key.preventDefault();
    // this.hideInvitationLink(key);
    this.setState({ showMenuIcon: false });
  }

  render() {
    const { showMenuIcon } = this.state;

    const {
      switchLoading,
      sendProps,
    } = this.props;

    return (
      <div className="header-menu-container">

        {
          sendProps.location.pathname === '/register-services-account'
            ? (
              <header className="white-head">

                <div className="your-highness-menu">
                  <span>
                    {
                      showMenuIcon === false
                        ? <img onClick={(key) => { this.showMenu(key); }} src={BlueMenuIcon} alt="menu" />
                        : <img onClick={(key) => { this.hideMenu(key); }} src={BlueMenuIcon} alt="menu" />
                    }
                  </span>
                </div>

                <div className="user-alert">

                  <div className="user-button-event">
                    <ul>

                      <li>
                        <span className="notification">
                          <img src={BlueNotificationIcon} alt="alert" />
                        </span>
                      </li>

                      <li>
                        <span className="chat">
                          <img src={BlueChatIcon} alt="chat" />
                        </span>
                      </li>

                    </ul>
                  </div>

                </div>

                <div className="nav-bar">
                  <div>
                    <LogoutUser />
                  </div>
                </div>

              </header>
            )
            : sendProps.location.pathname === '/user-welcome-dashboard'
              ? (
                <header className="unColor-head">

                  <div className="your-highness-menu">

                    <span className="menu">
                      {
                      showMenuIcon === false
                        ? <img onClick={(key) => { this.showMenu(key); }} src={WhiteMenuIcon} alt="menu" />
                        : <img onClick={(key) => { this.hideMenu(key); }} src={WhiteMenuIcon} alt="menu" />
                    }
                    </span>

                    <span className="logo">
                      <Logo />
                    </span>

                  </div>

                  <div className="user-alert">

                    <div className="user-button-event">
                      <ul>

                        <li>
                          <span className="notification">
                            <img src={NotificationIcon} alt="alert" />
                          </span>
                        </li>

                        <li>
                          <span className="chat">
                            <img src={ChatIcon} alt="chat" />
                          </span>
                        </li>

                      </ul>
                    </div>

                  </div>

                  <div className="nav-bar">
                    <div>
                      <LogoutUser />
                    </div>
                  </div>

                </header>
              )
              : (
                <header className="blue-head">

                  <div className="your-highness-menu">
                    <span>
                      {
                      showMenuIcon === false
                        ? <img onClick={(key) => { this.showMenu(key); }} src={WhiteMenuIcon} alt="menu" />
                        : <img onClick={(key) => { this.hideMenu(key); }} src={WhiteMenuIcon} alt="menu" />
                    }
                    </span>
                  </div>

                  <div className="user-alert">

                    <div className="user-button-event">
                      <ul>

                        <li>
                          <span className="notification">
                            <img src={NotificationIcon} alt="alert" />
                          </span>
                        </li>

                        <li>
                          <span className="chat">
                            <img src={ChatIcon} alt="chat" />
                          </span>
                        </li>

                      </ul>
                    </div>

                  </div>

                  <div className="nav-bar">
                    <div>
                      <LogoutUser />
                    </div>
                  </div>

                </header>
              )
        }

        {
          showMenuIcon === true
            ? (
              <aside className="side-bar">

                <div className="user-setting">
                  <ul>

                    <li>
                      <span className="notification">
                        <img src={SettingIcon} alt="setting" />
                      </span>
                    </li>

                    <li>
                      <span className="closeMenu">
                        <img src={CloseBlueMenuIcon} alt="close" onClick={(key) => { this.hideMenu(key); }} />
                      </span>
                    </li>

                  </ul>
                </div>

                <div className="user-side">

                  <div className="user-pic">

                    <img src={ChatProfile} alt="profile" />
                    {
                      switchLoading === null
                        ? null
                        : switchLoading === true
                          ? <img src={Profile} alt="profile" />
                          : switchLoading === false
                            ? <img src={ChatProfile} alt="profile" />
                            : null
                    }

                  </div>

                  <div className="user-info">
                    <span className="user-name">{localStorage.getItem('lastname')} Profile</span>
                    <span className="user-status"> Online</span>
                  </div>

                  <div className="user-search">
                    <div className="user-row">
                      <input type="text" placeholder="search-doctor" />
                      <button type="submit">
                        <span>
                          <img src={SearchIcon} alt="search" />
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="user-side-nav">
                    {/* <h2 className="long-head"> Referral Prize</h2> */}

                    {/* <h2 className="short-head"> Services</h2>
                    <nav>
                      <ul>
                        <li> <div> <span> <img src={BlueMenuIcon} alt="clock" /> </span> Medical History / DNA </div> </li>

                        <li> <div> <span> <img src={BlueMenuIcon} alt="clock" /> </span> Appointments </div> </li>

                        <li> <div> <span> <img src={BlueMenuIcon} alt="clock" /> </span> Manage Service </div> </li>

                      </ul>
                    </nav> */}

                    <h2 className="short-head">General</h2>
                    <AppMenu sendProps={this.props} />

                  </div>

                </div>

              </aside>
            )

            : null
        }

      </div>
    );
  }
}


HeaderMenu.defaultProps = {
  switchLoading: false,
  // scamLoading: false,

  // scamServerData: {},
  sendProps: {},
};


HeaderMenu.propTypes = {
  sendProps: PropTypes.shape(),
  // scamServerData: PropTypes.shape(),

  // scamLoading: PropTypes.bool,
  switchLoading: PropTypes.bool,
};

const mapStateToProps = ({ checkDoctorScamInitialState, switchDoctorInitialState }) => (
  {
    scamLoading: checkDoctorScamInitialState.loading,
    scamServerData: checkDoctorScamInitialState.data,

    switchLoading: switchDoctorInitialState.loading,
    switchServerData: switchDoctorInitialState.data,

  }
);

export default connect(mapStateToProps, null)(HeaderMenu);

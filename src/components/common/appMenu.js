/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GreeMenuIcon from '../../assets/images/menuIcon.png';
import { checkDoctorScam, switchDoctor, fetchReferralLink } from '../../actions';


/**
 * This is AppMenu class which hold app-menu component
 */
class AppMenu extends Component {
  componentDidMount() {
    const { checkCurrentUserScam, switchCurrentDoctor } = this.props;

    if (!(localStorage.getItem('token'))) {
      localStorage.removeItem('token');
      localStorage.removeItem('firstame');
      localStorage.removeItem('lastname');
      window.location.replace('/login-services-account');
    } else {
      const userSession = localStorage.getItem('token');
      checkCurrentUserScam(userSession);
      switchCurrentDoctor(userSession);
    }
  }

  handleSwitchService(key) {
    key.preventDefault();
    if (localStorage.getItem('token') && localStorage.getItem('lastname') && localStorage.getItem('firstname') && localStorage.getItem('email') && localStorage.getItem('phone')) {
      setTimeout(() => {
        window.location.href = '/register-services-account';
      }, 500);
    } else {
      window.location.replace('/login-services-account');
    }
  }

  handleSwitchHome(key) {
    key.preventDefault();
    if (localStorage.getItem('token') && localStorage.getItem('lastname') && localStorage.getItem('firstname') && localStorage.getItem('email') && localStorage.getItem('phone')) {
      setTimeout(() => {
        window.location.href = '/user-welcome-dashboard';
      }, 500);
    } else {
      window.location.replace('/login-user-account');
    }
  }

  handleSwitchDoctor(key) {
    key.preventDefault();
    if (localStorage.getItem('token') && localStorage.getItem('lastname') && localStorage.getItem('firstname') && localStorage.getItem('email') && localStorage.getItem('phone')) {
      setTimeout(() => {
        window.location.href = '/doctor-pending-appointments';
      }, 500);
    } else {
      window.location.replace('/user-welcome-dashboard');
    }
  }

  render() {
    const {
      scamLoading,
      scamServerData,
      // switchLoading,
      sendProps,
    } = this.props;

    return (
      <div>

        {
              scamLoading === false
                ? (
                  <div className="doctor-dashbord-container">
                    <div className="doctor-dashbord">
                      <h2 className="doctor-scam">{scamServerData.data.data}</h2>
                      <br />
                      <a href="/login-user-account" className="reset-link"> Go with us like Pro </a>
                    </div>
                  </div>
                )
                : (
                  <div>
                    <nav>
                      <ul>

                        {
                        sendProps.sendProps.location.pathname === '/doctor-pending-appointments'
                        || sendProps.sendProps.location.pathname === '/doctor-done-appointments'
                        || sendProps.sendProps.location.pathname === '/doctor-appointment-details'
                        || sendProps.sendProps.location.pathname === '/doctor-shifted-appointments'
                        || sendProps.sendProps.location.pathname === '/doctor-rejected-appointments'
                        || sendProps.sendProps.location.pathname === '/doctor-accepted-appointments'
                          ? null
                          : sendProps.sendProps.location.pathname === '/user-welcome-dashboard'
                            ? <li onClick={(key) => { this.handleSwitchHome(key); }}> <div className="active"> <span> <img src={GreeMenuIcon} alt="home" /> </span> Home </div> </li>
                            : <li onClick={(key) => { this.handleSwitchHome(key); }}> <div> <span> <img src={GreeMenuIcon} alt="clock" /> </span> Home </div> </li>
                        }


                        {
                        sendProps.sendProps.location.pathname === '/doctor-pending-appointments'
                        || sendProps.sendProps.location.pathname === '/doctor-done-appointments'
                        || sendProps.sendProps.location.pathname === '/doctor-appointment-details'
                        || sendProps.sendProps.location.pathname === '/doctor-shifted-appointments'
                        || sendProps.sendProps.location.pathname === '/doctor-rejected-appointments'
                        || sendProps.sendProps.location.pathname === '/doctor-accepted-appointments'
                          ? <li onClick={(key) => { this.handleSwitchHome(key); }}> <div> <span> <img src={GreeMenuIcon} alt="switch-user" /> </span>  Switch User </div> </li>
                          : null
                        }

                        {/* {
                          switchLoading === true
                            ? sendProps.sendProps.location.pathname === '/doctor-done-appointments'
                            || sendProps.sendProps.location.pathname === '/doctor-appointment-details'
                            || sendProps.sendProps.location.pathname === '/doctor-pending-appointments'
                            || sendProps.sendProps.location.pathname === '/doctor-shifted-appointments'
                            || sendProps.sendProps.location.pathname === '/doctor-rejected-appointments'
                            || sendProps.sendProps.location.pathname === '/doctor-accepted-appointments'
                              ? <li onClick={(key) => { this.handleSwitchDoctor(key); }}> <div className="active"> <span> <img src={GreeMenuIcon} alt="clock" /> </span> Switch Doctor </div> </li>
                              : <li onClick={(key) => { this.handleSwitchDoctor(key); }}> <div> <span> <img src={GreeMenuIcon} alt="clock" /> </span> Switch Doctor </div> </li>
                            : null
                        } */}


                        {
                            sendProps.sendProps.location.pathname === '/register-services-account'
                              ? <li> <div className="active"> <span> <img src={GreeMenuIcon} alt="clock" /> </span> Doctor Signup </div> </li>
                              : <li onClick={(key) => { this.handleSwitchService(key); }}> <div> <span> <img src={GreeMenuIcon} alt="clock" /> </span> Doctor Signup </div> </li>
                        }


                      </ul>
                    </nav>
                  </div>
                )
        }

      </div>
    );
  }
}


AppMenu.defaultProps = {
  scamLoading: false,
  // switchLoading: false,
  sendProps: {},
  scamServerData: {},
  switchCurrentDoctor: PropTypes.func,
  checkCurrentUserScam: PropTypes.func,
};

AppMenu.propTypes = {
  sendProps: PropTypes.shape(),
  scamServerData: PropTypes.shape(),


  scamLoading: PropTypes.bool,
  // switchLoading: PropTypes.bool,
  switchCurrentDoctor: PropTypes.func,
  checkCurrentUserScam: PropTypes.func,
};


const mapStateToProps = ({ checkDoctorScamInitialState, switchDoctorInitialState }) => (
  {
    scamLoading: checkDoctorScamInitialState.loading,
    scamServerData: checkDoctorScamInitialState.data,

    switchLoading: switchDoctorInitialState.loading,
    switchServerData: switchDoctorInitialState.data,

  }
);

const mapDispatchToProps = (dispatch) => (
  {
    checkCurrentUserScam: (userSession) => {
      dispatch(checkDoctorScam(userSession));
    },

    switchCurrentDoctor: (userSession) => {
      dispatch(switchDoctor(userSession));
    },

    fetchCurrentReferralLink: (userSession) => {
      dispatch(fetchReferralLink(userSession));
    },

  });

export default connect(mapStateToProps, mapDispatchToProps)(AppMenu);

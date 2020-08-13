/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ReferralPrize from '../../assets/images/referralPrize.png';
import { checkDoctorScam, fetchReferralLink } from '../../actions';
import ReferralConnection from '../../assets/images/referralConnection.png';


/**
 * This is referral class which hold referral component.
 */
class Referral extends Component {
  /* Srate Staff */
  constructor() {
    super();
    this.state = { showReferralLink: false };
  }

  componentDidMount() {
    const { checkCurrentUserScam } = this.props;

    if (!(localStorage.getItem('token'))) {
      localStorage.removeItem('token');
      localStorage.removeItem('firstame');
      localStorage.removeItem('lastname');
      window.location.replace('/login-services-account');
    } else {
      const userSession = localStorage.getItem('token');
      checkCurrentUserScam(userSession);
    }
  }

  showInvitationLink(key) {
    key.preventDefault();
    this.setState({ showReferralLink: true });
  }

  hideInvitationLink(key) {
    key.preventDefault();
    this.setState({ showReferralLink: false });
  }

  fetchReferralLink(key) {
    key.preventDefault();
    const { fetchCurrentReferralLink } = this.props;
    if (!(localStorage.getItem('token'))) {
      localStorage.removeItem('token');
      localStorage.removeItem('firstame');
      localStorage.removeItem('lastname');
      window.location.replace('/login-services-account');
    } else {
      const userSession = localStorage.getItem('token');
      this.showInvitationLink(key);
      fetchCurrentReferralLink(userSession);
    }
  }

  render() {
    const {
      scamLoading,
      scamServerData,
      referralLinkData,
      referralLinkLoading
    } = this.props;
    const { showReferralLink } = this.state;

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
                  <div className="referral">

                    <div><span> <img src={ReferralPrize} alt="clock" className="referral-images" /> Bonus : 25 points </span></div>
                    <div>
                      {
                          showReferralLink === true
                            ? (
                              <div>
                                <div>
                                  <span>
                                    <img src={ReferralConnection} alt="clock" className="referral-images" />
                                    <span className="copy-referral-link" onClick={(key) => { this.hideInvitationLink(key); }}>
                                    copy invitation link
                                    </span>
                                  </span>
                                </div>
                                <div className="referral-panel">
                                  {
                                referralLinkLoading === true
                                  ? (
                                    <div className="panel">
                                      <a href={referralLinkData.data.shareableLink}> {referralLinkData.data.shareableLink} </a>
                                    </div>
                                  )
                                  : referralLinkLoading === false
                                    ? <div className="panel">{referralLinkData.message}</div>
                                    : <div className="panel">Loading ...</div>
                                  }

                                </div>
                              </div>
                            )
                            : (
                              <div>
                                <span>
                                  <img src={ReferralConnection} alt="clock" className="referral-images" />
                                  <span className="copy-referral-link" onClick={(key) => { this.fetchReferralLink(key); }}>
                                    copy invitation link
                                  </span>
                                </span>
                              </div>
                            )
                        }
                    </div>

                  </div>
                )
        }

      </div>
    );
  }
}

Referral.defaultProps = {
  scamLoading: false,
  referralLinkLoading: false,
  scamServerData: {},
  referralLinkData: {},
  checkCurrentUserScam: PropTypes.func,
  fetchCurrentReferralLink: PropTypes.func,
};

Referral.propTypes = {
  scamServerData: PropTypes.shape(),
  referralLinkData: PropTypes.shape(),

  scamLoading: PropTypes.bool,
  referralLinkLoading: PropTypes.bool,

  checkCurrentUserScam: PropTypes.func,
  fetchCurrentReferralLink: PropTypes.func,
};


const mapStateToProps = ({ checkDoctorScamInitialState, fetchReferralLinkInitialState }) => (
  {
    scamLoading: checkDoctorScamInitialState.loading,
    scamServerData: checkDoctorScamInitialState.data,

    referralLinkLoading: fetchReferralLinkInitialState.loading,
    referralLinkData: fetchReferralLinkInitialState.data,

  }
);

const mapDispatchToProps = (dispatch) => (
  {
    checkCurrentUserScam: (userSession) => {
      dispatch(checkDoctorScam(userSession));
    },

    fetchCurrentReferralLink: (userSession) => {
      dispatch(fetchReferralLink(userSession));
    },

  });

export default connect(mapStateToProps, mapDispatchToProps)(Referral);

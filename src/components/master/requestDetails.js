/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import MasterHeader from './masterHeader';
import { validatemptySearchForm } from '../../helpers';
import Dashboard from '../../assets/images/dashboard.png';
import Profile from '../../assets/images/master-profile.jpg';
import { checkMasterScam, masterSendMessage, viewSingleService } from '../../actions';

/**
 * This is RequestDetails class which hold Request Details component.
 */
class RequestDetails extends Component {
  /* Srate Staff */
  constructor() {
    super();
    this.state = {
      messageClass: '',
      message: '',
      result: '',

    };
  }

  componentDidMount() {
    const { checkCurrentMasterScam, history } = this.props;
    const masterSession = localStorage.getItem('masterSessionID');
    if (!(sessionStorage.getItem('viewedService'))) {
      history.push('/master-pending-request');
    }
    checkCurrentMasterScam(masterSession);
    this.viewService();
  }

  handleChange(key) {
    this.setState({
      result: '',
      messageClass: '',
      [key.target.id]: key.target.value,
    });
  }

  viewService() {
    const masterSession = localStorage.getItem('masterSessionID');
    const { viewCurrentSingleService } = this.props;

    const viewedService = sessionStorage.getItem('viewedService');
    const unStringfiedService = JSON.parse(viewedService);
    if (unStringfiedService) {
      viewCurrentSingleService(masterSession, unStringfiedService.data.id);
    }
  }

  sendMessage(key) {
    key.preventDefault();
    const { message } = this.state;
    this.setState({ result: 'Loading ...' });
    const { masterSendCurrentMessage } = this.props;
    const masterSession = localStorage.getItem('masterSessionID');

    const viewedService = sessionStorage.getItem('viewedService');
    const unStringfiedService = JSON.parse(viewedService);
    const { searchFormError, searchFormErrorMessage, messageClass } = validatemptySearchForm(this.state);
    if (searchFormError === 'error') {
      this.setState({ result: searchFormErrorMessage, messageClass });
    }
    if (unStringfiedService && searchFormError === 'Loading...') {
      this.setState({ result: 'Loading ...' });
      masterSendCurrentMessage(masterSession, unStringfiedService.data.id, message);
      this.viewService();
    }
  }

  render() {
    const {
      messageClass,
      message,
      result
    } = this.state;

    const {
      history,
      scamLoading,
      scamServerData,
      LoadingMessage,
      ServerDataMessage,
      viewedsLoading,
      viewedsService
    } = this.props;

    if (viewedsLoading === true) {
      const stringfiedService = JSON.stringify(viewedsService);
      sessionStorage.setItem('viewedService', stringfiedService);
    }

    if (LoadingMessage === true) {
      setTimeout(() => {
        window.location.reload(1);
      }, 1000);
    }

    if (!(sessionStorage.getItem('viewedService'))) {
      history.push('/master-pending-request');
    }

    const viewedService = sessionStorage.getItem('viewedService');
    const unStringfiedService = JSON.parse(viewedService);
    return (
      <div>

        <Helmet>
          <style>{'body { background-color: rgb(0, 110, 110); }'}</style>
        </Helmet>
        {
          scamLoading === false
            ? (
              <div className="master-dashbord-container">
                <div className="master-dashbord">
                  <h2 className="master-scam">{scamServerData.data.data}</h2>
                  <br />
                  <a href="/master-dashbord-login" className="reset-link"> Go with us like master </a>
                </div>
              </div>
            )
            : unStringfiedService
              ? (
                <div>
                  <MasterHeader />
                  <br /><br />
                  <br /><br />
                  <div className="master-dashbord-container">

                    <div className="master-side-menu">
                      <div className="master-profile-detail">
                        <img src={Profile} alt="profile" className="master-profile" />
                        <div className="master-username">
                          <span>{localStorage.getItem('masterName')}</span> Master Dashboard
                          <span><img src={Dashboard} alt="clock" className="master-dashboard-name-icon" /></span>
                        </div>
                      </div>
                      <div className="master-request-status">
                        <div className="master-border" />
                        <a className="master-no-current-status" href="/master-pending-request">Pending Status</a>
                        <div className="master-border" />
                        <a className="master-no-current-status" href="/master-accepted-request">Accepted Status</a>
                        <div className="master-border" />
                        <a className="master-no-current-status" href="/master-rejected-request">Rejected Status</a>
                        <div className="master-border" />
                      </div>

                      <div className="master-report-status">
                        <div className="master-box-status pending-status"> <br /> <span>03</span> <br /> Pending </div>
                        <div className="master-box-status accepted-status"> <br /> <span>11</span> <br /> Accepted </div>
                        <div className="master-box-status rejected-status"> <br /> <span>27</span> <br /> Rejected </div>
                      </div>
                    </div>

                    <div className="master-dashbord">

                      <div className="master-heading">
                        <h1>WELCOME TO THE MASTER DASHBOARD</h1>
                        <span><img src={Dashboard} alt="clock" className="master-dashboard-icon" /></span>
                      </div>

                      <div>
                        <div className="master-request-table-header">{unStringfiedService.data.name}</div>
                        <div className="master-request-containering">
                          <div>
                            <table className="master-request-table">
                              <tbody>
                                <tr>
                                  <th> keys </th>
                                  <th> Values </th>
                                </tr>
                                <tr>
                                  <td className="keys">Status</td>
                                  <td className="values">{unStringfiedService.data.status}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Names</td>
                                  <td className="values">Doctor {unStringfiedService.data.name}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Gender</td>
                                  <td className="values">{unStringfiedService.data.gender}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Specialization</td>
                                  <td className="values">{unStringfiedService.data.specialization}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Treatment</td>
                                  <td className="values">{unStringfiedService.data.treatment}</td>
                                </tr>
                                <tr>
                                  <td className="keys">City</td>
                                  <td className="values">{unStringfiedService.data.city}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Registration Number</td>
                                  <td className="values">{unStringfiedService.data.regnumber}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Registration council</td>
                                  <td className="values">{unStringfiedService.data.regcouncil}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Registration Year</td>
                                  <td className="values">{unStringfiedService.data.regyear}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Degree</td>
                                  <td className="values">{unStringfiedService.data.degree}</td>
                                </tr>
                                <tr>
                                  <td className="keys">College</td>
                                  <td className="values">{unStringfiedService.data.college}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Completion Year</td>
                                  <td className="values">{unStringfiedService.data.completionyear}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Experience</td>
                                  <td className="values">{unStringfiedService.data.experience}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Establishment</td>
                                  <td className="values">{unStringfiedService.data.establishment}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Establishment Name</td>
                                  <td className="values">{unStringfiedService.data.establishmentname}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Establishment City</td>
                                  <td className="values">{unStringfiedService.data.establishmentcity}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Establishment Locality</td>
                                  <td className="values">{unStringfiedService.data.establishmentlocality}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Phone</td>
                                  <td className="values">{unStringfiedService.data.phone}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Email</td>
                                  <td className="values">{unStringfiedService.data.email}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Address Name</td>
                                  <td className="values">{unStringfiedService.data.addressname}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Week Day</td>
                                  <td className="values">{unStringfiedService.data.weekday}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Start Time</td>
                                  <td className="values">{unStringfiedService.data.starttime}</td>
                                </tr>
                                <tr>
                                  <td className="keys">End Time</td>
                                  <td className="values">{unStringfiedService.data.endtime}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Session Time</td>
                                  <td className="values">{unStringfiedService.data.sessiontime}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Consultation Fees</td>
                                  <td className="values">{unStringfiedService.data.consultationfees}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Establishment Location</td>
                                  <td className="values">{unStringfiedService.data.establishmentlocation}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Establishment Hours</td>
                                  <td className="values">{unStringfiedService.data.establishmenthours}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Medical registration Proof Document</td>
                                  <td className="values">
                                    <a href={unStringfiedService.data.medicalregproofdocument} rel="noopener noreferrer" target="_blank">Medical File</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="keys">Identity Proof Document</td>
                                  <td className="values">
                                    <a href={unStringfiedService.data.identityproofdocument} rel="noopener noreferrer" target="_blank">Identity File</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="keys">Service Created</td>
                                  <td className="values">{unStringfiedService.data.createdAt}</td>
                                </tr>
                                <tr>
                                  <td className="keys">Service Updated</td>
                                  <td className="values">{unStringfiedService.data.updatedAt}</td>
                                </tr>

                              </tbody>
                            </table>
                          </div>

                          {
                          unStringfiedService.message.length !== 0
                            ? (
                              <div className="master-view-message">
                                <h2>Masters Message</h2>
                                {
                                  unStringfiedService.message.length !== 0
                                    ? (
                                      unStringfiedService.message.map((messages) => (
                                        <div className="master-message" key={messages.id}>
                                          <div>{messages.senderName}</div>
                                          <div className="master-title-comment">Comment</div>
                                          <div>{messages.message}</div>
                                          <div>Done at {new Date(messages.createdAt).toDateString()} {new Date(messages.createdAt).toLocaleTimeString()}</div>

                                          <br /><br />
                                        </div>
                                      ))
                                    )
                                    : null
                                }
                              </div>
                            )
                            : null
                        }

                          <div className="master-request-form">
                            <textarea
                              id="message"
                              name="message"
                              className={`${messageClass} master-request-message`}
                              placeholder=" Any message!! Please type it here."

                              value={message}
                              onChange={(id) => this.handleChange(id)}
                            />
                            <button
                              type="submit"
                              className="master-request-button"
                              onClick={(key) => { this.sendMessage(key); }}
                            > Send </button>
                            <br />
                            <span className="master-request-message-error">{ServerDataMessage.message || result}</span>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              )
              : history.push('/master-pending-request')
        }

      </div>
    );
  }
}

RequestDetails.defaultProps = {
  scamLoading: false,
  viewedsLoading: false,
  LoadingMessage: false,
  history: {},
  viewedsService: {},
  scamServerData: {},
  ServerDataMessage: {},
  checkCurrentMasterScam: PropTypes.func,
  masterSendCurrentMessage: PropTypes.func,
  viewCurrentSingleService: PropTypes.func,
};

RequestDetails.propTypes = {
  scamLoading: PropTypes.bool,
  viewedsLoading: PropTypes.bool,
  LoadingMessage: PropTypes.bool,
  history: PropTypes.shape(),
  viewedsService: PropTypes.shape(),
  scamServerData: PropTypes.shape(),
  ServerDataMessage: PropTypes.shape(),
  checkCurrentMasterScam: PropTypes.func,
  masterSendCurrentMessage: PropTypes.func,
  viewCurrentSingleService: PropTypes.func,
};

const mapStateToProps = ({ checkMasterScamInitialState, masterSendMessageInitialState, viewSingleServiceInitialState }) => (
  {

    scamLoading: checkMasterScamInitialState.loading,
    scamServerData: checkMasterScamInitialState.data,

    LoadingMessage: masterSendMessageInitialState.loading,
    ServerDataMessage: masterSendMessageInitialState.data,

    viewedsLoading: viewSingleServiceInitialState.loading,
    viewedsService: viewSingleServiceInitialState.data,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    checkCurrentMasterScam: (masterSession) => {
      dispatch(checkMasterScam(masterSession));
    },

    masterSendCurrentMessage: (masterSession, id, message) => {
      dispatch(masterSendMessage(masterSession, id, message));
    },

    viewCurrentSingleService: (masterSession, id) => {
      dispatch(viewSingleService(masterSession, id));
    },

  });

export default connect(mapStateToProps, mapDispatchToProps)(RequestDetails);

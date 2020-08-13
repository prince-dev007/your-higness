/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import MasterHeader from './masterHeader';
import Clock from '../../assets/images/clock.png';
import EyeMark from '../../assets/images/eyemark.png';
import DrProfile from '../../assets/images/profile.png';
import SearchMark from '../../assets/images/search.png';
import Dashboard from '../../assets/images/dashboard.png';
import RejectMark from '../../assets/images/rejectmark.png';
import AcceptMark from '../../assets/images/acceptmark.png';
import Profile from '../../assets/images/master-profile.jpg';
import { validaterrorMasterSearchFields } from '../../helpers/index';
import { checkMasterScam, fetchPendingServices, viewSingleService, approvePendingService, rejectPendingService } from '../../actions';

/**
 * This is PendingRequest class which hold view Pending Request component.
 */
class PendingRequest extends Component {
  /* Srate Staff */
  constructor() {
    super();
    this.state = {
      searchclass: '',
      search: '',
      result: '',
      serverResult: ''

    };
  }

  componentDidMount() {
    const { fetchPendingCurrentServices, checkCurrentMasterScam } = this.props;
    const masterSession = localStorage.getItem('masterSessionID');
    checkCurrentMasterScam(masterSession);
    fetchPendingCurrentServices(masterSession, 1);
  }

  nextPage(data) {
    const masterSession = localStorage.getItem('masterSessionID');
    const { fetchPendingCurrentServices } = this.props;
    fetchPendingCurrentServices(masterSession, data.page);
  }

  previousPage(data) {
    const masterSession = localStorage.getItem('masterSessionID');
    const { fetchPendingCurrentServices } = this.props;
    fetchPendingCurrentServices(masterSession, data.page);
  }

  viewService(key, id) {
    key.preventDefault();
    const { viewCurrentSingleService } = this.props;
    const masterSession = localStorage.getItem('masterSessionID');
    if (masterSession) {
      this.setState({ serverResult: 'Service viewer Loading ...' });
      viewCurrentSingleService(masterSession, id);
    } else {
      this.setState({ result: 'Something wrong occured !! Please refresh page and try again' });
    }
  }

  approveService(key, id) {
    key.preventDefault();
    const status = 'Approved';
    const { approveCurrentPendingService } = this.props;
    const masterSession = localStorage.getItem('masterSessionID');
    if (masterSession) {
      this.setState({ serverResult: 'Service Approver Loading ...' });
      approveCurrentPendingService(masterSession, status, id);
    } else {
      this.setState({ result: 'Something wrong occured !! Please refresh page and try again' });
    }
  }

  rejectService(key, id) {
    key.preventDefault();
    const status = 'Rejected';
    const { rejectCurrentPendingService } = this.props;
    const masterSession = localStorage.getItem('masterSessionID');
    if (masterSession) {
      this.setState({ serverResult: 'Service Rejecter Loading ...' });
      rejectCurrentPendingService(masterSession, status, id);
    } else {
      this.setState({ result: 'Something wrong occured !! Please refresh page and try again' });
    }
  }

  masterSearch(key) {
    key.preventDefault();
    const { errorSearchFields, error, searchclass } = validaterrorMasterSearchFields(this.state);

    if (errorSearchFields === 'error') {
      this.setState({ searchclass, result: error });
    } else if (errorSearchFields === 'Loading...') {
      this.setState({ result: 'Loading...' });
    } else { this.setState({ result: 'Something wrong occured reload page and try again.' }); }
  }

  handleChange(key) {
    // return to a normal class again and update input field state
    this.setState({
      result: '',
      searchclass: '',
      [key.target.id]: key.target.value
    });
  }

  render() {
    const {
      searchclass,
      search,
      result,
      serverResult
    } = this.state;

    const {
      history,
      loading,
      serverData,
      scamLoading,
      scamServerData,
      viewedLoading,
      viewedService,
      approveLoading,
      approveService,
      rejectLoading,
      rejectService
    } = this.props;

    if (approveLoading === true || rejectLoading === true) {
      setTimeout(() => {
        window.location.reload(1);
      }, 1000);
    }

    if (viewedLoading === true) {
      const stringfiedService = JSON.stringify(viewedService);
      sessionStorage.setItem('viewedService', stringfiedService);

      if (sessionStorage.getItem('viewedService')) {
        setTimeout(() => {
          window.open('/master-request-details', '_blank');

          setTimeout(() => {
            window.location.reload(1);
          }, 1000);
        }, 1000);
      }
    }

    if (!(localStorage.getItem('masterSessionID'))) {
      localStorage.removeItem('masterName');
      localStorage.removeItem('masterEmail');
      localStorage.removeItem('masterSessionID');
      localStorage.removeItem('masterLoginMessage');
    }

    return (
      <div>
        {/* Setting background for Login Component */}
        <Helmet>
          <style>{'body { background-color: rgb(0, 110, 110); }'}</style>
        </Helmet>
        {

          localStorage.getItem('masterSessionID')
            ? scamLoading === false
            && loading === true
              ? (
                <div className="master-dashbord-container">
                  <div className="master-dashbord">
                    <h2 className="master-scam">{scamServerData.data.data}</h2>
                    <br />
                    <a href="/master-dashbord-login" className="reset-link"> Go with us like master </a>
                  </div>
                </div>
              )
              : scamLoading === false
              && loading === false
                ? (
                  <div className="master-dashbord-container">
                    <div className="master-dashbord">
                      <h2 className="master-scam">{scamServerData.data.data}</h2>
                      <br />
                      <a href="/master-dashbord-login" className="reset-link"> Go with us like master </a>
                    </div>
                  </div>
                )
                : scamLoading === true
                && loading === true
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
                            <a className="master-current-status" href="/master-pending-request">Pending Status</a>
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

                          <div className="master-dashbord-request">
                            <h3>PENDING REQUEST</h3>
                            <img src={SearchMark} alt="search" className="search-button" onClick={(key) => { this.masterSearch(key); }} />
                            <input type="text" id="search" value={search} className={searchclass} placeholder="search ..." onChange={(id) => this.handleChange(id)} />
                            <br /><br />
                            <span className="search-result">{result}</span>
                            <div className="master-title-border" />

                            <div>
                              {
                            serverData.message
                              && serverData.data.paginate
                              ? <div>Server Message: {serverData.message}</div>
                              : null
                            }
                              <br />
                              {
                            approveService.data
                              ? <div>Server Message: {approveService.data}</div>
                              : rejectService.data
                                ? <div>Server Message: {rejectService.data}</div>
                                : serverResult
                            }
                            </div>

                            <br /><br />
                            <ul>

                              {
                              serverData.data.paginate
                                ? (
                                  serverData.data.paginate.map((service) => (
                                    <div key={service.id}>
                                      <li>
                                        <img src={DrProfile} alt="Dr. profile" />
                                        <p>
                                          <span className="span Dr-username">id: {service.id}</span>
                                          <span className="span Dr-username">Doctor {service.name}</span>
                                          <span><img src={Clock} alt="clock" /></span>
                                          <span className="span">{new Date(service.createdAt).toDateString()} {new Date(service.createdAt).toLocaleTimeString()}</span>
                                          <span className="span">{service.status} ● ● ●</span>
                                          <button
                                            type="submit"
                                            className="reject-request"
                                            onClick={(key) => { this.rejectService(key, service.id); }}
                                          ><img src={RejectMark} alt="rejectmark" /> Reject </button>

                                          <button
                                            type="submit"
                                            className="accept-request"
                                            onClick={(key) => { this.approveService(key, service.id); }}
                                          ><img src={AcceptMark} alt="acceptmark" /> Accept </button>

                                          <button
                                            type="submit"
                                            className="view-request"
                                            onClick={(key) => { this.viewService(key, service.id); }}
                                          > <img className="request-mark" src={EyeMark} alt="eyemark" /> View </button>

                                        </p>
                                      </li>

                                      <div className="master-dashbord-border" />
                                    </div>
                                  )))
                                : <div>Please Contact Tech Team</div>
                            }

                            </ul>
                          </div>

                          <div className="master-dashbord-pagination">
                            {
                            serverData.data.paginate
                              ? (
                                <div className="master-dashbord-pagination">
                                  {
                                    serverData.data.Previous
                                      ? (
                                        <FontAwesomeIcon
                                          icon={faAngleLeft}
                                          className="pagination-angles"
                                          style={{ color: '#01352c' }}
                                          onClick={() => { this.previousPage(serverData.data.Previous); }}
                                        />
                                      )
                                      : (
                                        <FontAwesomeIcon icon={faAngleLeft} className="pagination-angles" style={{ color: '#808080' }} />
                                      )
                                  }
                                  {
                                    serverData.data.Next
                                      ? (<span className="pagination-page">{`0 ${serverData.data.Next.page - 1}`}</span>)
                                      : serverData.data.Previous
                                        ? (<span className="pagination-page">{`0 ${serverData.data.Previous.page + 1}`}</span>)
                                        : (<span className="pagination-page">01</span>)
                                  }
                                  {
                                    serverData.data.Next
                                      ? (
                                        <FontAwesomeIcon
                                          icon={faAngleRight}
                                          className="pagination-angles"
                                          style={{ color: '#01352c' }}
                                          onClick={() => { this.nextPage(serverData.data.Next); }}
                                        />
                                      )
                                      : (
                                        <FontAwesomeIcon icon={faAngleRight} className="pagination-angles" style={{ color: '#808080' }} />
                                      )
                                  }

                                </div>
                              )
                              : (<div className="master-login-form-error ">{' '}</div>)
                          }
                          </div>

                        </div>
                      </div>
                    </div>
                  )
                  : scamLoading === true
                  && loading === false
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
                              <a className="master-current-status" href="/master-pending-request">Pending Status</a>
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
                              <br /><br /><br />
                              {
                            serverData.data
                              ? <h1>{serverData.data.data || serverData.data.message}</h1>
                              : <h1> Please Contact Tech Team</h1>
                          }
                            </div>
                          </div>

                        </div>
                      </div>
                    )
                    : null

            : history.push('/master-dashbord-login')
        }

      </div>
    );
  }
}

PendingRequest.defaultProps = {
  loading: false,
  scamLoading: false,
  rejectLoading: false,
  approveLoading: false,
  viewedLoading: false,
  history: {},
  serverData: {},
  viewedService: {},
  rejectService: {},
  approveService: {},
  scamServerData: {},
  checkCurrentMasterScam: PropTypes.func,
  viewCurrentSingleService: PropTypes.func,
  fetchPendingCurrentServices: PropTypes.func,
  rejectCurrentPendingService: PropTypes.func,
  approveCurrentPendingService: PropTypes.func,
};

PendingRequest.propTypes = {
  loading: PropTypes.bool,
  scamLoading: PropTypes.bool,
  rejectLoading: PropTypes.bool,
  viewedLoading: PropTypes.bool,
  approveLoading: PropTypes.bool,
  history: PropTypes.shape(),
  serverData: PropTypes.shape(),
  viewedService: PropTypes.shape(),
  scamServerData: PropTypes.shape(),
  approveService: PropTypes.shape(),
  rejectService: PropTypes.shape(),
  checkCurrentMasterScam: PropTypes.func,
  viewCurrentSingleService: PropTypes.func,
  fetchPendingCurrentServices: PropTypes.func,
  rejectCurrentPendingService: PropTypes.func,
  approveCurrentPendingService: PropTypes.func,
};

const mapStateToProps = ({
  checkMasterScamInitialState,
  viewSingleServiceInitialState,
  fetchPendingServicesInitialState,
  rejectPendingServiceInitialState,
  approvePendingServiceInitialState,
}) => (
  {
    loading: fetchPendingServicesInitialState.loading,
    serverData: fetchPendingServicesInitialState.data,

    scamLoading: checkMasterScamInitialState.loading,
    scamServerData: checkMasterScamInitialState.data,

    viewedLoading: viewSingleServiceInitialState.loading,
    viewedService: viewSingleServiceInitialState.data,

    approveLoading: approvePendingServiceInitialState.loading,
    approveService: approvePendingServiceInitialState.data,

    rejectLoading: rejectPendingServiceInitialState.loading,
    rejectService: rejectPendingServiceInitialState.data,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    checkCurrentMasterScam: (masterSession) => {
      dispatch(checkMasterScam(masterSession));
    },

    fetchPendingCurrentServices: (masterSession, page) => {
      dispatch(fetchPendingServices(masterSession, page));
    },

    viewCurrentSingleService: (masterSession, id) => {
      dispatch(viewSingleService(masterSession, id));
    },

    approveCurrentPendingService: (masterSession, actionStatus, id) => {
      dispatch(approvePendingService(masterSession, actionStatus, id));
    },

    rejectCurrentPendingService: (masterSession, actionStatus, id) => {
      dispatch(rejectPendingService(masterSession, actionStatus, id));
    },

  });

export default connect(mapStateToProps, mapDispatchToProps)(PendingRequest);

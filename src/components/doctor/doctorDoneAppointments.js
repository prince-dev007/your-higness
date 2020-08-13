/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
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

import HeaderMenu from '../common/headerMenu';
import Clock from '../../assets/images/clock.png';
import EyeMark from '../../assets/images/eyemark.png';
import Picture from '../../assets/images/profile.png';
import ChatIcon from '../../assets/images/chatIcon.png';
import SearchMark from '../../assets/images/search.png';
import CalenarIcon from '../../assets/images/CalenarIcon.png';
import { validaterrorMasterSearchFields } from '../../helpers/index';
import {
  checkDoctorScam,
  doctorFetchDoneAppointment,
  doctorViewSingleAppointment,
} from '../../actions';


/**
 * This is DoctorDoneAppointment class which hold Doctor view Done Appointment component.
 */
class DoctorDoneAppointment extends Component {
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
    const { history, doctorFetchCurrentDoneAppointment, checkCurrentDoctorScam } = this.props;
    if (!(localStorage.getItem('token'))) {
      localStorage.removeItem('token');
      localStorage.removeItem('firstame');
      localStorage.removeItem('lastname');
      history.push('/login-user-account');
    }
    const doctorSession = localStorage.getItem('token');
    checkCurrentDoctorScam(doctorSession);
    doctorFetchCurrentDoneAppointment(doctorSession, 1);
  }

  viewAppointment(key, id) {
    key.preventDefault();
    const { doctorViewCurrentSingleAppointment } = this.props;
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({ serverResult: 'Appointment viewer Loading ...' });
      doctorViewCurrentSingleAppointment(token, id);
    } else {
      this.setState({ result: 'Something wrong occured !! Please refresh page and try again' });
    }
  }

  nextPage(data) {
    const { doctorFetchCurrentDoneAppointment } = this.props;
    const doctorSession = localStorage.getItem('token');
    doctorFetchCurrentDoneAppointment(doctorSession, data.page);
  }

  previousPage(data) {
    const { doctorFetchCurrentDoneAppointment } = this.props;
    const doctorSession = localStorage.getItem('token');
    doctorFetchCurrentDoneAppointment(doctorSession, data.page);
  }

  search(key) {
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

  viewChatBoard() {
    sessionStorage.clear();
    setTimeout(() => {
      window.open('/chat-board', '_blank');
    }, 500);
  }

  render() {
    const {
      searchclass,
      search,
      result,
    } = this.state;

    const {
      history,
      loading,
      serverData,
      scamLoading,
      scamServerData,
      viewedLoading,
      viewedAppointment,
    } = this.props;

    if (viewedLoading === true) {
      const getViewedAppointment = JSON.stringify(viewedAppointment);
      sessionStorage.setItem('viewedAppointment', getViewedAppointment);

      if (sessionStorage.getItem('viewedAppointment')) {
        setTimeout(() => {
          window.open('/doctor-appointment-details', '_blank');
          setTimeout(() => {
            window.location.reload(1);
          }, 1000);
        }, 1000);
      }
    }


    return (
      <div>
        {/* Setting background for Login Component */}
        <Helmet>
          <style>{'body { background-color: rgb(204, 204, 204); }'}</style>
        </Helmet>
        {
          scamLoading === false
            ? (
              <div className="doctor-dashbord-container">
                <div className="doctor-dashbord">
                  <h2 className="doctor-scam">{scamServerData.data.data}</h2>
                  <br />
                  <a href="/login-user-account" className="reset-link"> Go with us like Doctor </a>
                </div>
              </div>
            )
            : localStorage.getItem('token')
              ? (
                loading === true
                  ? (
                    <div className="doctor-dashbord-container">

                      <HeaderMenu sendProps={this.props} />

                      <div className="doctor-side-menu">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="doctor-request-status">
                          <a className="doctor-no-current-status" href="/doctor-accepted-appointments">Upcoming Appointments</a>
                          <div className="doctor-border" />
                          <a className="doctor-no-current-status" href="/doctor-shifted-appointments">Shifted Appointments</a>
                          <div className="doctor-border" />
                          <a className="doctor-no-current-status" href="/doctor-pending-appointments">Pending Appointments</a>
                          <div className="doctor-border" />
                          <a className="doctor-nno-current-status" href="/doctor-rejected-appointments">Rejected Appointments</a>
                          <div className="doctor-border" />
                          <a className="doctor-current-status" href="/doctor-done-appointments">Past Held Appointments</a>
                          <div className="doctor-border" />
                          <a
                            className="doctor-no-current-status"
                          >
                              Calendar <span> <img src={CalenarIcon} alt="CalenarIcon" /> </span>
                          </a>
                          <div className="doctor-border" />
                          <a
                            className="doctor-no-current-status"
                            onClick={() => { this.viewChatBoard(); }}
                          >
                            <span> <img src={ChatIcon} alt="ChatIcon" /> </span>Chats Board
                          </a>
                          <div className="doctor-border" />
                        </div>

                        <div className="doctor-report-status">
                          <div className="doctor-box-status pending-status"> <br /> <span>03</span> <br /> Pending </div>
                          <div className="doctor-box-status accepted-status"> <br /> <span>11</span> <br /> completed </div>
                          <div className="doctor-box-status rejected-status"> <br /> <span>27</span> <br /> Rejected </div>
                        </div>
                      </div>

                      <div className="doctor-dashbord">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />


                        <div className="doctor-heading">
                          <h1>WELCOME TO THE DOCTOR DASHBOARD</h1>
                        </div>

                        <div className="doctor-dashbord-request">
                          <h3>PAST HELD APPOINTMENTS</h3>
                          <img src={SearchMark} alt="search" className="search-button" onClick={(key) => { this.search(key); }} />
                          <input type="text" id="search" value={search} className={searchclass} placeholder="search ..." onChange={(id) => this.handleChange(id)} />
                          <br /><br />
                          <span className="search-result">{result}</span>
                          <div className="doctor-title-border" />

                          <div className="server-message">
                            {
                              serverData.message
                              && serverData.data.paginate
                                ? <div>Server Message: {serverData.message}</div>
                                : null
                            }
                            <br />
                          </div>

                          <br /><br />

                          <ul>

                            {
                              serverData.data.paginate
                                ? (
                                  serverData.data.paginate.map((appointment) => (
                                    <div key={appointment.id}>
                                      <li>
                                        <img src={Picture} alt="Dr. profile" />
                                        <p>
                                          <span className="span Dr-username">{appointment.owner} | Pet: {appointment.petType}</span>
                                          <span className="span">{appointment.visitType}</span>
                                          <span><img src={Clock} alt="clock" /></span>
                                          <span className="span clock">{appointment.appointmentDate} ( {appointment.appointmentStartTime} - {appointment.appointmentEndTime} ) [ {appointment.appointmentSessionTime} ] </span>

                                          <button
                                            type="submit"
                                            className="view-request"
                                            onClick={(key) => { this.viewAppointment(key, appointment.id); }}
                                          > <img className="request-mark" src={EyeMark} alt="eyemark" /> View </button>

                                        </p>
                                      </li>

                                      <div className="doctor-dashbord-border" />
                                    </div>
                                  )))
                                : <div>Please Contact Tech Team</div>
                            }

                          </ul>

                        </div>

                        <div className="doctor-dashbord-pagination">
                          {
                            serverData.data.paginate
                              ? (
                                <div className="doctor-dashbord-pagination">
                                  {
                                    serverData.data.Previous
                                      ? (
                                        <FontAwesomeIcon
                                          icon={faAngleLeft}
                                          className="pagination-angles"
                                          style={{ color: '#007c7c' }}
                                          onClick={() => { this.previousPage(serverData.data.Previous); }}
                                        />
                                      )
                                      : (
                                        <FontAwesomeIcon icon={faAngleLeft} className="pagination-angles" style={{ color: '#6d6868' }} />
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
                                          style={{ color: '#007c7c' }}
                                          onClick={() => { this.nextPage(serverData.data.Next); }}
                                        />
                                      )
                                      : (
                                        <FontAwesomeIcon icon={faAngleRight} className="pagination-angles" style={{ color: '#6d6868' }} />
                                      )
                                  }

                                </div>
                              )
                              : (<div className="doctor-login-form-error ">{' '}</div>)
                          }
                        </div>

                      </div>
                    </div>
                  )
                  : loading === false
                    ? (
                      <div className="doctor-dashbord-container">

                        <HeaderMenu sendProps={this.props} />

                        <div className="doctor-side-menu">
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <div className="doctor-request-status">
                            <a className="doctor-no-current-status" href="/doctor-accepted-appointments">Upcoming Appointments</a>
                            <div className="doctor-border" />
                            <a className="doctor-no-current-status" href="/doctor-shifted-appointments">Shifted Appointments</a>
                            <div className="doctor-border" />
                            <a className="doctor-no-current-status" href="/doctor-pending-appointments">Pending Appointments</a>
                            <div className="doctor-border" />
                            <a className="doctor-nno-current-status" href="/doctor-rejected-appointments">Rejected Appointments</a>
                            <div className="doctor-border" />
                            <a className="doctor-current-status" href="/doctor-done-appointments">Past Held Appointments</a>
                            <div className="doctor-border" />
                            <a
                              className="doctor-no-current-status"
                            >
                              Calendar <span> <img src={CalenarIcon} alt="CalenarIcon" /> </span>
                            </a>
                            <div className="doctor-border" />
                            <a
                              className="doctor-no-current-status"
                              onClick={() => { this.viewChatBoard(); }}
                            >
                              <span> <img src={ChatIcon} alt="ChatIcon" /> </span>Chats Board
                            </a>
                            <div className="doctor-border" />
                          </div>

                          <div className="doctor-report-status">
                            <div className="doctor-box-status pending-status"> <br /> <span>03</span> <br /> Pending </div>
                            <div className="doctor-box-status accepted-status"> <br /> <span>11</span> <br /> completed </div>
                            <div className="doctor-box-status rejected-status"> <br /> <span>27</span> <br /> Rejected </div>
                          </div>
                        </div>

                        <div className="doctor-dashbord">
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />

                          <div className="doctor-heading">
                            <h1>WELCOME TO THE DOCTOR DASHBOARD</h1>

                            <div className="server-message">
                              {
                              serverData.data
                                ? <h1>{serverData.data.data || serverData.data.message}</h1>
                                : <h1>Please Contact Tech Team</h1>
                            }
                            </div>
                          </div>
                        </div>

                      </div>
                    )
                    : null
              )
              : history.push('/login-user-account')
        }


      </div>
    );
  }
}

DoctorDoneAppointment.defaultProps = {
  viewedLoading: false,
  viewedAppointment: {},
  doctorViewCurrentSingleAppointment: PropTypes.func,

  loading: false,
  scamLoading: false,
  history: {},
  serverData: {},
  scamServerData: {},
  checkCurrentDoctorScam: PropTypes.func,
  doctorFetchCurrentDoneAppointment: PropTypes.func,
};

DoctorDoneAppointment.propTypes = {
  viewedLoading: PropTypes.bool,
  viewedAppointment: PropTypes.shape(),
  doctorViewCurrentSingleAppointment: PropTypes.func,

  loading: PropTypes.bool,
  scamLoading: PropTypes.bool,
  history: PropTypes.shape(),
  serverData: PropTypes.shape(),
  scamServerData: PropTypes.shape(),
  checkCurrentDoctorScam: PropTypes.func,
  doctorFetchCurrentDoneAppointment: PropTypes.func,
};

const mapStateToProps = ({
  checkDoctorScamInitialState,
  doctorViewSingleAppointmentInitialState,
  doctorFetchDoneAppointmentInitialState,
}) => (
  {
    loading: doctorFetchDoneAppointmentInitialState.loading,
    serverData: doctorFetchDoneAppointmentInitialState.data,

    scamLoading: checkDoctorScamInitialState.loading,
    scamServerData: checkDoctorScamInitialState.data,

    viewedLoading: doctorViewSingleAppointmentInitialState.loading,
    viewedAppointment: doctorViewSingleAppointmentInitialState.data,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    checkCurrentDoctorScam: (masterSession) => {
      dispatch(checkDoctorScam(masterSession));
    },

    doctorFetchCurrentDoneAppointment: (doctorSession, page) => {
      dispatch(doctorFetchDoneAppointment(doctorSession, page));
    },

    doctorViewCurrentSingleAppointment: (doctorSession, id) => {
      dispatch(doctorViewSingleAppointment(doctorSession, id));
    },

  });

export default connect(mapStateToProps, mapDispatchToProps)(DoctorDoneAppointment);

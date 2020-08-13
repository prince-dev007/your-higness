/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import HeaderMenu from '../common/headerMenu';
import pdf from '../../assets/images/pdf.png';
import { validateShiftFrom } from '../../helpers';
import ChatIcon from '../../assets/images/chatIcon.png';
import ShiftIcon from '../../assets/images/shiftIcon.png';
import RejectMark from '../../assets/images/rejectmark.png';
import AcceptMark from '../../assets/images/acceptmark.png';
import CalenarIcon from '../../assets/images/CalenarIcon.png';
import BlueChatIcon from '../../assets/images/blueChatIcon.png';
import {
  checkDoctorScam,
  shiftAppointment,
  viewChatsMeesages,
  doctorViewSingleAppointment,
  doctorDoneAcceptedAppointment,
  doctorRejectPendingAppointment,
  doctorApprovePendingAppointment,
} from '../../actions';


/**
 * This is AppointmentDetails class which hold Appointment Details component.
 */
class AppointmentDetails extends Component {
  /* Srate Staff */
  constructor() {
    super();
    this.state = {

      messageClass: '',
      reasonClass: '',
      visittypeClass: '',
      shiftdateClass: '',
      sessiontimeClass: '',
      shiftstarttimeClass: '',

      treatmentDocument: '',
      serverResult: '',
      shiftForm: false,
      actionResult: '',
      message: '',
      result: '',

      shiftResult: '',
      reason: '',
      visitType: '',
      appointmentDate: '',
      appointmentStartTime: '',
      appointmentSessionTime: '',

      doneResult: '',
      rejectResult: '',
      approveResult: '',
      showDoneStatus: false,
      showRejctStatus: false,
      showApproveStatus: false,

    };
  }

  componentDidMount() {
    const { checkCurrentDoctorScam, history } = this.props;
    const token = localStorage.getItem('token');
    if (!(localStorage.getItem('token'))) {
      localStorage.removeItem('token');
      localStorage.removeItem('firstame');
      localStorage.removeItem('lastname');
      history.push('/login-user-account');
    }
    checkCurrentDoctorScam(token);
    this.viewAppointment();
  }

  handleChange(key) {
    this.setState({
      result: '',
      messageClass: '',

      reasonClass: '',
      visittypeClass: '',
      shiftdateClass: '',
      sessiontimeClass: '',
      shiftstarttimeClass: '',

      [key.target.id]: key.target.value,
    });

    if (key.target.files) {
      this.setState({ [key.target.id]: key.target.files[0] });
    }
  }

  viewAppointment() {
    const { doctorViewCurrentSingleAppointment } = this.props;
    const token = localStorage.getItem('token');

    const getViewedAppointment = sessionStorage.getItem('viewedAppointment');
    const unStringfiedAppointment = JSON.parse(getViewedAppointment);

    if (token) {
      if (unStringfiedAppointment) {
        this.setState({ serverResult: 'Appointment viewer Loading ...' });
        doctorViewCurrentSingleAppointment(token, unStringfiedAppointment.data.id);
      }
    } else {
      this.setState({ result: 'Something wrong occured !! Please refresh page and try again' });
    }
  }

  showShiftForm(key) {
    key.preventDefault();
    this.setState({ shiftForm: true });
  }

  hideShiftForm(key) {
    key.preventDefault();
    this.setState({ shiftForm: false });
  }

  shiftAppointment(key) {
    key.preventDefault();
    const token = localStorage.getItem('token');
    const { shiftCurrentAppointment } = this.props;
    const { errorShiftForm, emptyShiftForm, reasonClass, visittypeClass, shiftdateClass, sessiontimeClass, shiftstarttimeClass } = validateShiftFrom(this.state);
    if (emptyShiftForm === 'error') {
      this.setState({ shiftResult: errorShiftForm, reasonClass, visittypeClass, shiftdateClass, sessiontimeClass, shiftstarttimeClass });
    } if (emptyShiftForm === 'Loading...') {
      const getViewedAppointment = sessionStorage.getItem('viewedAppointment');
      const unStringfiedAppointment = JSON.parse(getViewedAppointment);

      this.setState({ shiftResult: emptyShiftForm });
      shiftCurrentAppointment(token, unStringfiedAppointment.data.id, this.state);
    }
  }

  approveAppointment(key, id) {
    key.preventDefault();
    const { doctorApproveCurrentPendingAppointment } = this.props;
    const doctorSession = localStorage.getItem('token');
    if (doctorSession) {
      this.setState({ showApproveStatus: true, showRejctStatus: false, showDoneStatus: false, approveResult: 'Appointment Approver Loading ...' });
      doctorApproveCurrentPendingAppointment(doctorSession, id);
    } else {
      this.setState({ result: 'Something wrong occured !! Please refresh page and try again' });
    }
  }

  rejectAppointment(key, id) {
    key.preventDefault();
    const { doctorRejectCurrentPendingAppointment } = this.props;
    const doctorSession = localStorage.getItem('token');
    if (doctorSession) {
      this.setState({ showRejctStatus: true, showApproveStatus: false, showDoneStatus: false, rejectResult: 'Appointment Rejecter Loading ...' });
      doctorRejectCurrentPendingAppointment(doctorSession, id);
    } else {
      this.setState({ result: 'Something wrong occured !! Please refresh page and try again' });
    }
  }

  doneAppointment(key, id) {
    key.preventDefault();
    const { doctorDoneCurrentAcceptedAppointment } = this.props;
    const doctorSession = localStorage.getItem('token');
    if (doctorSession) {
      this.setState({ showDoneStatus: true, showRejctStatus: false, showApproveStatus: false, doneResult: 'Appointment Done Loading ...' });
      doctorDoneCurrentAcceptedAppointment(doctorSession, id);
    } else {
      this.setState({ result: 'Something wrong occured !! Please refresh page and try again' });
    }
  }

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
    sessionStorage.setItem('activeChatUserName', senderName);
    sessionStorage.setItem('activeChatUserId', senderId);

    viewCurrentChatsMeesages(token, senderId, receiverId);
  }

  viewChatBoard() {
    sessionStorage.clear();
    setTimeout(() => {
      window.open('/chat-board', '_blank');
    }, 500);
  }

  render() {
    const {
      treatmentDocument,
      messageClass,
      reasonClass,
      visittypeClass,
      shiftdateClass,
      sessiontimeClass,
      shiftstarttimeClass,
      serverResult,
      actionResult,
      shiftForm,
      message,
      result,

      shiftResult,
      reason,
      visitType,
      appointmentDate,
      appointmentStartTime,
      appointmentSessionTime,

      doneResult,
      rejectResult,
      approveResult,
      showDoneStatus,
      showRejctStatus,
      showApproveStatus,
    } = this.state;

    const {
      history,
      scamLoading,
      scamServerData,
      LoadingMessage,
      viewedLoading,
      viewedAppointment,
      shiftLoading,
      shiftAppointment,
      doneLoading,
      doneAppintment,
      approveLoading,
      approveAppointment,
      rejectLoading,
      rejectAppointment,
      viewMessagesLoading,
      viewMessagesData,
    } = this.props;

    if (viewedLoading === true) {
      const getViewedAppointment = JSON.stringify(viewedAppointment);
      sessionStorage.setItem('viewedAppointment', getViewedAppointment);
    }

    if (shiftLoading === true) {
      toast.info(`${shiftAppointment.data}  )):`);

      setTimeout(() => {
        window.location.reload(1);
      }, 4500);
    }

    if (approveLoading === true) {
      toast.success(`${approveAppointment.data}  )):`);

      setTimeout(() => {
        window.location.reload(1);
      }, 4500);
    }

    if (rejectLoading === true) {
      toast.error(`${rejectAppointment.data}  )):`);

      setTimeout(() => {
        window.location.reload(1);
      }, 4500);
    }

    if (doneLoading === true) {
      toast.warning(`${doneAppintment.data}  )):`);

      setTimeout(() => {
        window.location.reload(1);
      }, 4500);
    }

    if (LoadingMessage === true) {
      setTimeout(() => {
        window.location.reload(1);
      }, 1000);
    }

    if (viewMessagesLoading === true) {
      const getviewMessagesLoading = JSON.stringify(viewMessagesLoading);
      sessionStorage.setItem('viewedMessagesLoading', getviewMessagesLoading);

      const getviewMessagesData = JSON.stringify(viewMessagesData);
      sessionStorage.setItem('viewedChatsMessagesData', getviewMessagesData);

      if (sessionStorage.getItem('viewedChatsMessagesData') && sessionStorage.getItem('viewedMessagesLoading')) {
        setTimeout(() => {
          window.open('/chat-board', '_blank');
        }, 1000);
      }
    }

    if (!(sessionStorage.getItem('viewedAppointment'))) {
      history.push('/doctor-pending-appointments');
    }

    const getViewedAppointment = sessionStorage.getItem('viewedAppointment');
    const unStringfiedAppointment = JSON.parse(getViewedAppointment);

    let treatmentDocumentPreview;
    let treatmentDocumentPreviewImg;

    if (treatmentDocument) {
      if (treatmentDocument.name) {
        treatmentDocumentPreview = treatmentDocument.name;
        const getDocName = treatmentDocument.name;
        const docLength = getDocName.length;
        const point = getDocName.lastIndexOf('.');
        const getExtensionFile = getDocName.substring(point, docLength);
        const lowCaseExtensionFile = getExtensionFile.toLowerCase();
        if (lowCaseExtensionFile === '.jpg' || lowCaseExtensionFile === '.png') {
          treatmentDocumentPreviewImg = URL.createObjectURL(treatmentDocument);
        }
        if (lowCaseExtensionFile === '.pdf') {
          treatmentDocumentPreviewImg = pdf;
        }
      }
    }

    return (
      <div>

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
                  <a href="/master-dashbord-login" className="reset-link"> Go with us like Doctor </a>
                </div>
              </div>
            )
            : unStringfiedAppointment
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
                      <a className="doctor-no-current-status" href="/doctor-rejected-appointments">Rejected Appointments</a>
                      <div className="doctor-border" />
                      <a className="doctor-no-current-status" href="/doctor-done-appointments">Past Held Appointments</a>
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

                    <div>

                      <ToastContainer />

                      <span className="appointment-details-server-response">
                        {
                          showRejctStatus === true
                            ? (
                              rejectAppointment.data
                                ? <div>Server Message: {rejectAppointment.data}</div>
                                : rejectResult
                            )
                            : null

                        }
                        {
                          showApproveStatus === true
                            ? (
                              approveAppointment.data
                                ? <div>Server Message: {approveAppointment.data}</div>
                                : approveResult
                            )
                            : null
                        }
                        {
                          showDoneStatus === true
                            ? (
                              doneAppintment.data
                                ? <div>Server Message: {doneAppintment.data}</div>
                                : doneResult
                            )
                            : null

                            }
                      </span>

                      <div className="doctor-request-header">

                        {
                          unStringfiedAppointment.data.status === 'Shifted'
                            ? (
                              <div>

                                <button
                                  type="submit"
                                  className="reject-request"
                                  onClick={(key) => { this.rejectAppointment(key, unStringfiedAppointment.data.id); }}
                                ><img src={RejectMark} alt="rejectmark" /> Reject </button>

                                <button
                                  type="submit"
                                  className="accept-request"
                                  onClick={(key) => { this.approveAppointment(key, unStringfiedAppointment.data.id); }}
                                ><img src={AcceptMark} alt="acceptmark" /> Accept </button>

                                <button
                                  type="submit"
                                  className="shift-request"
                                  onClick={(key) => { this.showShiftForm(key); }}
                                ><img src={ShiftIcon} alt="shiftmark" /> Shift </button>

                                <div className="appointment-status">The Appointment is now {unStringfiedAppointment.data.status}  </div>

                              </div>
                            )

                            : unStringfiedAppointment.data.status === 'Pending'
                              ? (
                                <div>

                                  <button
                                    type="submit"
                                    className="reject-request"
                                    onClick={(key) => { this.rejectAppointment(key, unStringfiedAppointment.data.id); }}
                                  ><img src={RejectMark} alt="rejectmark" /> Reject </button>

                                  <button
                                    type="submit"
                                    className="accept-request"
                                    onClick={(key) => { this.approveAppointment(key, unStringfiedAppointment.data.id); }}
                                  ><img src={AcceptMark} alt="acceptmark" /> Accept </button>

                                  <button
                                    type="submit"
                                    className="shift-request"
                                    onClick={(key) => { this.showShiftForm(key); }}
                                  ><img src={ShiftIcon} alt="shiftmark" /> Shift </button>

                                  <div className="appointment-status">The Appointment is now {unStringfiedAppointment.data.status}  </div>
                                </div>
                              )

                              : unStringfiedAppointment.data.status === 'Approved'
                                ? (
                                  <div>

                                    <button
                                      type="submit"
                                      className="done-request"
                                      onClick={(key) => { this.doneAppointment(key, unStringfiedAppointment.data.id); }}
                                    ><img src={AcceptMark} alt="acceptmark" /> Done </button>

                                    <button
                                      type="submit"
                                      className="shift-request"
                                      onClick={(key) => { this.showShiftForm(key); }}
                                    ><img src={ShiftIcon} alt="shifttmark" /> Shift </button>

                                    <div className="appointment-status">The Appointment is  {unStringfiedAppointment.data.status}  </div>
                                  </div>
                                )

                                : <div className="appointment-status">The Appointment is  {unStringfiedAppointment.data.status}  </div>

                        }

                      </div>

                      <div className="doctor-request-containering">

                        <div className="doctor-sections">

                          <div className="doctor-left-section">
                            <div><span>Approver : </span> {unStringfiedAppointment.data.approverName} </div>
                            <div><span>Doctor : </span> {unStringfiedAppointment.data.doctorName} </div>
                            <div><span>Status : </span> {unStringfiedAppointment.data.status} </div>
                            <div><span>Pet type : </span> {unStringfiedAppointment.data.petType} </div>
                            <div><span>Pet Name : </span> {unStringfiedAppointment.data.petName}</div>
                            <div><span>Pet Gender : </span> {unStringfiedAppointment.data.petGender}  </div>
                            <div><span>Pet DOB : </span> {unStringfiedAppointment.data.petDOB} </div>
                            <div><span>Pet Breed : </span> {unStringfiedAppointment.data.petBreed} </div>
                            <div><span>Pet Health Record : <a href={unStringfiedAppointment.data.petHealthRecord} rel="noopener noreferrer" target="_blank">Record document</a></span></div>
                            <div><span> Pet Health Record :
                              {
                              unStringfiedAppointment.data.petHealthRecord !== null
                                ? <a href={unStringfiedAppointment.data.petHealthRecord} rel="noopener noreferrer" target="_blank">Record document</a>
                                : <a href="">No record document</a>
                              }
                            </span></div>
                          </div>

                          <div className="doctor-right-section">
                            <div><span>Owner : </span> {unStringfiedAppointment.data.owner} </div>
                            <div><span>Visit Type : </span> {unStringfiedAppointment.data.visitType} </div>
                            <div><span>Session Date : </span> {unStringfiedAppointment.data.appointmentDate} </div>
                            <div><span>Session Time : </span> {unStringfiedAppointment.data.appointmentSessionTime} </div>
                            <div><span>Session Start : </span> {unStringfiedAppointment.data.appointmentStartTime} </div>
                            <div><span>Session End : </span> {unStringfiedAppointment.data.appointmentEndTime} </div>
                            <div><span>Location : </span> {unStringfiedAppointment.data.location} </div>
                            <div><span>Created At : </span> {new Date(unStringfiedAppointment.data.createdAt).toDateString()} {new Date(unStringfiedAppointment.data.createdAt).toLocaleTimeString()} </div>
                            <div><span>Updated At : </span> {new Date(unStringfiedAppointment.data.updatedAt).toDateString()} {new Date(unStringfiedAppointment.data.updatedAt).toLocaleTimeString()} </div>
                          </div>

                        </div>

                        <div>
                          {
                            shiftForm === true
                              ? (
                                <div>

                                  <Helmet>
                                    <style>{'body { background-color: rgb(165, 165, 165); }'}</style>
                                  </Helmet>

                                  <div className="shift-panel">
                                    <div onClick={(key) => { this.hideShiftForm(key); }}><img src={RejectMark} alt="rejectmark" /></div>

                                    <h3>Shift Appointment</h3>
                                    <div className="shift-panel-fields">

                                      <span>Shift Visit Type</span>
                                      <div className="shift-panel-fields-input">
                                        <select className={`${visittypeClass}`} id="visitType" onChange={(id) => this.handleChange(id)} value={visitType}>
                                          <option value="">Select</option>
                                          <option value="Home">Home</option>
                                          <option value="Hospital">Hospital</option>
                                        </select>
                                      </div>

                                      <span>Shift Session Time</span>
                                      <div className="shift-panel-fields-input">
                                        <select className={`${sessiontimeClass}`} id="appointmentSessionTime" onChange={(id) => this.handleChange(id)} value={appointmentSessionTime}>
                                          <option value="">Select</option>
                                          <option value="10 Mins">10 Mins</option>
                                          <option value="20 Mins">20 Mins</option>
                                          <option value="30 Mins">30 Mins</option>
                                          <option value="40 Mins">40 Mins</option>
                                          <option value="50 Mins">50 Mins</option>
                                          <option value="60 Mins">60 Mins</option>
                                        </select>
                                      </div>

                                      <span>Shift Date</span>
                                      <div className="shift-panel-fields-input">
                                        <input
                                          type="date"
                                          id="appointmentDate"
                                          value={appointmentDate}
                                          className={`${shiftdateClass}`}
                                          onChange={(id) => this.handleChange(id)}
                                        />
                                      </div>

                                      <span>Shift Start Time</span>
                                      <div className="shift-panel-fields-input">
                                        <input
                                          type="time"
                                          id="appointmentStartTime"
                                          value={appointmentStartTime}
                                          className={`${shiftstarttimeClass}`}
                                          onChange={(id) => this.handleChange(id)}
                                        />
                                      </div>

                                      <span>Shift Reason</span>
                                      <div className="shift-panel-fields-input">
                                        <textarea
                                          id="reason"
                                          value={reason}
                                          className={reasonClass}
                                          onChange={(id) => this.handleChange(id)}
                                          placeholder="Why you shift this appointment"
                                        />
                                      </div>

                                      <div className="shift-panel-form-error ">
                                        {shiftAppointment.data || shiftResult}
                                      </div>

                                      <div className="shift-panel-fields-input">
                                        <button type="submit" onClick={(key) => { this.shiftAppointment(key); }}> Shift </button>
                                      </div>

                                    </div>
                                  </div>

                                </div>
                              )
                              : null
                          }
                        </div>

                        <div>
                          {
                          unStringfiedAppointment.data.reason !== null
                            ? (
                              <div className="doctor-shifted-reason">
                                <br />
                                <span>Shifted Reason</span>
                                <br />
                                <br />
                                <div>
                                  {unStringfiedAppointment.data.reason}
                                </div>
                              </div>
                            )
                            : null
                        }
                        </div>

                        <div className="doctor-chat">
                          <button
                            type="submit"
                            className="doctor-chat-button"
                            onClick={(key) => { this.viewChatMessage(key, unStringfiedAppointment.data.ownerId, unStringfiedAppointment.data.owner, localStorage.getItem('accountOwnerId')); }}
                          > <span> <img src={BlueChatIcon} alt="ChatIcon" /> </span>Chats with {unStringfiedAppointment.data.owner} </button>
                        </div>

                        <div className="doctor-request-form">

                          <div className="form-file">

                            <div>
                              <input
                                type="file"
                                id="treatmentDocument"
                                name="treatmentDocument"
                                className="form-file-input"

                                onChange={(id) => this.handleChange(id)}
                              />
                            </div>

                            <div className="form-preview">
                              {treatmentDocumentPreview || 'Any medecine file !! Please upload here'}
                              {
                                treatmentDocumentPreviewImg ? (<img src={treatmentDocumentPreviewImg} alt="document" />) : null
                              }
                            </div>

                          </div>

                          <span className="doctor-request-message-error"> { result }</span>
                          <br /><br />

                          <button
                            type="submit"
                            className="doctor-request-button"
                          > Send </button>

                        </div>

                      </div>

                    </div>

                  </div>
                </div>

              )
              : history.push('/doctor-pending-appointments')
        }


      </div>
    );
  }
}

AppointmentDetails.defaultProps = {
  doneLoading: false,
  rejectLoading: false,
  approveLoading: false,
  viewMessagesLoading: null,

  doneAppintment: {},
  rejectAppointment: {},
  approveAppointment: {},

  shiftLoading: false,
  scamLoading: false,
  viewedLoading: false,
  LoadingMessage: false,

  history: {},
  scamServerData: {},
  shiftAppointment: {},
  viewMessagesData: {},
  viewedAppointment: {},
  checkCurrentDoctorScam: PropTypes.func,
  shiftCurrentAppointment: PropTypes.func,
  viewCurrentChatsMeesages: PropTypes.func,
  doctorViewCurrentSingleAppointment: PropTypes.func,
  doctorDoneCurrentAcceptedAppointment: PropTypes.func,
  doctorRejectCurrentPendingAppointment: PropTypes.func,
  doctorApproveCurrentPendingAppointment: PropTypes.func,
};

AppointmentDetails.propTypes = {
  doneLoading: PropTypes.bool,
  rejectLoading: PropTypes.bool,
  approveLoading: PropTypes.bool,
  viewMessagesLoading: PropTypes.bool,

  doneAppintment: PropTypes.shape(),
  rejectAppointment: PropTypes.shape(),
  approveAppointment: PropTypes.shape(),

  scamLoading: PropTypes.bool,
  shiftLoading: PropTypes.bool,
  viewedLoading: PropTypes.bool,
  LoadingMessage: PropTypes.bool,

  history: PropTypes.shape(),
  scamServerData: PropTypes.shape(),
  viewMessagesData: PropTypes.shape(),
  shiftAppointment: PropTypes.shape(),
  viewedAppointment: PropTypes.shape(),
  checkCurrentDoctorScam: PropTypes.func,
  shiftCurrentAppointment: PropTypes.func,
  viewCurrentChatsMeesages: PropTypes.func,
  doctorViewCurrentSingleAppointment: PropTypes.func,
  doctorDoneCurrentAcceptedAppointment: PropTypes.func,
  doctorRejectCurrentPendingAppointment: PropTypes.func,
  doctorApproveCurrentPendingAppointment: PropTypes.func,
};

const mapStateToProps = ({
  checkDoctorScamInitialState,
  shiftAppointmentInitialState,
  viewChatsMessagesInitialState,
  doctorViewSingleAppointmentInitialState,
  doctorDoneAcceptedAppointmentInitialState,
  doctorRejectPendingAppointmentInitialState,
  doctorApprovePendingAppointmentInitialState,
}) => (
  {

    scamLoading: checkDoctorScamInitialState.loading,
    scamServerData: checkDoctorScamInitialState.data,

    shiftLoading: shiftAppointmentInitialState.loading,
    shiftAppointment: shiftAppointmentInitialState.data,


    viewMessagesLoading: viewChatsMessagesInitialState.loading,
    viewMessagesData: viewChatsMessagesInitialState.data,


    viewedLoading: doctorViewSingleAppointmentInitialState.loading,
    viewedAppointment: doctorViewSingleAppointmentInitialState.data,

    doneLoading: doctorDoneAcceptedAppointmentInitialState.loading,
    doneAppintment: doctorDoneAcceptedAppointmentInitialState.data,

    rejectLoading: doctorRejectPendingAppointmentInitialState.loading,
    rejectAppointment: doctorRejectPendingAppointmentInitialState.data,

    approveLoading: doctorApprovePendingAppointmentInitialState.loading,
    approveAppointment: doctorApprovePendingAppointmentInitialState.data,
  }
);


const mapDispatchToProps = (dispatch) => (
  {
    checkCurrentDoctorScam: (doctorSession) => {
      dispatch(checkDoctorScam(doctorSession));
    },

    viewCurrentChatsMeesages: (token, senderId, receiverId) => {
      dispatch(viewChatsMeesages(token, senderId, receiverId));
    },

    shiftCurrentAppointment: (masterSession, id, message) => {
      dispatch(shiftAppointment(masterSession, id, message));
    },

    doctorViewCurrentSingleAppointment: (masterSession, id) => {
      dispatch(doctorViewSingleAppointment(masterSession, id));
    },

    doctorApproveCurrentPendingAppointment: (doctorSession, id) => {
      dispatch(doctorApprovePendingAppointment(doctorSession, id));
    },

    doctorRejectCurrentPendingAppointment: (doctorSession, id) => {
      dispatch(doctorRejectPendingAppointment(doctorSession, id));
    },

    doctorDoneCurrentAcceptedAppointment: (doctorSession, id) => {
      dispatch(doctorDoneAcceptedAppointment(doctorSession, id));
    },

  });

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentDetails);

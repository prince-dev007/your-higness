
/*
* All reducers will imported here from different reducers dictories.
*/

import checkRegisteredServiceTypesInitialState from './registerService/checkRegistered';
import doctorApprovePendingAppointmentInitialState from './doctor/doctorApprove';
import doctorFetchRejectedAppointmentInitialState from './doctor/doctorRejected';
import doctorFetchApprovedAppointmentInitialState from './doctor/doctorApproved';
import viewNotificationsServiceInitialState from './master/masterNotifications';
import submitVerificationInitialState from './registerUser/submitVerification';
import doctorRejectPendingAppointmentInitialState from './doctor/doctorReject';
import doctorFetchPendingAppointmentInitialState from './doctor/doctorPending';
import doctorFetchShiftedAppointmentInitialState from './doctor/doctorShifted';
import doctorDoneAcceptedAppointmentInitialState from './doctor/doctorDone';
import registerServiceInitialState from './registerService/registerService';
import doctorFetchDoneAppointmentInitialState from './doctor/doctorDoned';
import doctorViewSingleAppointmentInitialState from './doctor/doctorView';
import fetchReferralLinkInitialState from './referral/fetchReferralLink';
import checkReferralLinkInitialState from './referral/checkReferralLink';
import approvePendingServiceInitialState from './master/masterApprove';
import fetchPendingServicesInitialState from './master/masterPending';
import fetchApprovedServiceInitialState from './master/masterApproved';
import fetchRejectedServiceInitialState from './master/masterRejected';
import rejectPendingServiceInitialState from './master/masterReject';
import shiftAppointmentInitialState from './doctor/shiftAppointment';
import bookDummyAppointmentInitialState from './common/bookDummy';
import resetPasswordInitialState from './password/resetPassword';
import viewSingleServiceInitialState from './master/masterView';
import masterSendMessageInitialState from './master/masterSend';
import viewChatsMessagesInitialState from './chat/chatMessages';
import viewChatsContactsInitialState from './chat/chatContact';
import registerInitialState from './registerUser/registerUser';
import checkMasterScamInitialState from './master/masterScam';
import checkDoctorScamInitialState from './doctor/doctorScam';
import sendChatMessageInitialState from './chat/sendMessage';
import switchDoctorInitialState from './doctor/doctorSwitch';
import logoutMasterInitialState from './master/masterLogout';
import loginMasterInitialState from './master/masterLogin';
import resetLinkInitialState from './password/resetLink';
import referUserInitialState from './referral/referUser';
import verifyInitialState from './registerUser/verify';
import commonInitialState from './common/common';
import logoutInitialState from './logout';
import loginInitialState from './login';

export default {
  doctorApprovePendingAppointmentInitialState,
  doctorRejectPendingAppointmentInitialState,
  doctorFetchRejectedAppointmentInitialState,
  doctorFetchApprovedAppointmentInitialState,
  doctorFetchPendingAppointmentInitialState,
  doctorFetchShiftedAppointmentInitialState,
  doctorDoneAcceptedAppointmentInitialState,
  checkRegisteredServiceTypesInitialState,
  doctorViewSingleAppointmentInitialState,
  doctorFetchDoneAppointmentInitialState,
  viewNotificationsServiceInitialState,
  approvePendingServiceInitialState,
  rejectPendingServiceInitialState,
  fetchPendingServicesInitialState,
  fetchApprovedServiceInitialState,
  fetchRejectedServiceInitialState,
  bookDummyAppointmentInitialState,
  submitVerificationInitialState,
  fetchReferralLinkInitialState,
  viewSingleServiceInitialState,
  masterSendMessageInitialState,
  checkReferralLinkInitialState,
  viewChatsContactsInitialState,
  viewChatsMessagesInitialState,
  shiftAppointmentInitialState,
  registerServiceInitialState,
  checkMasterScamInitialState,
  checkDoctorScamInitialState,
  sendChatMessageInitialState,
  resetPasswordInitialState,
  logoutMasterInitialState,
  switchDoctorInitialState,
  loginMasterInitialState,
  referUserInitialState,
  resetLinkInitialState,
  registerInitialState,
  verifyInitialState,
  commonInitialState,
  logoutInitialState,
  loginInitialState
};

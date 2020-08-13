
/*
* All action-types are imported here from different action-type dictories.
*/

import * as doctorApprovePendingAppointmentTypes from './doctor/doctorApprovePendingAppointmentTypes';
import * as doctorRejectPendingAppointmentTypes from './doctor/doctorRejectPendingAppointmentTypes';
import * as doctorFetchRejectedAppointmentTypes from './doctor/doctorFetchRejectedAppointmentTypes';
import * as doctorFetchApprovedAppointmentTypes from './doctor/doctorFetchApprovedAppointmentTypes';
import * as doctorFetchPendingAppointmentTypes from './doctor/doctorFetchPendingAppointmentTypes';
import * as doctorFetchShiftedAppointmentTypes from './doctor/doctorFetchShiftedAppointmentTypes';
import * as doctorDoneAcceptedAppointmentTypes from './doctor/doctorDoneAcceptedAppointmentTypes';
import * as doctorViewSingleAppointmentTypes from './doctor/doctorViewSingleAppointmentTypes';
import * as checkRegisteredServiceTypes from './registerService/checkRegisteredServiceTypes';
import * as doctorFetchDoneAppointmentTypes from './doctor/doctorFetchDoneAppointmentTypes';
import * as viewNotificationsServiceTypes from './master/viewNotificationsServiceTypes';
import * as approvePendingServiceTypes from './master/approvePendingServiceTypes';
import * as submitVerificationType from './registerUser/submitVerificationTypes';
import * as bookDummyAppointmentTypes from './common/bookDummyAppointmentTypes';
import * as rejectPendingServiceTypes from './master/rejectPendingServiceTypes';
import * as fetchApprovedServiceTypes from './master/fetchApprovedServiceTypes';
import * as fetchRejectedServiceTypes from './master/fetchRejectedServiceTypes';
import * as registerServiseTypes from './registerService/registerServiseTypes';
import * as fetchPendingServiceTypes from './master/fetchPendingServiceTypes';
import * as fetchReferralLinkTypes from './referral/fetchReferralLinkTypes';
import * as checkReferralLinkTypes from './referral/checkReferralLinkTypes';
import * as masterSendMessageTypes from './master/masterSendMessageTypes';
import * as viewSingleServiceTypes from './master/viewSingleServiceTypes';
import * as shiftAppointmentTypes from './doctor/shiftAppointmentTypes';
import * as viewChatsContactsTypes from './chat/viewChatsContactsTypes';
import * as viewChatsMessagesTypes from './chat/viewChatsMessagesTypes';
import * as checkMasterScamTypes from './master/checkMasterScamTypes';
import * as checkDoctorScamTypes from './doctor/checkDoctorScamTypes';
import * as verificationType from './registerUser/verificationTypes';
import * as sendChatMessageTypes from './chat/sendChatMessageTypes';
import * as referUserLinkTypes from './referral/referUserLinkTypes';
import * as resetPasswordType from './password/resetPasswordTypes';
import * as registerTypes from './registerUser/registerUserTypes';
import * as logoutMasterTypes from './master/logoutMasterTypes';
import * as switchDoctorTypes from './doctor/switchDoctorTypes';
import * as loginMasterTypes from './master/loginMasterTypes';
import * as resetLinkType from './password/resetLinkTypes';
import * as loginTypes from './login/user/loginTypes';
import * as commonTypes from './common/commonTypes';
import * as logoutTypes from './logout/logoutTypes';


export {
  loginTypes,
  logoutTypes,
  commonTypes,
  registerTypes,
  resetLinkType,
  verificationType,
  loginMasterTypes,
  switchDoctorTypes,
  resetPasswordType,
  logoutMasterTypes,
  referUserLinkTypes,
  sendChatMessageTypes,
  checkDoctorScamTypes,
  checkMasterScamTypes,
  registerServiseTypes,
  shiftAppointmentTypes,
  masterSendMessageTypes,
  viewSingleServiceTypes,
  submitVerificationType,
  viewChatsContactsTypes,
  viewChatsMessagesTypes,
  fetchReferralLinkTypes,
  checkReferralLinkTypes,
  fetchPendingServiceTypes,
  fetchRejectedServiceTypes,
  rejectPendingServiceTypes,
  fetchApprovedServiceTypes,
  bookDummyAppointmentTypes,
  approvePendingServiceTypes,
  checkRegisteredServiceTypes,
  viewNotificationsServiceTypes,
  doctorFetchDoneAppointmentTypes,
  doctorViewSingleAppointmentTypes,
  doctorDoneAcceptedAppointmentTypes,
  doctorFetchShiftedAppointmentTypes,
  doctorFetchPendingAppointmentTypes,
  doctorFetchApprovedAppointmentTypes,
  doctorFetchRejectedAppointmentTypes,
  doctorRejectPendingAppointmentTypes,
  doctorApprovePendingAppointmentTypes,
};

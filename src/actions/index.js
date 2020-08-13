
/*
* All actions are imported here from different actions dictories.
*/
import { doctorApprovePendingAppointment } from './doctor/doctorApprovePendingAppointmentAction';
import { doctorRejectPendingAppointment } from './doctor/doctorRejectPendingAppointmentAction';
import { doctorFetchApprovedAppointment } from './doctor/doctorFetchApprovedAppointmentAction';
import { doctorFetchRejectedAppointment } from './doctor/doctorFetchRejectedAppointmentAction';
import { doctorFetchPendingAppointment } from './doctor/doctorFetchPendingAppointmentAction';
import { doctorFetchShiftedAppointment } from './doctor/doctorFetchShiftedAppointmentAction';
import { doctorDoneAcceptedAppointment } from './doctor/doctorDoneAcceptedAppointmentAction';
import { doctorViewSingleAppointment } from './doctor/doctorViewSingleAppointmentAction';
import { checkRegisteredService } from './registerService/checkRegisteredServiceAction';
import { doctorFetchDoneAppointment } from './doctor/doctorFetchDoneAppointmentAction';
import { viewNotificationsService } from './master/viewNotificationsServiceAction';
import { submitVerification } from './registerUser/submitVerificationAction';
import { approvePendingService } from './master/approvePendingServiceAction';
import { rejectPendingService } from './master/rejectPendingServiceAction';
import { fetchApprovedService } from './master/fetchApprovedServiceAction';
import { fetchRejectedService } from './master/fetchRejectedServiceAction';
import { bookDummyAppointment } from './common/bookDummyAppointmentAction';
import { fetchPendingServices } from './master/fetchPendingServiceAction';
import { registerService } from './registerService/registerServiceAction';
import { fetchReferralLink } from './referral/fetchReferralLinkAction';
import { checkReferralLink } from './referral/checkReferralLinkAction';
import { loginUserAction } from './login/userAction/loginUserAction';
import { viewSingleService } from './master/viewSingleServiceAction';
import { masterSendMessage } from './master/masterSendMessageAction';
import { shiftAppointment } from './doctor/shiftAppointmentAction';
import { viewChatsContacts } from './chat/viewChatsContactsAction';
import { viewChatsMeesages } from './chat/viewChatsMessagesAction';
import { checkMasterScam } from './master/checkMasterScamAction';
import { checkDoctorScam } from './doctor/checkDoctorScamAction';
import { logoutMasterAction } from './master/logoutMasterAction';
import { sendChatMessage } from './chat/sendChatMessageAction';
import { resetPassword } from './password/resetPasswordAction';
import { loginMasterAction } from './master/loginMasterAction';
import { verifyUser } from './registerUser/verificationAction';
import { registerUser } from './registerUser/registerAction';
import { switchDoctor } from './doctor/switchDoctorAction';
import { resetLink } from './password/resetLinkAction';
import { referUser } from './referral/referUserAction';
import { loadingApp } from './common/commonAction';
import { logoutUser } from './logout/logout';

export {
  resetLink,
  referUser,
  verifyUser,
  loadingApp,
  logoutUser,
  registerUser,
  switchDoctor,
  resetPassword,
  sendChatMessage,
  checkDoctorScam,
  checkMasterScam,
  loginUserAction,
  registerService,
  shiftAppointment,
  checkReferralLink,
  fetchReferralLink,
  viewChatsMeesages,
  viewChatsContacts,
  masterSendMessage,
  viewSingleService,
  loginMasterAction,
  submitVerification,
  logoutMasterAction,
  bookDummyAppointment,
  rejectPendingService,
  fetchApprovedService,
  fetchRejectedService,
  fetchPendingServices,
  approvePendingService,
  checkRegisteredService,
  viewNotificationsService,
  doctorFetchDoneAppointment,
  doctorViewSingleAppointment,
  doctorDoneAcceptedAppointment,
  doctorFetchShiftedAppointment,
  doctorFetchPendingAppointment,
  doctorRejectPendingAppointment,
  doctorFetchApprovedAppointment,
  doctorFetchRejectedAppointment,
  doctorApprovePendingAppointment,
};


/*
* All neccessary component will imported here from different components dictories.
*/

import Login from './login/Login';
import Landing from './landing/landing';
import UserBooking from './user/userBooking';
import DemandPage from './common/onDemandPage';
import welcomePage from './landing/welcomePage';
import PetOwnerPage from './landing/petOwnerPage';
import UnlockingPage from './common/unlockingPage';

import ResetLink from './password/resetLink';
import Success from './registerUser/success';
import Verified from './registerUser/verified';
import ResetPassword from './password/resetPassword';
import RegisterUser from './registerUser/registerUser';
import RegisterServices from './registerServices/registerServices';
import RegisterServicesResponse from './registerServices/registerServicesResponse';

import LoginServices from './registerServices/loginServices';

import Profile from './profile/profile';
import ErrorBoundary from './common/errorBoundary';


// User Page
import ChatBoard from './chat/chatBoard';
import UserDashboard from './user/userDashboard';


// Doctors Page
import AppointmentDetails from './doctor/appointmentDetails';
import DoctorDoneAppointment from './doctor/doctorDoneAppointments';
import DoctorRejectedAppointment from './doctor/doctorRejectedAppointments';
import DoctorPendingAppointment from './doctor/doctorPendingAppointments';
import DoctorShiftedAppointments from './doctor/doctorShiftedAppointments';
import DoctorAcceptedAppointment from './doctor/doctorAcceptedAppointments';

// Master Page
import MasterLogin from './master/masterLogin';
import RequestDetails from './master/requestDetails';
import PendingRequest from './master/pendingRequest';
import RejectedRequest from './master/rejectedRequest';
import AcceptedRequest from './master/acceptedRequest';

export {
  Login,
  Landing,
  DemandPage,
  UserBooking,
  welcomePage,
  PetOwnerPage,
  RegisterUser,
  LoginServices,
  UnlockingPage,
  RegisterServices,
  RegisterServicesResponse,
  Success,
  Verified,
  ResetLink,
  ResetPassword,
  Profile,
  ErrorBoundary,

  ChatBoard,
  UserDashboard,

  AppointmentDetails,
  DoctorDoneAppointment,
  DoctorPendingAppointment,
  DoctorRejectedAppointment,
  DoctorShiftedAppointments,
  DoctorAcceptedAppointment,

  MasterLogin,
  PendingRequest,
  RejectedRequest,
  AcceptedRequest,
  RequestDetails,
};

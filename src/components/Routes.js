
/*
* All neccessary component will be assigned routes from this route file.
*/


import '../App.scss';
import ReactGa from 'react-ga';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import { backendURLs } from '../helpers';
import {
  Login,
  Landing,
  DemandPage,
  UserBooking,
  welcomePage,
  PetOwnerPage,
  UnlockingPage,
  LoginServices,
  RegisterServices,
  RegisterServicesResponse,
  RegisterUser,
  Success,
  Verified,
  ResetLink,
  ResetPassword,
  Profile,
  // ErrorBoundary,

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
  RequestDetails

} from './index';

import OfflineComponent from './common/offlineComponent';

const Routes = () => {
  useEffect(() => {
    ReactGa.initialize(backendURLs.TRACK_ID);
    ReactGa.pageview(window.location.pathname);
  }, []);
  return (
    <div>
      <Router>
        <Switch>
          {/* Primary Route */}
          <Route exact path="/" component={welcomePage} />
          <Route exact path="/welcome-page" component={Landing} />
          <Route exact path="/demand-page" component={DemandPage} />
          <Route exact path="/login-user-account" component={Login} />
          <Route exact path="/offline" component={OfflineComponent} />
          <Route exact path="/user-book-page" component={UserBooking} />
          <Route exact path="/pet-owner-page" component={PetOwnerPage} />
          <Route exact path="/unlocking-page" component={UnlockingPage} />
          {/* <ErrorBoundary> */}
          <Route exact path="/register-user-response" component={Success} />
          <Route exact path="/register-user-response/:referralLink" component={Success} />
          {/* </ErrorBoundary> */}
          <Route exact path="/reset-user-account-link" component={ResetLink} />
          <Route exact path="/register-user-account" component={RegisterUser} />
          <Route exact path="/verify-user-account/:token" component={Verified} />
          <Route exact path="/reset-user-account-password/:token" component={ResetPassword} />
          <Route exact path="/register-user-account/:referralLink" component={RegisterUser} />

          {/* Secondary Route */}
          <Route exact path="/profile-user-account" component={Profile} />
          <Route exact path="/login-services-account" component={LoginServices} />
          <Route exact path="/register-services-account" component={RegisterServices} />
          <Route exact path="/register-services-response" component={RegisterServicesResponse} />


          {/* user Route */}
          <Route exact path="/chat-board" component={ChatBoard} />
          <Route exact path="/user-welcome-dashboard" component={UserDashboard} />

          {/* Doctor Route */}
          <Route exact path="/doctor-appointment-details" component={AppointmentDetails} />
          <Route exact path="/doctor-done-appointments" component={DoctorDoneAppointment} />
          <Route exact path="/doctor-pending-appointments" component={DoctorPendingAppointment} />
          <Route exact path="/doctor-shifted-appointments" component={DoctorShiftedAppointments} />
          <Route exact path="/doctor-rejected-appointments" component={DoctorRejectedAppointment} />
          <Route exact path="/doctor-accepted-appointments" component={DoctorAcceptedAppointment} />

          {/* Master Route */}
          <Route exact path="/master-dashbord-login" component={MasterLogin} />
          <Route exact path="/master-request-details" component={RequestDetails} />
          <Route exact path="/master-pending-request" component={PendingRequest} />
          <Route exact path="/master-accepted-request" component={AcceptedRequest} />
          <Route exact path="/master-rejected-request" component={RejectedRequest} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;

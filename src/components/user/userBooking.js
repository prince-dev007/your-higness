/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import ForwardIcon from '../../assets/images/forwardIcon.png';
import Rejectmark from '../../assets/images/rejectShop.png';

import DoctorA from '../../assets/images/doctorA.jpg';
import DoctorB from '../../assets/images/doctorB.jpg';
import DoctorC from '../../assets/images/doctorC.jpg';
import SearchDoctor from '../common/searchDoctor';
import BookForm from '../common/bookForm';
import Footer from '../common/footer';
import Logo from '../common/logo';

/**
 * This is user unlocking page class which hold user unlocking page component.
 */
class UserBooking extends Component {
  /* State Staff */
  constructor() {
    super();
    this.state = { showBookFormOption: false, showBookForm: false };
  }

  showBookingFormDesc(key) {
    key.preventDefault();
    this.setState({ showBookFormOption: true });
  }

  hideBookingFormDesc(key) {
    key.preventDefault();
    this.setState({ showBookFormOption: false });
  }

  showBookingForm(key) {
    key.preventDefault();
    this.setState({ showBookForm: true, showBookFormOption: false });
  }

  hideBookingForm(key) {
    key.preventDefault();
    this.setState({ showBookForm: false, showBookFormOption: true });
  }

  render() {
    const { showBookForm, showBookFormOption } = this.state;

    const { bookDummyLoading, bookDummyData } = this.props;
    console.log(bookDummyData);
    console.log(bookDummyLoading);

    if (bookDummyLoading === true) {
      toast.info(`${bookDummyData.data}  )):`);
      setTimeout(() => {
        window.location.reload(1);
      }, 4500);
    }

    if (bookDummyLoading === false) {
      toast.error(`${bookDummyData.data}  )):`);
    }


    return (
      <div className="user-book-page">
        {/* Setting background for Login Component */}
        <Helmet>
          <style>{'body { background-color: #ffff; }'}</style>
        </Helmet>

        <ToastContainer />

        <header className="book-page-header">

          <div className="main">

            <Logo />

          </div>

          <div className="our-service">
            <div className="home-demand-service">Book Doctor in 60 Secs.</div>
          </div>

          <SearchDoctor />

        </header>

        <h1 className="head">Coming Soon!! Stay Tuned.</h1>
        <p className="head-desc"> Leave your details in “Book now” and be first one to get access. </p>

        <div>
          {
          showBookForm === true
            ? (
              <div className="booking-container">

                <div className="booking-form">

                  <div className="book-head">

                    <span>Book Now !!</span>

                    <img src={Rejectmark} alt="icon" className="close-icon" onClick={(key) => { this.hideBookingForm(key); }} />

                  </div>

                  <BookForm />

                </div>

              </div>
            )
            : showBookFormOption === true
              ? (
                <div className="popup-panel">

                  <div className="popup-head">

                    <span>Lets Solve your worriers!! </span>

                    <img src={Rejectmark} alt="icon" className="close-icon" onClick={(key) => { this.hideBookingFormDesc(key); }} />

                  </div>

                  <div onClick={(key) => { this.showBookingForm(key); }}>
                    <div className="optionHead">Consultation</div>
                    <img src={ForwardIcon} alt="icon" className="image" />
                    <div className="desc"> General Illness</div>
                    <div className="border" />
                  </div>

                  <div onClick={(key) => { this.showBookingForm(key); }}>
                    <div className="optionHead">Health</div>
                    <img src={ForwardIcon} alt="icon" className="image" />
                    <div className="desc"> Food Diet for pets</div>
                    <div className="border" />
                  </div>

                  <div onClick={(key) => { this.showBookingForm(key); }}>
                    <div className="optionHead">Young Pet Care</div>
                    <img src={ForwardIcon} alt="icon" className="image" />
                    <div className="desc"> Pets Age : 0 – 18months</div>
                  </div>

                </div>
              )

              : null
          }
        </div>


        <div className="doctor-profile">

          <div className="doctor">

            <div className="doctor-image">
              <img src={DoctorA} alt="Doctor" />
            </div>

            <div className="doctor-info">

              <h1> Dr. Arya </h1>
              {/* <div> Melanin </div> */}
              <br />
              <div> 4 years of experience</div>
              <div> 700.0 m</div>
              <div> ₹ 300 Consultation fee at clinic</div>

            </div>

            <div className="book-button">
              <button type="button" onClick={(key) => { this.showBookingFormDesc(key); }}>Book Now</button>
            </div>

          </div>

          <div className="doctor">

            <div className="doctor-image">
              <img src={DoctorB} alt="Icon" />
            </div>

            <div className="doctor-info">

              <h1> Dr. Sharma </h1>
              {/* <div> Dermatologists </div> */}
              <br />
              <div> 17 years of experience</div>
              <div> 700.0 m</div>
              <div> ₹ 300 Consultation fee at clinic</div>

            </div>

            <div className="book-button">
              <button type="button" onClick={(key) => { this.showBookingFormDesc(key); }}>Book Now</button>
            </div>

          </div>

          <div className="doctor">

            <div className="doctor-image">
              <img src={DoctorC} alt="Icon" />
            </div>

            <div className="doctor-info">

              <h1> Dr.Ritika </h1>
              {/* <div> Surgery </div> */}
              <br />
              <div> 9 years of experience</div>
              <div> 700.0 m</div>
              <div> ₹ 300 Consultation fee at clinic</div>

            </div>

            <div className="book-button">
              <button type="button" onClick={(key) => { this.showBookingFormDesc(key); }}>Book Now</button>
            </div>

          </div>

        </div>

        <div className="user-dashbord-pagination">
          <FontAwesomeIcon icon={faAngleLeft} className="pagination-angles" style={{ color: '#808080' }} />
          <span className="pagination-page">01</span>
          <FontAwesomeIcon icon={faAngleRight} className="pagination-angles" style={{ color: '#808080' }} />
        </div>

        <div>
          <Footer />
        </div>

      </div>
    );
  }
}


UserBooking.defaultProps = {
  bookDummyLoading: false,
  bookDummyData: {},
};

UserBooking.propTypes = {
  bookDummyLoading: PropTypes.bool,
  bookDummyData: PropTypes.shape(),
};

const mapStateToProps = ({ bookDummyAppointmentInitialState, }) => (
  {
    bookDummyLoading: bookDummyAppointmentInitialState.loading,
    bookDummyData: bookDummyAppointmentInitialState.data,

  }
);

export default connect(mapStateToProps, null)(UserBooking);

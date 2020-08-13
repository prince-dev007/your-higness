/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bookDummyAppointment } from '../../actions';
import { validateBookForm } from '../../helpers/index';


/**
 * This is BookForm class which hold booking component.
 */
class BookForm extends Component {
  constructor() {
    super();
    this.state = {
      result: '',
      appointmentName: '',
      appointmentEmail: '',
      appointmentPhone: '+91',
      appointmentLocation: '',
      appointmentDate: '',
      appointmentStartTime: '',
      appointmentSessionTime: '',

      appointmentNameclass: '',
      appointmentEmailclass: '',
      appointmentPhoneclass: '',
      appointmentLocationclass: '',
      appointmentDateclass: '',
      appointmentStartTimeclass: '',
      appointmentSessionTimeclass: '',
    };
  }

  handleChange(key) {
    this.setState({

      appointmentNameclass: '',
      appointmentEmailclass: '',
      appointmentPhoneclass: '',
      appointmentLocationclass: '',
      appointmentDateclass: '',
      appointmentStartTimeclass: '',
      appointmentSessionTimeclass: '',
      [key.target.id]: key.target.value
    });
  }

  handleBookForm(key) {
    key.preventDefault();
    const { bookCurrentDummyAppointment } = this.props;
    const {
      validationResult,
      validationMessage,
      appointmentNameclass,
      appointmentEmailclass,
      appointmentPhoneclass,
      appointmentLocationclass,
      appointmentDateclass,
      appointmentStartTimeclass,
      appointmentSessionTimeclass
    } = validateBookForm(this.state);

    if (validationResult === 'error') {
      this.setState({
        result: validationMessage,
        appointmentNameclass,
        appointmentEmailclass,
        appointmentPhoneclass,
        appointmentLocationclass,
        appointmentDateclass,
        appointmentStartTimeclass,
        appointmentSessionTimeclass
      });
      return;
    }
    if (validationResult === 'correct') {
      this.setState({ result: validationMessage });
      bookCurrentDummyAppointment(this.state);
    } else {
      this.setState({ result: 'Something wrong occured' });
    }
  }

  render() {
    const {
      result,
      appointmentName,
      appointmentEmail,
      appointmentPhone,
      appointmentLocation,
      appointmentDate,
      appointmentStartTime,
      appointmentSessionTime,

      appointmentNameclass,
      appointmentEmailclass,
      appointmentPhoneclass,
      appointmentLocationclass,
      appointmentDateclass,
      appointmentStartTimeclass,
      appointmentSessionTimeclass
    } = this.state;

    const {
      bookDummyLoading,
      bookDummyData
    } = this.props;

    return (
      <div>

        <div className="book-dashbord-fields">

          <div className="book-dashbord-input">
            <div className="input-label">Name</div>
            <input
              type="username"
              placeholder="Your Name"
              className={appointmentNameclass}

              onChange={(id) => this.handleChange(id)}
              id="appointmentName"
              value={appointmentName}
            />
          </div>

          <div className="book-dashbord-input">
            <div className="input-label"> Email ID</div>
            <input
              type="email"
              placeholder="Your Email"
              className={appointmentEmailclass}

              onChange={(id) => this.handleChange(id)}
              id="appointmentEmail"
              value={appointmentEmail}
            />
          </div>

          <div className="book-dashbord-input">
            <div className="input-label">Phone Number</div>
            <input
              type="tel"
              className={appointmentPhoneclass}

              onChange={(id) => this.handleChange(id)}
              id="appointmentPhone"
              value={appointmentPhone}
            />
          </div>

          <div className="book-dashbord-input">
            <div className="input-label">Appointment Place</div>
            <input
              type="address"
              placeholder="Your orgin location"
              className={appointmentLocationclass}

              onChange={(id) => this.handleChange(id)}
              id="appointmentLocation"
              value={appointmentLocation}
            />
          </div>

          <div className="book-dashbord-input">
            <div className="input-label">Appointment Date</div>
            <input
              type="text"
              className={appointmentDateclass}
              placeholder="Your appointment date"
              onFocus={(e) => { e.target.type = 'date'; }}

              onChange={(id) => this.handleChange(id)}
              id="appointmentDate"
              value={appointmentDate}
            />
          </div>

          <div className="book-dashbord-input">
            <div className="input-label">Appointment Time</div>
            <input
              type="text"
              placeholder="Your appointment time"
              className={appointmentStartTimeclass}
              onFocus={(e) => { e.target.type = 'time'; }}

              onChange={(id) => this.handleChange(id)}
              id="appointmentStartTime"
              value={appointmentStartTime}
            />
          </div>

          <div className="book-dashbord-input">
            <div className="input-label">Appointment Duration</div>
            <select onChange={(id) => this.handleChange(id)} className={appointmentSessionTimeclass} id="appointmentSessionTime" value={appointmentSessionTime}>
              <option value="">Your appointment session </option>
              <option value="15 Mins">15 Mins</option>
              <option value="20 Mins">20 Mins</option>
              <option value="30 Mins">30 Mins</option>
              <option value="40 Mins">40 Mins</option>
              <option value="45 Mins">45 Mins</option>
              <option value="1 Hour">1 Hour</option>
            </select>
          </div>

          <div className="book-form-error ">
            {
              bookDummyLoading !== null
                ? bookDummyData.data
                : result
            }
          </div>

          <div className="book-button">
            <button type="submit" onClick={(key) => { this.handleBookForm(key); }}> Book Now </button>
          </div>

        </div>

      </div>
    );
  }
}


BookForm.defaultProps = {
  bookDummyLoading: false,
  bookDummyData: {},
  bookCurrentDummyAppointment: PropTypes.func,
};


BookForm.propTypes = {
  bookDummyLoading: PropTypes.bool,
  bookDummyData: PropTypes.shape(),
  bookCurrentDummyAppointment: PropTypes.func,
};

const mapStateToProps = ({ bookDummyAppointmentInitialState, }) => (
  {
    bookDummyLoading: bookDummyAppointmentInitialState.loading,
    bookDummyData: bookDummyAppointmentInitialState.data,

  }
);

const mapDispatchToProps = (dispatch) => (
  {
    bookCurrentDummyAppointment: (state) => {
      dispatch(bookDummyAppointment(state));
    },

  });

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);

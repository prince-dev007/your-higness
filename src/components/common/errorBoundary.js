/* eslint-disable react/no-unused-state */
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


/**
 * This is ErrorBoundary class which will handle any component error.
 */
class ErrorBoundary extends Component {
  /* State Staff */
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  /**
   * This is fuction to send message.
   * @param {object} error recorganise error.
   * @param {object} errorInfo recorganise error information.
   * @returns {null}.
   */
  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    if (error) {
      return (
        <div className="submit-details">
          <div className="success-message register-form-error">
            <Helmet>
              <style>{'body { background-color: #dadada; }'}</style>
            </Helmet>
            <h3> WELCOME TO PET INDUSTRY </h3>
            <div>
              <p className="server-feedback"> No corresponding result found </p>
              <br />
              <Link to="/" className="reset-link"> Go with Pet Industry </Link>
            </div>
          </div>
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.defaultProps = { children: {}, };

ErrorBoundary.propTypes = { children: PropTypes.shape(), };

export default ErrorBoundary;

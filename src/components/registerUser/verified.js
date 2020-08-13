
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { submitVerification } from '../../actions';

/**
 * This is Verified class which hold Verified component.
 */
class Verified extends Component {
  constructor() {
    super();
    this.state = { result: 'No corresponding result found' };
  }

  componentDidMount() {
    const { submitCurrrentVerification } = this.props;
    const { match } = this.props;
    if (match) {
      const { params } = match;
      if (params) {
        const { token } = params;
        if (token) {
          submitCurrrentVerification(token);
        } else {
          this.setState({ result: 'No corresponding result found, Please try again' });
        }
      } else {
        this.setState({ result: 'No corresponding result found, Please try again' });
      }
    } else {
      this.setState({ result: 'No corresponding result found, Please try again' });
    }
  }

  render() {
    const { result } = this.state;
    const { isVerified, serverData } = this.props;
    return (
      <div className="submit-details">
        <Helmet>
          <style>{'body { background-color: #dadada; }'}</style>
        </Helmet>
        <h3> WELCOME TO VETERINARIAN’S INDUSTRY </h3>
        {isVerified !== null
          ? (
            <div>
              {isVerified === true
                ? (
                  <div>
                    <p className="server-feedback success-message register-form-error">{serverData.data}</p>
                    <br />
                    <a href="/login-user-account" className="reset-link">  Login now </a>
                  </div>
                )
                : isVerified === false
                  ? (
                    <div>
                      <p className="server-feedback success-message register-form-error">{serverData.data.data}</p>
                      <br />
                      <a href="/" className="reset-link">  Return back </a>
                    </div>
                  ) : (
                    <div>
                      <p className="server-feedback success-message register-form-error">{result}</p>
                      <br />
                      <a href="/" className="reset-link">  Return back </a>
                    </div>
                  )}
            </div>
          )
          : (
            <div>
              <p className="server-feedback success-message register-form-error">Request Loading ...</p>
              <br />
              <a href="/" className="reset-link">  Return back </a>
            </div>
          )}
      </div>
    );
  }
}

Verified.defaultProps = {
  isVerified: null,
  match: {},
  serverData: {},
  submitCurrrentVerification: PropTypes.func,
};

Verified.propTypes = {
  isVerified: PropTypes.bool,
  match: PropTypes.shape(),
  serverData: PropTypes.shape(),
  submitCurrrentVerification: PropTypes.func,
};

const mapStateToProps = ({ submitVerificationInitialState }) => (
  {
    isVerified: submitVerificationInitialState.isVerified,
    serverData: submitVerificationInitialState.data,
  }
);

const mapDispatchToProps = (dispatch) => ({ submitCurrrentVerification: (token) => { dispatch(submitVerification(token)); }, });

export default connect(mapStateToProps, mapDispatchToProps)(Verified);

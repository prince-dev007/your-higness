import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import fbLogo from '../../assets/images/facebook.png';

/**
 * This is SocialAuth class which hold Social Authentiction component.
 */
class SocialAuth extends Component {
  responseFacebook(response) {
    if (response.email) {
      console.log(response.name);
      console.log(response.email);
    } else {
      console.log('Please try again something wrong occured with facebook login');
    }
  }

  responseGoogle(response) {
    if (response) {
      console.log(response.Pt.pW);
      console.log(response.Pt.yu);
    } else {
      console.log('Please try again something wrong occured with google login');
    }
  }

  render() {
    return (
      <div>

        <div>
          <FacebookLogin
            autoLoad={false}
            appId="803906423456613"
            fields="name,email,picture"
            textButton="Continue with Facebook"
            cssClass="login-button f-social-login"
            icon={<img className="f-social-login-icon" src={fbLogo} alt="facebook logo" />}
            callback={this.responseFacebook}
          />
        </div>

        <div>
          <GoogleLogin
            clientId="1021531652303-ttm2ejo540cjr5srppaqiktjmiqkkkkg.apps.googleusercontent.com"
            className="login-button g-social-login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy="single_host_origin"
          >
            <span className="g-social-login-text">
              Continue with Google
            </span>
          </GoogleLogin>
        </div>

        <div className="divider-line"><h5>OR</h5></div>

      </div>
    );
  }
}

export default SocialAuth;

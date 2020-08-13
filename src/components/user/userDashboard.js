/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-one-expression-per-line */
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import HeaderMenu from '../common/headerMenu';
import { checkDoctorScam, } from '../../actions';

import CombineIcons from '../common/combineIcons';

import RegisterPopup from '../common/registerPopup';
import LandingImage from '../common/landingImage';
import SearchDoctor from '../common/searchDoctor';
import Footer from '../common/footer';
import Slides from '../common/slide';


/**
 * This is UserDashboard class which hold User Dashboard component.
 */
class UserDashboard extends Component {
  componentDidMount() {
    const { history, checkCurrentUserScam } = this.props;

    if (!(localStorage.getItem('token'))) {
      localStorage.removeItem('token');
      localStorage.removeItem('firstame');
      localStorage.removeItem('lastname');
      history.push('/login-user-account');
    } else {
      const userSession = localStorage.getItem('token');
      checkCurrentUserScam(userSession);
    }
  }

  render() {
    const {
      history,
      scamLoading,
      scamServerData,
    } = this.props;

    return (
      <div>

        {/* Setting background for Login Component */}
        <Helmet>
          <style>{'body { background-color: #ffff; }'}</style>
        </Helmet>

        {
          scamLoading === false
            ? (
              <div className="doctor-dashbord-container">
                <div className="doctor-dashbord">
                  <h2 className="doctor-scam">{scamServerData.data.data}</h2>
                  <br />
                  <a href="/login-user-account" className="reset-link"> Go with us like Pro </a>
                </div>
              </div>
            )
            : localStorage.getItem('token')
              ? (
                <div className="user-dashbord-container">

                  <RegisterPopup />

                  <HeaderMenu sendProps={this.props} />

                  <header className="welcome-page-header">

                    <div className="our-service">

                      <div className="home-demand-service"> Home Services, On Demand. </div>

                    </div>

                    <SearchDoctor />

                    <CombineIcons />

                  </header>

                  <div className="welcome-page-body-separator" />

                  <div className="welcome-page-body">

                    <Slides />

                  </div>

                  <div className="welcome-page-body-separator" />

                  <div className="welcome-page-body">
                    <LandingImage />

                  </div>

                  <div className="welcome-page-body-separator" />

                  <div className="welcome-page-body">
                    <h1>SEO Purpose Content</h1>
                    <div className="experience-desc">

                      <div className="description">
                        Connect with Your Community Pet owners often form strong communities in their local areas.
                        Interacting with nearby pet owners will keep your business’ name fresh in potential customers’
                        minds, boost your reputation among local animal lovers, and help build loyalty among your current
                        clients. Whenever you receive a positive testimonial, share it on your Facebook page so that people
                        who are interested in your products or services can find it easily. Be sure to also attend local events,
                        and let your fans and followers know you will be there ahead of time. Another great strategy is to connect
                        with local influencers and invite them to write a guest post for your blog. Look for well-known individuals.
                      </div>

                      <div className="description">
                        in the pet care community who are also your customers—think dog behavior experts, managers of rescue organizations,
                        or even the owner of a pet with its own popular Instagram profile.These influencers will be likely to share the guest
                        blog with their own followers, helping to spread the word about your business.There is great potential when it comes to
                        content marketing for pet care businesses, but sifting through all of the options and developing a strategy that will work
                        for your company can be time-consuming and confusing. If you want to boost your business’ online visibility, but don’t have
                        the time or manpower to do so yourself, get in touch with Pennington Creative. Content marketing is our specialty, and we can
                        provide everything from daily tweets and Facebook posts to informative and beautifully illustrated eBooks. To find out more, get in touch with us today.
                      </div>

                    </div>
                  </div>

                  <div>
                    <Footer />
                  </div>


                </div>
              )
              : history.push('/login-user-account')
        }
      </div>
    );
  }
}

UserDashboard.defaultProps = {
  scamLoading: false,
  history: {},
  scamServerData: {},
  checkCurrentUserScam: PropTypes.func,
};


UserDashboard.propTypes = {
  scamLoading: PropTypes.bool,
  history: PropTypes.shape(),
  scamServerData: PropTypes.shape(),
  checkCurrentUserScam: PropTypes.func,
};

const mapStateToProps = ({ checkDoctorScamInitialState, }) => (
  {
    scamLoading: checkDoctorScamInitialState.loading,
    scamServerData: checkDoctorScamInitialState.data,

  }
);

const mapDispatchToProps = (dispatch) => (
  {
    checkCurrentUserScam: (userSession) => {
      dispatch(checkDoctorScam(userSession));
    },

  });

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);

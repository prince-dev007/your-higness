/* eslint-disable react/jsx-props-no-spreading */
import Helmet from 'react-helmet';
import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';

import slideA from '../../assets/images/PetCareExperience.png';
import SlideTwo from '../../assets/images/slideTwo.png';
import slideB from '../../assets/images/PetHealthB.png';
import slideC from '../../assets/images/PetHealthC.png';

import IconThree from '../../assets/images/PetMove.png';
import IconFour from '../../assets/images/PetSport.png';
import IconTwo from '../../assets/images/PetMeter.png';
import IconFive from '../../assets/images/PetCare.png';
import IconOne from '../../assets/images/PetPlay.png';

import TestmonialImage from '../common/testmonialImage';
import LandingImage from '../common/landingImage';
import Footer from '../common/footer';
import Logo from '../common/logo';

/**
 * This is user welcome page class which hold user welcome page component.
 */
class PetOwnerPage extends Component {
  render() {
    const slideImages = [slideA, slideB, slideC];
    const properties = {
      duration: 3000,
      transitionDuration: 500,
      infinite: true,
      indicators: false,
      arrows: true,
      pauseOnHover: true,
      autoplay: false,
    };


    return (
      <div className="welcome-page">
        {/* Setting background for Login Component */}
        <Helmet>
          <style>{'body { background-color: #ffff; }'}</style>
        </Helmet>

        <header className="welcome-page-header">

          <div className="main">

            <Logo />

            <ul>

              <li>
                <a href="/login-user-account" className="url">Logout</a>
              </li>

            </ul>

          </div>

          <div className="our-service">
            <h className="home-demand-service">Home Services, On Demand.</h>
          </div>

          <div className="locations">
            <button type="button" className="location-btn">Location</button>
            <input type="text" placeholder="Search for Doctor, Clinic and Hospital" />
          </div>

          <div className="icon-container">

            <div>
              <h1 className="icons-title">Discover For Your Hihgness</h1>
            </div>

            <div className="icons">
              <a target="_blank" href="/">
                <img src={IconOne} alt="iconOne" />
              </a>
              <div className="icons-desc">Add a description</div>
            </div>

            <div className="icons">
              <a target="_blank" href="/">
                <img src={IconTwo} alt="IconTwo" />
              </a>
              <div className="icons-desc">Add a description</div>
            </div>

            <div className="icons">
              <a target="_blank" href="/">
                <img src={IconThree} alt="iconOne" />
              </a>
              <div className="icons-desc">Add a description</div>
            </div>

            <div className="icons">
              <a target="_blank" href="/">
                <img src={IconFour} alt="IconTwo" />
              </a>
              <div className="icons-desc">Add a description</div>
            </div>

            <div className="icons">
              <a target="_blank" href="/">
                <img src={IconFive} alt="iconOne" />
              </a>
              <div className="icons-desc">Add a description</div>
            </div>

          </div>
        </header>

        <div className="welcome-page-body-separator" />

        <div className="welcome-page-body">
          <h1>Our Experiences</h1>

          <div className="experience-desc">
            <div>
            Dr. Thames is a wonderful veternarian. He is great with our three cats.
            Knowledgable, Compassionate and Self-assured. He really cares about our pets
            and never tries to push anything on us or sell us anything we do not need for the well being of our cats.
            </div>
          </div>

          <div className="slide-container">

            <Slide {...properties}>

              <div className="each-slide">
                <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
                  <div className="span-one-container">
                    <span className="right-span"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
                    <span className="left-span"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
                  </div>
                </div>
              </div>

              <div className="each-slide">
                <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
                  <div className="span-two-container">
                    <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat imperdiet nunc vitae luctus. Aenean eu gravida leo. Nulla ac odio id sem elementum pharetra. Vestibulum condimentum libero at lectus cursus ornare. </span>
                    <img src={SlideTwo} alt="logo" />
                  </div>
                </div>
              </div>

            </Slide>

          </div>

        </div>

        <div className="welcome-page-body-separator" />

        <div className="welcome-page-body">
          <LandingImage />

        </div>

        <div className="welcome-page-body-separator" />

        <div className="welcome-page-body">
          <TestmonialImage />

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
    );
  }
}

export default PetOwnerPage;

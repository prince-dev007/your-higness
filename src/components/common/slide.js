/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';

import slideA from '../../assets/images/PetCareExperience.png';
import SlideOne from '../../assets/images/slideOne.png';
import SlideTwo from '../../assets/images/slideTwo.png';
import SlideThree from '../../assets/images/slideThree.png';

import slideB from '../../assets/images/PetHealthB.png';
import slideC from '../../assets/images/PetHealthC.png';
import slideD from '../../assets/images/PetHealthA.png';

/**
 * This is Slides class which hold Slides component.
 */
class Slides extends Component {
  render() {
    const slideImages = [slideA, slideB, slideC, slideD];

    const properties = {
      duration: 3000,
      transitionDuration: 500,
      infinite: true,
      indicators: false,
      arrows: true,
      pauseOnHover: true,
      autoplay: false,
    };

    const propertiesPhone = {
      duration: 3000,
      transitionDuration: 500,
      infinite: true,
      indicators: false,
      arrows: true,
      pauseOnHover: true,
      autoplay: true,
    };


    return (
      <div>


        <h1> Why Should Veterinarians join Rivo pets ? </h1>

        <div className="experience-desc">

          <div>
            Connecting to Pet Parents is not always easy too, but with
            Rivopets you will get more 10,000+ nearby pet parents
            looking for certified veterinarians.
          </div>

        </div>

        <div className="slide-container">

          <Slide {...properties}>

            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
                <div className="span-one-container">
                  <span className="right-span">
                  Rivopets - Creates Digital Bridges for Pet Parents to Veterinarians at ease.
                  </span>
                  <span className="left-span">
                  Rivopets – Coexistance Community and Knowledge Sharing Platform.
                  </span>
                </div>
              </div>
            </div>

            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
                <div className="span-one-container">
                  <span className="right-span">
                  Rivopets - Creates Digital Bridges for Pet Parents to Veterinarians at ease.
                  </span>
                  <span className="left-span">
                  Rivopets – Coexistance Community and Knowledge Sharing Platform.
                  </span>
                </div>
              </div>
            </div>

          </Slide>

        </div>

        <div className="slide-container-phone">

          <Slide {...propertiesPhone}>

            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
                <div className="span-two-container">
                  <img src={SlideOne} alt="logo" />
                </div>
              </div>
            </div>

            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
                <div className="span-two-container">
                  <img src={SlideTwo} alt="logo" />
                </div>
              </div>
            </div>

            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[3]})` }}>
                <div className="span-two-container">
                  <img src={SlideThree} alt="logo" />
                </div>
              </div>
            </div>

          </Slide>

        </div>


      </div>
    );
  }
}

export default Slides;

/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Geocode from 'react-geocode';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

import HeaderMenu from '../common/headerMenu';
import pdf from '../../assets/images/pdf.png';
import location from '../../assets/images/location.png';
import mapMaker from '../../assets/images/mapMaker.png';
import {
  registerService,
  checkRegisteredService
} from '../../actions';

import {
  validatemptyStepOneFrom,
  validatemptyStepTwoFrom,
  validatemptyStepThreeFrom,
  validatemptyStepFourFrom,
  validatemptyStepFiveFrom,
  validatemptyStepSixFrom,
  validatemptyStepSevenFrom,
  validatemptyStepTenFrom,
  validatemptyStepElevenFrom,
  validateElevenAdditionFrom
} from '../../helpers';

const mapStyles = {
  width: '100%',
  height: '200px',
  position: 'relative',

}; const markerStyle = {
  height: '50px',
  width: '50px',
}; const imgStyle = { height: '100%' };
const Marker = () => (
  <div style={markerStyle}>
    <img style={imgStyle} src={mapMaker} alt="map-maker" />
  </div>
);


/**
 * This is RegisterServices class which hold Register Services component.
 */
class RegisterServices extends Component {
  constructor() {
    super();
    this.state = {
      stepOneFrom: false,
      stepTwoFrom: false,
      stepThreeFrom: false,
      stepFourFrom: false,
      stepFiveFrom: false,
      stepSixFrom: false,
      stepSevenFrom: false,
      stepEightFrom: false,
      stepNineFrom: false,
      stepTenFrom: false,
      stepElevenFrom: false,
      expandSelect: false,
      longitude: 77.1025,
      latitude: 28.7041,
      showCheckBoxesClass: '',
      genderclass: '',
      specializationclass: '',
      treatmentclass: '',
      cityclass: '',
      regnumberclass: '',
      regcouncilclass: '',
      regyearclass: '',
      degreeclass: '',
      collegeclass: '',
      completionyearclass: '',
      experienceclass: '',
      establishmentclass: '',
      establishmentnameclass: '',
      establishmentcityclass: '',
      establishmentlocalityclass: '',
      medicalregproofdocumentclass: '',
      identityproofdocumentclass: '',
      establishproofdocumentclass: '',
      addressnameclass: '',
      weekdayClass: '',
      starttimeclass: '',
      endtimeclass: '',
      sessiontimeclass: '',
      consultationfeesclass: '',
      establishmenthoursclass: '',
      resultclass: '',
      name: `${sessionStorage.getItem('firstname')} ${sessionStorage.getItem('lastname')} `,
      gender: '',
      specialization: '',
      treatment: '',
      treatmentForDogs: '',
      treatmentForCats: '',
      treatmentForBirds: '',
      treatmentForFish: '',
      treatmentForSmallPets: '',
      treatmentForFarmAnimals: '',
      treatmentForWildAnimals: '',
      city: '',

      regnumber: '',
      regcouncil: '',
      regyear: '',

      degree: '',
      college: '',
      completionyear: '',
      experience: '',

      establishment: '',

      establishmentname: '',
      establishmentcity: '',
      establishmentlocality: '',

      medicalregproofdocument: '',
      identityproofdocument: '',
      establishproofdocument: '',

      userPhone: `${sessionStorage.getItem('phone')}`,
      userEmail: `${sessionStorage.getItem('email')}`,
      addressname: '',

      weekday: '',
      daymonday: '',
      daytuesday: '',
      daywednesday: '',
      daythursday: '',
      dayfriday: '',
      daysaturday: '',
      daysunday: '',
      starttime: '',
      endtime: '',
      sessiontime: '',

      consultationfees: '',
      establishmenthours: '',
      establishmentlocation: '',
      result: '',
    };

    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.getEstablishmentLocation = this.getEstablishmentLocation.bind(this);
    this.getEstablishmentCoordinates = this.getEstablishmentCoordinates.bind(this);
  }

  componentDidMount() {
    const { history, checkCurrentRegisteredService } = this.props;

    if (!(localStorage.getItem('token')) && !(localStorage.getItem('role')) && !(localStorage.getItem('phone')) && !(localStorage.getItem('email')) && !(localStorage.getItem('lastname')) && !(localStorage.getItem('firstname'))) {
      history.push('/login-services-account');
    }

    if (localStorage.getItem('token')) {
      checkCurrentRegisteredService(localStorage.getItem('token'));
      // set existing from localStorage to localState
      this.hydrateStateWithLocalStorage();

      // add event listener to save state to localStorage
      // when user leaves/refreshes the page
      window.addEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
    }
  }

  componentWillUnmount() {
    const { history } = this.props;

    if (!(localStorage.getItem('token')) && !(localStorage.getItem('role')) && !(localStorage.getItem('phone')) && !(localStorage.getItem('email')) && !(localStorage.getItem('lastname')) && !(localStorage.getItem('firstname'))) {
      history.push('/login-services-account');
    }

    if (localStorage.getItem('token')) {
      window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));

      // saves if component has a chance to unmount
      this.saveStateToLocalStorage();
    }
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (const key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value, result: '' });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value, result: '' });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (const key in this.state) {
      // save to localStorage\
      // eslint-disable-next-line react/destructuring-assignment
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      window.alert('Geolocation is not supported by this browser.');
    }
  }

  getCoordinates(position) {
    Geocode.setApiKey('AIzaSyAI38nI4lmagfKGwHYVRyjJm8420-nJ_aw');
    Geocode.setLanguage('en');
    Geocode.setRegion('es');
    Geocode.enableDebug();
    this.setState({
      addressname: `${position.coords.latitude} and ${position.coords.longitude}`,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log(address);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getEstablishmentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getEstablishmentCoordinates);
    } else {
      window.alert('Geolocation is not supported by this browser.');
    }
  }

  getEstablishmentCoordinates(position) {
    Geocode.setApiKey('AIzaSyAI38nI4lmagfKGwHYVRyjJm8420-nJ_aw');
    Geocode.setLanguage('en');
    Geocode.setRegion('es');
    Geocode.enableDebug();
    this.setState({
      establishmentlocation: `${position.coords.latitude} and ${position.coords.longitude}`,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log(address);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  triggerStepOneButton(key) {
    key.preventDefault();
    this.setState({ result: '', stepOneFrom: true });

    // saves if component has a chance to unmount
    window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
    this.saveStateToLocalStorage();
  }

  triggerStepTwoButton(key) {
    key.preventDefault();
    this.updateSpecialization(key);
    const { errorStepOneFrom, emptyStepOneFrom, genderclass, cityclass, addressnameclass } = validatemptyStepOneFrom(this.state);

    const { errorStepThreeFrom, emptyStepThreeFrom, degreeclass, collegeclass, completionyearclass, specializationclass, treatmentclass, experienceclass } = validatemptyStepThreeFrom(this.state);

    if (emptyStepOneFrom === 'error') {
      this.setState({ result: errorStepOneFrom, genderclass, cityclass, addressnameclass });
      return;
    }

    if (emptyStepThreeFrom === 'error') {
      this.setState({ result: errorStepThreeFrom, degreeclass, collegeclass, completionyearclass, specializationclass, treatmentclass, experienceclass });
      return;
    }

    if (emptyStepOneFrom === 'Loading...') {
      if (emptyStepThreeFrom === 'Loading...') {
        this.setState({ result: '', resultclass: '', stepOneFrom: false, stepTwoFrom: true });

        // saves if component has a chance to unmount
        window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
        this.saveStateToLocalStorage();
      } else {
        this.setState({ result: 'Something goes wrong please try again' });
      }
    } else {
      this.setState({ result: 'Something goes wrong please try again' });
    }
  }

  unTriggerStepTwoButton(key) {
    key.preventDefault();
    this.updateSpecialization(key);
    this.setState({ result: '', stepOneFrom: false, stepTwoFrom: false, stepThreeFrom: false });

    // saves if component has a chance to unmount
    window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
    this.saveStateToLocalStorage();
  }

  triggerStepThreeButton(key) {
    key.preventDefault();
    const { errorStepTwoFrom, emptyStepTwoFrom, regnumberclass, regcouncilclass, regyearclass } = validatemptyStepTwoFrom(this.state);

    const { emptyStepFourFrom, errorStepFourFrom, establishmentclass } = validatemptyStepFourFrom(this.state);

    const { errorStepFiveFrom, emptyStepFiveFrom, establishmentnameclass, establishmentcityclass, establishmentlocalityclass } = validatemptyStepFiveFrom(this.state);

    const { errorStepTenFrom, emptyStepTenFrom, weekdayClass, starttimeclass, endtimeclass, sessiontimeclass } = validatemptyStepTenFrom(this.state);

    const { errorStepElevenmFrom, emptyStepElevenFrom, establishmenthoursclass, consultationfeesclass } = validatemptyStepElevenFrom(this.state);

    const { emptyAdditionFrom, errorAdditionFrom, establishmentlocationclass } = validateElevenAdditionFrom(this.state);

    if (emptyStepTwoFrom === 'error') {
      this.setState({ result: errorStepTwoFrom, regnumberclass, regcouncilclass, regyearclass });
      return;
    }

    if (emptyStepFourFrom === 'error') {
      this.setState({ result: errorStepFourFrom, establishmentclass });
      return;
    }

    if (emptyStepFiveFrom === 'error') {
      this.setState({ result: errorStepFiveFrom, establishmentnameclass, establishmentcityclass, establishmentlocalityclass });
      return;
    }

    if (emptyStepTenFrom === 'error') {
      this.setState({ result: errorStepTenFrom, weekdayClass, starttimeclass, endtimeclass, sessiontimeclass });
      return;
    }

    if (emptyStepElevenFrom === 'error') {
      this.setState({ result: errorStepElevenmFrom, establishmenthoursclass, consultationfeesclass });
      return;
    }

    if (emptyAdditionFrom === 'error') {
      this.setState({ result: errorAdditionFrom, establishmentlocationclass });
      return;
    }

    if (emptyStepTwoFrom === 'Loading...') {
      if (emptyStepFourFrom === 'Loading...') {
        if (emptyStepFiveFrom === 'Loading...') {
          if (emptyStepTenFrom === 'Loading...') {
            if (emptyStepElevenFrom === 'Loading...') {
              if (emptyAdditionFrom === 'Loading...') {
                this.setState({ result: '', stepOneFrom: false, stepTwoFrom: false, stepThreeFrom: true });

                // saves if component has a chance to unmount
                window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
                this.saveStateToLocalStorage();
                this.updateWeeklyDays(key);
              } else {
                this.setState({ result: 'Something goes wrong please try again' });
              }
            } else {
              this.setState({ result: 'Something goes wrong please try again' });
            }
          } else {
            this.setState({ result: 'Something goes wrong please try again' });
          }
        } else {
          this.setState({ result: 'Something goes wrong please try again' });
        }
      } else {
        this.setState({ result: 'Something goes wrong please try again' });
      }
    } else {
      this.setState({ result: 'Something goes wrong please try again' });
    }
  }

  unTriggerStepThreeButton(key) {
    key.preventDefault();
    this.setState({ result: '', stepOneFrom: true, stepTwoFrom: false, stepThreeFrom: false, });

    // saves if component has a chance to unmount
    window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
    this.saveStateToLocalStorage();
  }

  triggerStepFourButton(key) {
    key.preventDefault();
    const { errorStepSixFrom, emptyStepSixFrom, medicalregproofdocumentclass } = validatemptyStepSixFrom(this.state);

    const { errorStepSevenFrom, emptyStepSevenFrom, identityproofdocumentclass } = validatemptyStepSevenFrom(this.state);

    if (emptyStepSixFrom === 'error') {
      this.setState({ result: errorStepSixFrom, medicalregproofdocumentclass });
      return;
    }

    if (emptyStepSevenFrom === 'error') {
      this.setState({ result: errorStepSevenFrom, identityproofdocumentclass });
      return;
    }

    if (emptyStepSixFrom === 'Loading...') {
      if (emptyStepSevenFrom === 'Loading...') {
        const token = localStorage.getItem('token');
        const { registerCurrentService } = this.props;
        this.setState({ result: emptyStepSevenFrom, resultclass: 'register-services-correct', stepOneFrom: false, stepTwoFrom: false, stepThreeFrom: true });

        // saves if component has a chance to unmount
        window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
        this.saveStateToLocalStorage();
        registerCurrentService(token, this.state);
      } else {
        this.setState({ result: 'Something goes wrong please try again' });
      }
    } else {
      this.setState({ result: 'Something goes wrong please try again' });
    }
  }

  unTriggerStepFourButton(key) {
    key.preventDefault();
    this.setState({ result: '', resultclass: '', stepOneFrom: false, stepTwoFrom: true, stepThreeFrom: false, });

    // saves if component has a chance to unmount
    window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
    this.saveStateToLocalStorage();
  }

  showCheckBoxes(key) {
    key.preventDefault();
    const { expandSelect } = this.state;
    if (!expandSelect) {
      this.setState({ showCheckBoxesClass: 'form-one-show-check-box', expandSelect: true });
    } else {
      this.setState({ showCheckBoxesClass: 'form-one-hide-check-box', expandSelect: false });
    }
  }

  submitServicesDetails(key) {
    key.preventDefault();
    const { errorStepElevenmFrom, emptyStepElevenFrom, establishmenthoursclass, consultationfeesclass } = validatemptyStepElevenFrom(this.state);
    if (emptyStepElevenFrom === 'error') {
      this.setState({ result: errorStepElevenmFrom, establishmenthoursclass, consultationfeesclass });
    }
    if (emptyStepElevenFrom === 'Loading...') {
      const token = localStorage.getItem('token');
      const { registerCurrentService } = this.props;
      this.setState({ result: emptyStepElevenFrom, resultclass: 'register-services-correct', stepOneFrom: false, stepTwoFrom: false, stepThreeFrom: false, stepFourFrom: false, stepFiveFrom: false, stepSixFrom: false, stepSevenFrom: false, stepEightFrom: false, stepNineFrom: false, stepTenFrom: false, stepElevenFrom: true, });

      // saves if component has a chance to unmount
      window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
      this.saveStateToLocalStorage();

      registerCurrentService(token, this.state);
    }
  }

  unSubmitServicesDetails(key) {
    key.preventDefault();
    this.setState({ result: '', stepOneFrom: false, stepTwoFrom: false, stepThreeFrom: false, stepFourFrom: false, stepFiveFrom: false, stepSixFrom: false, stepSevenFrom: false, stepEightFrom: false, stepNineFrom: false, stepTenFrom: true, stepElevenFrom: false, });

    // saves if component has a chance to unmount
    window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
    this.saveStateToLocalStorage();
  }

  handleChange(key) {
    this.setState({
      genderclass: '',
      specializationclass: '',
      treatmentclass: '',
      cityclass: '',
      regnumberclass: '',
      regcouncilclass: '',
      regyearclass: '',
      degreeclass: '',
      collegeclass: '',
      completionyearclass: '',
      experienceclass: '',
      establishmentclass: '',
      establishmentnameclass: '',
      establishmentcityclass: '',
      establishmentlocalityclass: '',
      medicalregproofdocumentclass: '',
      identityproofdocumentclass: '',
      establishproofdocumentclass: '',
      addressnameclass: '',
      starttimeclass: '',
      endtimeclass: '',
      sessiontimeclass: '',
      establishmenthoursclass: '',
      consultationfeesclass: '',
      establishmentlocationclass: '',
      resultclass: '',
      result: '',
      [key.target.id]: key.target.value,
    });

    if (key.target.files) {
      // Update state with corresponding file.
      this.setState({ [key.target.id]: key.target.files[0] });

      // saves if component has a chance to unmount
      window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
      this.saveStateToLocalStorage();
    }


    // saves if component has a chance to unmount
    window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
    this.saveStateToLocalStorage();
  }

  handleCheckSpecialization(key) {
    if (key.target.checked === true) {
      this.setState({ [key.target.id]: key.target.value, genderclass: '', specializationclass: '', treatmentclass: '', cityclass: '' });


      // saves if component has a chance to unmount
      window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
      this.saveStateToLocalStorage();
    } else {
      this.setState({ [key.target.id]: '', genderclass: '', specializationclass: '', treatmentclass: '', cityclass: '' });


      // saves if component has a chance to unmount
      window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
      this.saveStateToLocalStorage();
    }
  }

  handleCheckDays(key) {
    if (key.target.checked === true) {
      this.setState({ [key.target.id]: key.target.value, weekdayClass: '', starttimeclass: '', endtimeclass: '', sessiontimeclass: '', });


      // saves if component has a chance to unmount
      window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
      this.saveStateToLocalStorage();
    } else {
      this.setState({ [key.target.id]: '', weekdayClass: '' });


      // saves if component has a chance to unmount
      window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
      this.saveStateToLocalStorage();
    }
  }

  updateSpecialization(key) {
    key.preventDefault();
    const {
      treatmentForDogs,
      treatmentForCats,
      treatmentForBirds,
      treatmentForFish,
      treatmentForSmallPets,
      treatmentForFarmAnimals,
      treatmentForWildAnimals,
    } = this.state;
    this.setState({ treatment: `${treatmentForDogs} ${treatmentForCats} ${treatmentForBirds} ${treatmentForFish} ${treatmentForSmallPets} ${treatmentForFarmAnimals} ${treatmentForWildAnimals} ` });


    // saves if component has a chance to unmount
    window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
    this.saveStateToLocalStorage();
  }

  updateWeeklyDays(key) {
    key.preventDefault();
    const {
      daymonday,
      daytuesday,
      daywednesday,
      daythursday,
      dayfriday,
      daysaturday,
      daysunday,
    } = this.state;
    this.setState({ weekday: `${daymonday} ${daytuesday} ${daywednesday} ${daywednesday} ${daythursday} ${dayfriday} ${daysaturday} ${daysunday}` });


    // saves if component has a chance to unmount
    window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
    this.saveStateToLocalStorage();
  }

  render() {
    const {
      stepOneFrom,
      stepTwoFrom,
      stepThreeFrom,
      showCheckBoxesClass,
      genderclass,
      specializationclass,
      treatmentclass,
      cityclass,
      regnumberclass,
      regcouncilclass,
      regyearclass,
      degreeclass,
      collegeclass,
      completionyearclass,
      experienceclass,
      establishmentclass,
      establishmentnameclass,
      establishmentcityclass,
      establishmentlocalityclass,
      medicalregproofdocumentclass,
      identityproofdocumentclass,
      addressnameclass,
      weekdayClass,
      starttimeclass,
      endtimeclass,
      sessiontimeclass,
      establishmenthoursclass,
      consultationfeesclass,
      establishmentlocationclass,
      resultclass,
      name,
      gender,
      specialization,
      treatment,
      treatmentForDogs,
      treatmentForCats,
      treatmentForBirds,
      treatmentForFish,
      treatmentForSmallPets,
      treatmentForFarmAnimals,
      treatmentForWildAnimals,
      city,
      regnumber,
      regcouncil,
      regyear,
      degree,
      college,
      completionyear,
      experience,
      establishment,
      establishmentname,
      establishmentcity,
      establishmentlocality,
      medicalregproofdocument,
      identityproofdocument,
      userPhone,
      userEmail,
      addressname,
      daymonday,
      daytuesday,
      daywednesday,
      daythursday,
      dayfriday,
      daysaturday,
      daysunday,
      starttime,
      endtime,
      sessiontime,
      consultationfees,
      establishmenthours,
      establishmentlocation,
      result,
      latitude,
      longitude,
    } = this.state;

    const {
      history,
      serviceData,
      checkRegisteredData,
      checkRegisteredLoading,
      registeredServiceLoading,
    } = this.props;

    let medicalregproofdocumentPreview;
    let medicalregproofdocumentPreviewImg;
    let identityproofdocumentPreview;
    let identityproofdocumentPreviewImg;
    const backButton = '<<  Back';
    const nextButton = 'Continue  >>';

    if (medicalregproofdocument) {
      if (medicalregproofdocument.name) {
        medicalregproofdocumentPreview = medicalregproofdocument.name;
        const getDocName = medicalregproofdocument.name;
        const docLength = getDocName.length;
        const point = getDocName.lastIndexOf('.');
        const getExtensionFile = getDocName.substring(point, docLength);
        const lowCaseExtensionFile = getExtensionFile.toLowerCase();
        if (lowCaseExtensionFile === '.jpg' || lowCaseExtensionFile === '.png') {
          medicalregproofdocumentPreviewImg = URL.createObjectURL(medicalregproofdocument);
        }
        if (lowCaseExtensionFile === '.pdf') {
          medicalregproofdocumentPreviewImg = pdf;
        }
      }
    }

    if (identityproofdocument) {
      if (identityproofdocument.name) {
        identityproofdocumentPreview = identityproofdocument.name;
        const getDocName = identityproofdocument.name;
        const docLength = getDocName.length;
        const point = getDocName.lastIndexOf('.');
        const getExtensionFile = getDocName.substring(point, docLength);
        const lowCaseExtensionFile = getExtensionFile.toLowerCase();
        if (lowCaseExtensionFile === '.jpg' || lowCaseExtensionFile === '.png') {
          identityproofdocumentPreviewImg = URL.createObjectURL(identityproofdocument);
        }
        if (lowCaseExtensionFile === '.pdf') {
          identityproofdocumentPreviewImg = pdf;
        }
      }
    }

    if (registeredServiceLoading === true || registeredServiceLoading === false) {
      sessionStorage.removeItem('viewedCheckRegisteredData');
      sessionStorage.removeItem('viewedCheckRegisteredLoading');

      if (!(sessionStorage.getItem('viewedCheckRegisteredData')) && !(sessionStorage.getItem('viewedCheckRegisteredLoading'))) {
        const getServiceData = JSON.stringify(serviceData);
        sessionStorage.setItem('viewedServiceData', getServiceData);

        const getRegisteredServiceLoading = JSON.stringify(registeredServiceLoading);
        sessionStorage.setItem('viewedRegisteredServiceLoading', getRegisteredServiceLoading);
      }


      if (sessionStorage.getItem('viewedServiceData') && sessionStorage.getItem('viewedRegisteredServiceLoading')) {
        history.push('/register-services-response');
      }
    }

    if (checkRegisteredLoading === true) {
      sessionStorage.removeItem('viewedServiceData');
      sessionStorage.removeItem('viewedRegisteredServiceLoading');

      if (!(sessionStorage.getItem('viewedServiceData')) && !(sessionStorage.getItem('viewedRegisteredServiceLoading'))) {
        const getcheckRegisteredData = JSON.stringify(checkRegisteredData);
        sessionStorage.setItem('viewedCheckRegisteredData', getcheckRegisteredData);

        const getcheckRegisteredLoading = JSON.stringify(checkRegisteredLoading);
        sessionStorage.setItem('viewedCheckRegisteredLoading', getcheckRegisteredLoading);
      }

      if (sessionStorage.getItem('viewedCheckRegisteredData') && sessionStorage.getItem('viewedCheckRegisteredLoading')) {
        history.push('/register-services-response');
      }
    }

    return (
      <div>
        {/* Setting background for Login Component */}
        <Helmet>
          <style>{'body { background-color: rgb(8, 119, 119); }'}</style>
        </Helmet>

        {localStorage.getItem('token')
         && localStorage.getItem('lastname')
         && localStorage.getItem('firstname')
         && localStorage.getItem('email')
         && localStorage.getItem('phone')
          ? stepOneFrom
          && checkRegisteredLoading === false
            ? (
              <div>
                <HeaderMenu sendProps={this.props} />
                <div className="form-services-container">

                  <div className="form-desc">
                    <h1>Pets world are looking for Doctors like you.</h1>
                  </div>

                  <div>

                    <div className="form-desc">
                      <h3 className="form-title">
                        <span className="form-user-name">
                          {localStorage.getItem('lastname')}
                        </span>
                      's Person Details
                      </h3>
                    </div>

                    <div>
                      <span className="form-steps"> Step <span className="form-steps-current"> 01 </span> </span>
                    </div>
                    <br />

                    <span className="form-labels">Name</span>
                    <div className="flex-form">
                      <input
                        id="status"
                        type="text"
                        name="text"
                        className="flex-pre-input"

                        value="Dr. / Mr. / Ms."
                        onChange={() => { }}
                      />

                      <input
                        id="name"
                        type="name"
                        name="Name"
                        className="flex-input"

                        value={name}
                        onChange={() => { }}
                      />
                    </div>

                    <div>
                      <div className="form-one-radio">

                        <div className="form-labels">Gender</div>

                        <label className={`${genderclass} form-radio-gender form-radio-male`}>
                          <input
                            id="gender"
                            type="radio"
                            name="gender"

                            value="male"
                            checked={gender === 'male'}
                            onChange={(id) => this.handleChange(id)}
                          />
                        male
                        </label>

                        <label className={`${genderclass} form-radio-gender form-radio-female`}>
                          <input
                            id="gender"
                            type="radio"
                            name="gender"

                            value="female"
                            checked={gender === 'female'}
                            onChange={(id) => this.handleChange(id)}
                          />
                        female
                        </label>

                      </div>
                    </div>

                    <span className="form-labels">Phone Number</span>
                    <div className="flex-form">
                      <input
                        type="phone"
                        name="userPhone"
                        className="unflex-input"

                        value={userPhone}
                        onChange={() => { }}
                      />
                    </div>

                    <span className="form-note-desc">Note: Pet calls will be redirected to this number. You can edit it later.</span>
                    <br />
                    <br />

                    <span className="form-labels">Email Address</span>
                    <div className="flex-form">
                      <input
                        type="email"
                        name="userEmail"
                        className="unflex-input"

                        value={userEmail}
                        onChange={() => { }}
                      />
                    </div>

                    <div>
                      <span className="form-labels">City</span>
                      <select className={`${cityclass} form-one-fields form-one-select`} id="city" onChange={(id) => this.handleChange(id)} value={city}>
                        <option value="">Select city</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Banalore">Banalore</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <span className="form-labels">Street Address</span>
                    <div className="flex-form">
                      <input
                        type="address"
                        name="address"
                        id="addressname"
                        placeholder="Type current address or Detect address"
                        className={`${addressnameclass} flex-pre-image`}

                        value={addressname}
                        onChange={(id) => this.handleChange(id)}
                      />
                      <img src={location} alt="detector" onClick={() => { this.getLocation(); }} />
                    </div>

                    <div className="map">
                      <GoogleMap
                        style={mapStyles}
                        bootstrapURLKeys={{ key: 'AIzaSyAI38nI4lmagfKGwHYVRyjJm8420-nJ_aw' }}
                        center={{ lat: latitude, lng: longitude }}
                        zoom={16}
                      >
                        <Marker
                          lat={latitude}
                          lng={longitude}
                        />
                      </GoogleMap>
                    </div>

                  </div>

                  <div>
                    <div className="form-desc">
                      <h3 className="form-title">
                        <span className="form-user-name">
                          {localStorage.getItem('lastname')}
                        </span>
                          's Education Qualification
                      </h3>
                    </div>

                    <div>
                      <span className="form-steps"> Step <span className="form-steps-current"> 02 </span> </span>
                    </div>
                    <br />

                    <span className="form-labels">Degree</span>
                    <div className="flex-form">
                      <input
                        type="text"
                        id="degree"
                        name="degree"
                        placeholder="Type degree name"
                        className={`${degreeclass} unflex-input`}

                        value={degree}
                        onChange={(id) => this.handleChange(id)}
                      />
                    </div>

                    <span className="form-labels">College/institute</span>
                    <div className="flex-form">
                      <input
                        type="text"
                        id="college"
                        name="college"
                        placeholder="Type college/ institute name"
                        className={`${collegeclass} unflex-input`}

                        value={college}
                        onChange={(id) => this.handleChange(id)}
                      />
                    </div>

                    <span className="form-labels">Year of completion</span>
                    <div className="flex-form">
                      <input
                        type="text"
                        id="completionyear"
                        name="completionyear"
                        placeholder="Type year of completion"
                        className={`${completionyearclass} unflex-input`}

                        value={completionyear}
                        onChange={(id) => this.handleChange(id)}
                      />
                    </div>


                    <span className="form-labels">Specialization</span>
                    <div className="flex-form">
                      <input
                        type="text"
                        id="specialization"
                        name="specialization"
                        className={`${specializationclass} unflex-input`}
                        placeholder="Please enter specialization"

                        value={specialization}
                        onChange={(id) => this.handleChange(id)}
                      />
                    </div>

                    <div>
                      <span className="form-labels">Treatment of animals</span>
                      <div className="form-one-mult-select">
                        <div className="form-one-select-box" onClick={(key) => { this.showCheckBoxes(key); this.updateSpecialization(key); }}>
                          <select className={`${treatmentclass} form-one-fields form-one-select`}>
                            <option>{treatment || 'Selected animals'}</option>
                          </select>
                          <div className="form-one-over-Select" />
                        </div>
                        <div className={`form-one-hide-check-box ${showCheckBoxesClass}`}>
                          <label>
                            <input
                              checked={treatmentForDogs}
                              id="treatmentForDogs"
                              type="checkbox"
                              value="Dogs"
                              onChange={(id) => this.handleCheckSpecialization(id)}
                            />
                          Dogs
                          </label>
                          <label>
                            <input
                              checked={treatmentForCats}
                              id="treatmentForCats"
                              type="checkbox"
                              value="Cats"
                              onChange={(id) => this.handleCheckSpecialization(id)}
                            />
                          Cats
                          </label>
                          <label>
                            <input
                              checked={treatmentForBirds}
                              id="treatmentForBirds"
                              type="checkbox"
                              value="Birds"
                              onChange={(id) => this.handleCheckSpecialization(id)}
                            />
                          Birds
                          </label>
                          <label>
                            <input
                              checked={treatmentForFish}
                              id="treatmentForFish"
                              type="checkbox"
                              value="Fish"
                              onChange={(id) => this.handleCheckSpecialization(id)}
                            />
                          Fish
                          </label>
                          <label>
                            <input
                              checked={treatmentForSmallPets}
                              id="treatmentForSmallPets"
                              type="checkbox"
                              value="Small Pets"
                              onChange={(id) => this.handleCheckSpecialization(id)}
                            />
                          Small Pets
                          </label>
                          <label>
                            <input
                              checked={treatmentForFarmAnimals}
                              id="treatmentForFarmAnimals"
                              type="checkbox"
                              value="Farm Animals"
                              onChange={(id) => this.handleCheckSpecialization(id)}
                            />
                          Farm Animals
                          </label>
                          <label>
                            <input
                              checked={treatmentForWildAnimals}
                              id="treatmentForWildAnimals"
                              type="checkbox"
                              value="Wild Animals"
                              onChange={(id) => this.handleCheckSpecialization(id)}
                            />
                          Wild Animals
                          </label>
                        </div>

                      </div>
                    </div>

                    <span className="form-labels">Years of experience</span>
                    <div className="flex-form">
                      <input
                        type="text"
                        id="experience"
                        name="experience"
                        placeholder="Type year/s of experience"
                        className={`${experienceclass} unflex-input`}

                        value={experience}
                        onChange={(id) => this.handleChange(id)}
                      />
                    </div>

                  </div>

                  <div>

                    <div className="register-services-error">
                      {result}
                    </div>

                  </div>

                  <div className="form-buttons">

                    <button
                      type="submit"
                      className="form-one-fields form-back-button"
                      onClick={(key) => { this.unTriggerStepTwoButton(key); }}
                    >
                      {backButton}
                    </button>

                    <button
                      type="submit"
                      className="form-one-fields form-proceed-button"
                      onClick={(key) => { this.triggerStepTwoButton(key); }}
                    >
                      {nextButton}
                    </button>

                  </div>

                </div>

              </div>
            )
            : stepTwoFrom
            && checkRegisteredLoading === false
              ? (
                <div>
                  <HeaderMenu sendProps={this.props} />
                  <div className="form-services-container">

                    <div className="form-desc">
                      <h1>Pets world are looking for Doctors like you.</h1>
                    </div>

                    <div>

                      <div className="form-desc">
                        <h3 className="form-title">
                          <span className="form-user-name">
                            {localStorage.getItem('lastname')}
                          </span>
                        's Medical Registration
                        </h3>
                      </div>

                      <div>
                        <span className="form-steps"> Step <span className="form-steps-current"> 03 </span> </span>
                      </div>
                      <br />

                      <span className="form-labels">Registration number</span>
                      <div className="flex-form">
                        <input
                          type="text"
                          id="regnumber"
                          name="regnumber"
                          placeholder="Type registration number"
                          className={`${regnumberclass} unflex-input`}

                          value={regnumber}
                          onChange={(id) => this.handleChange(id)}
                        />
                      </div>

                      <span className="form-labels">Registration council</span>
                      <div className="flex-form">
                        <input
                          type="text"
                          id="regcouncil"
                          name="regcouncil"
                          placeholder="Type registration council name"
                          className={`${regcouncilclass} unflex-input`}

                          value={regcouncil}
                          onChange={(id) => this.handleChange(id)}
                        />
                      </div>

                      <span className="form-labels">Registration year</span>
                      <div className="flex-form">
                        <input
                          type="text"
                          id="regyear"
                          name="regyear"
                          placeholder="Type registration year"
                          className={`${regyearclass} unflex-input`}

                          value={regyear}
                          onChange={(id) => this.handleChange(id)}
                        />
                      </div>

                    </div>

                    <div>

                      <div className="form-desc">
                        <h3 className="form-title">
                          <span className="form-user-name">
                            {localStorage.getItem('lastname')}
                          </span>
                            's Connect a practice
                        </h3>
                      </div>

                      <div>
                        <span className="form-steps"> Step <span className="form-steps-current"> 04 </span> </span>
                      </div>
                      <br />

                      <div>

                        <span className="form-labels">Choose own a establishment / visit a establishment</span>
                        <div className="form-radio">

                          <label className={`${establishmentclass} form-radio-lable`}>
                            <input
                              type="radio"
                              id="establishment"
                              name="establishment"
                              checked={establishment === 'owner stablishment'}
                              value="owner stablishment"
                              onChange={(id) => this.handleChange(id)}
                            />
                              own establishment
                          </label>

                          <div className="form-radio-border" />

                          <label className={`${establishmentclass} form-radio-lable`}>
                            <input
                              type="radio"
                              id="establishment"
                              name="establishment"
                              checked={establishment === 'visited establishment'}
                              value="visited establishment"
                              onChange={(id) => this.handleChange(id)}
                            />
                              visited establishment
                          </label>

                        </div>

                      </div>

                    </div>

                    <div>

                      <div className="form-desc">
                        <h3 className="form-title">
                          <span className="form-user-name">
                            {localStorage.getItem('lastname')}
                          </span>
                              's Establishment Basic Details
                        </h3>
                      </div>

                      <div>
                        <span className="form-steps"> Step <span className="form-steps-current"> 05 </span> </span>
                      </div>
                      <br />

                      <span className="form-labels">Establishment name</span>
                      <div className="flex-form">
                        <input
                          type="text"
                          id="establishmentname"
                          name="establishmentname"
                          placeholder="Type establishment name"
                          className={`${establishmentnameclass} unflex-input`}

                          value={establishmentname}
                          onChange={(id) => this.handleChange(id)}
                        />
                      </div>

                      <span className="form-labels">Establishment City</span>
                      <div className="flex-form">
                        <input
                          type="text"
                          id="establishmentcity"
                          name="establishmentcity"
                          placeholder="Type establishment city name"
                          className={`${establishmentcityclass} unflex-input`}

                          value={establishmentcity}
                          onChange={(id) => this.handleChange(id)}
                        />
                      </div>

                      <span className="form-labels">Establishment Locallity</span>
                      <div className="flex-form">
                        <input
                          type="text"
                          id="establishmentlocality"
                          name="establishmentlocality"
                          placeholder="Type establishment locality name"
                          className={`${establishmentlocalityclass} unflex-input`}

                          value={establishmentlocality}
                          onChange={(id) => this.handleChange(id)}
                        />
                      </div>

                    </div>

                    <div>

                      <div className="form-desc">
                        <h3 className="form-title">
                          <span className="form-user-name">
                            {establishmentname}
                          </span>
                          's Establishment Timings
                        </h3>
                      </div>

                      <div>
                        <span className="form-steps"> Step <span className="form-steps-current"> 06 </span> </span>
                      </div>
                      <br />

                      <div className={`${weekdayClass} weekDays-selector`}>
                        <input
                          id="daymonday"
                          type="checkbox"
                          name="daymonday"

                          value="Monday"
                          checked={daymonday}
                          onChange={(id) => this.handleCheckDays(id)}
                        />
                        <label htmlFor="daymonday">Mon</label>
                        <input
                          id="daytuesday"
                          type="checkbox"
                          name="daytuesday"

                          value="Tuesday"
                          checked={daytuesday}
                          onChange={(id) => this.handleCheckDays(id)}
                        />
                        <label htmlFor="daytuesday">Tue</label>
                        <input
                          id="daywednesday"
                          type="checkbox"
                          name="daywednesday"

                          value="Wednesday"
                          checked={daywednesday}
                          onChange={(id) => this.handleCheckDays(id)}
                        />
                        <label htmlFor="daywednesday">Wed</label>
                        <input
                          id="daythursday"
                          type="checkbox"
                          name="daythursday"

                          value="Thursday"
                          checked={daythursday}
                          onChange={(id) => this.handleCheckDays(id)}
                        />
                        <label htmlFor="daythursday">Thu</label>
                        <input
                          id="dayfriday"
                          type="checkbox"
                          name="dayfriday"

                          value="Friday"
                          checked={dayfriday}
                          onChange={(id) => this.handleCheckDays(id)}
                        />
                        <label htmlFor="dayfriday">Fri</label>
                        <input
                          id="daysaturday"
                          type="checkbox"
                          name="daysaturday"

                          value="Saturday"
                          checked={daysaturday}
                          onChange={(id) => this.handleCheckDays(id)}
                        />
                        <label htmlFor="daysaturday">Sat</label>
                        <input
                          id="daysunday"
                          type="checkbox"
                          name="daysunday"

                          value="Sunday"
                          checked={daysunday}
                          onChange={(id) => this.handleCheckDays(id)}
                        />
                        <label htmlFor="daysunday">Sun</label>
                      </div>
                      <br />

                      <span className="form-labels">Start Time</span>
                      <div className="flex-form">
                        <input
                          type="text"
                          id="starttime"
                          name="starttime"
                          placeholder="session start time"
                          className={`${starttimeclass} unflex-input`}
                          onFocus={(e) => { e.target.type = 'time'; }}

                          value={starttime}
                          onChange={(id) => this.handleChange(id)}
                        />
                      </div>

                      <span className="form-labels">End Time</span>
                      <div className="flex-form">
                        <input
                          type="text"
                          id="endtime"
                          name="endtime"
                          placeholder="session end time"
                          className={`${endtimeclass} unflex-input`}
                          onFocus={(e) => { e.target.type = 'time'; }}

                          value={endtime}
                          onChange={(id) => this.handleChange(id)}
                        />
                      </div>

                      <div>
                        <span className="form-labels">Client Interval Session</span>
                        <select className={`${sessiontimeclass} form-one-fields form-one-select`} id="sessiontime" onChange={(id) => this.handleChange(id)} value={sessiontime}>
                          <option value="">Session Time</option>
                          <option value="15 Mins">15 Mins</option>
                          <option value="20 Mins">20 Mins</option>
                          <option value="30 Mins">30 Mins</option>
                          <option value="40 Mins">40 Mins</option>
                          <option value="45 Mins">45 Mins</option>
                          <option value="1 Hour">1 Hour</option>
                        </select>
                      </div>


                    </div>

                    <div>

                      <div className="form-desc">
                        <h3 className="form-title">
                          <span className="form-user-name">
                            {localStorage.getItem('lastname')}
                          </span>
                                              's Details consultant doctor
                        </h3>
                      </div>

                      <div>
                        <span className="form-steps"> Step <span className="form-steps-current"> 07 </span> </span>
                      </div>
                      <br />

                      <span className="form-labels">Consultation fees</span>
                      <div className="flex-form">
                        <input
                          className={`${consultationfeesclass} flex-pre-input`}

                          value="Rs."
                          onChange={() => { }}
                        />

                        <input
                          type="text"
                          id="consultationfees"
                          name="consultationfees"
                          placeholder="Type consultation fee"
                          className={`${consultationfeesclass} flex-input`}

                          value={consultationfees}
                          onChange={(id) => this.handleChange(id)}
                        />
                      </div>

                      <div>
                        <span className="form-labels">Doctor's hours.</span>
                        <div className="form-radio form-note">

                          <label className={`${establishmenthoursclass} form-radio-lable`}>
                            <input
                              type="radio"
                              id="establishmenthours"
                              name="establishmenthours"
                              value="same as establishment hours"

                              onChange={(id) => this.handleChange(id)}
                              checked={establishmenthours === 'same as establishment hours'}
                            />
                                            Same as establishment hours
                          </label>

                          <div className="form-radio-border" />

                          <label className={`${establishmenthoursclass} form-radio-lable`}>
                            <input
                              type="radio"
                              id="establishmenthours"
                              name="establishmenthours"
                              value="different from establishment hours"

                              onChange={(id) => this.handleChange(id)}
                              checked={establishmenthours === 'different from establishment hours'}
                            />
                                            Different from establishment hours
                          </label>

                        </div>
                        <span className="form-note-desc">Note: You can add more doctors later.</span>
                        <br />
                        <br />
                      </div>

                    </div>

                    <div>

                      <div className="form-desc">
                        <h3 className="form-title">
                          <span className="form-user-name">
                            {establishmentname}
                          </span>
                          's Establishment Location
                        </h3>
                      </div>

                      <div>
                        <span className="form-steps"> Step <span className="form-steps-current"> 08 </span> </span>
                      </div>
                      <br />

                      <span className="form-labels">Establishment location</span>
                      <div className="flex-form">
                        <input
                          type="address"
                          name="establishmentlocation"
                          id="establishmentlocation"
                          placeholder="Type establishment location or Detect location"
                          className={`${establishmentlocationclass} flex-pre-image`}

                          value={establishmentlocation}
                          onChange={(id) => this.handleChange(id)}
                        />
                        <img src={location} alt="detector" onClick={() => { this.getEstablishmentLocation(); }} />
                      </div>

                      <div className="map">
                        <GoogleMap
                          style={mapStyles}
                          bootstrapURLKeys={{ key: 'AIzaSyAI38nI4lmagfKGwHYVRyjJm8420-nJ_aw' }}
                          center={{ lat: latitude, lng: longitude }}
                          zoom={16}
                        >
                          <Marker
                            lat={latitude}
                            lng={longitude}
                          />
                        </GoogleMap>
                      </div>

                    </div>

                    <div className="register-services-error">
                      {result}
                    </div>

                    <div className="form-buttons">

                      <button
                        type="submit"
                        className="form-one-fields form-back-button"
                        onClick={(key) => { this.unTriggerStepThreeButton(key); }}
                      >
                        {backButton}
                      </button>

                      <button
                        type="submit"
                        className="form-one-fields form-proceed-button"
                        onClick={(key) => { this.triggerStepThreeButton(key); }}
                      >
                        {nextButton}
                      </button>

                    </div>

                  </div>

                </div>
              )
              : stepThreeFrom
                    && checkRegisteredLoading === false
                ? (
                  <div>
                    <HeaderMenu sendProps={this.props} />
                    <div className="form-services-container">

                      <div className="form-desc">
                        <h1>Pet's world are looking for Doctors like you.</h1>
                      </div>

                      <div>

                        <div className="form-desc">
                          <h3 className="form-title">
                            <span className="form-user-name">
                              {establishmentname}
                            </span>
                                's Medical Registration Proof
                          </h3>
                        </div>

                        <div>
                          <span className="form-steps"> Step <span className="form-steps-current"> 09 </span> </span>
                        </div>
                        <br />

                        <div>
                          <div className={`${medicalregproofdocumentclass} form-file`}>

                            <div>
                              <input
                                type="file"
                                id="medicalregproofdocument"
                                name="medicalregproofdocument"
                                className="form-file-input"

                                onChange={(id) => this.handleChange(id)}
                              />
                            </div>

                            <div className={`${medicalregproofdocumentclass} form-preview`}>
                              {medicalregproofdocumentPreview || 'Please upload file'}
                              {
                                      medicalregproofdocumentPreviewImg
                                        ? (<img src={medicalregproofdocumentPreviewImg} alt="documeent" />)
                                        : null
                                    }
                            </div>

                          </div>
                        </div>

                        <div className="paragraph-one">
                          <p>Please prepare and upload your medical registration proof document. Only licensed and genuine doctors are listed.</p>
                          <p> Acceptable document(jpg, png and pdf with a good name).</p>
                          <p>● Medical Registration Certification</p>
                          <p>● 987654567890 Delhi Medical Council</p>
                        </div>

                      </div>

                      <div>

                        <div className="form-desc">
                          <h3 className="form-title">
                            <span className="form-user-name">
                              {localStorage.getItem('lastname')}
                            </span>
                                  's Identity Proof
                          </h3>
                        </div>

                        <div>
                          <span className="form-steps"> Step <span className="form-steps-current"> 10 </span> </span>
                        </div>
                        <br />

                        <div>
                          <div className={`${identityproofdocumentclass} form-file`}>

                            <div>
                              <input
                                type="file"
                                id="identityproofdocument"
                                name="identityproofdocument"
                                className="form-file-input"

                                onChange={(id) => this.handleChange(id)}
                              />
                            </div>

                            <div className={`${identityproofdocumentclass} form-preview`}>
                              {identityproofdocumentPreview || 'Please upload file'}
                              {
                                identityproofdocumentPreviewImg
                                  ? (<img src={identityproofdocumentPreviewImg} alt="documeent" />)
                                  : null
                              }
                            </div>

                          </div>
                        </div>

                        <div className="paragraph-one">
                          <p>Please prepare and upload your identity proof to ensure that the ownership of your profile remains with only you.</p>
                          <p> Acceptable document(jpg, png and pdf with a good name).</p>
                          <p>● Voter Card</p>
                          <p>● Aadhar Card</p>
                          <p>● Driving License</p>
                          <p>● Any other Govt ID</p>
                        </div>

                      </div>

                      <div className={`${resultclass} register-services-error`}>
                        {result}
                      </div>

                      <div className="form-buttons">
                        <button
                          type="submit"
                          className="form-one-fields form-back-button"
                          onClick={(key) => { this.unTriggerStepFourButton(key); }}
                        >
                          {backButton}
                        </button>
                        <button
                          type="submit"
                          className="form-one-fields form-proceed-button"
                          onClick={(key) => { this.triggerStepFourButton(key); }}
                        >Submit
                        </button>
                      </div>
                    </div>

                  </div>
                )
                : checkRegisteredLoading === false
                  ? (
                // ######################  This is step-one for registering doctor in Your-Highness system.
                    <div>
                      <HeaderMenu sendProps={this.props} />
                      <div className="form-services-container">

                        <div>

                          <h1>
                            Dr.
                            <span className="form-user-name">
                              {` ${sessionStorage.getItem('firstname')} ${localStorage.getItem('lastname')}, `}
                            </span>
                            Great Progress!!
                          </h1>

                          <p>
                          Pet Parents are ready to find you, Time to go live !!
                          </p>
                          <p className="form-guides-paragraph">
                          Part 1 : Profile Details
                          </p>
                          <p>
                          Doctor’s basic details and Qualification.
                          </p>

                        </div>

                        <div>
                          <button
                            type="submit"
                            className="form-guide-proceed-button"
                            onClick={(key) => { this.triggerStepOneButton(key); }}
                          >
                            Continue
                          </button>
                        </div>

                        <hr />

                        <div>

                          <p className="form-guides-paragraph">
                          Part 2:Professional Details
                          </p>
                          <p>
                          Establishment , Timings and Fee Details.
                          </p>

                        </div>

                        <hr />

                        <div>

                          <p className="form-guides-paragraph">
                          Part 3: Profile Verification
                          </p>
                          <p>
                          Medical Registration and Doctor Identity Proof.
                          </p>

                        </div>

                        <div className="form-guides-box">

                          <p>
                            Get in touch with Pet Parents at your Establishment or at their home.
                          </p>

                        </div>

                      </div>
                    </div>
                // ######################  This is step-one for registering doctor in Your-Highness system.
                  )
                  : (
                    <div>
                      <Helmet>
                        <style>{'body { background-color: #dadada; }'}</style>
                      </Helmet>
                    </div>
                  )

          : history.push('/login-services-account')}
      </div>
    );
  }
}

RegisterServices.defaultProps = {
  checkRegisteredLoading: null,
  registeredServiceLoading: null,
  history: {},
  serviceData: {},
  checkRegisteredData: {},
  registerCurrentService: PropTypes.func,
  checkCurrentRegisteredService: PropTypes.func,
};

RegisterServices.propTypes = {
  checkRegisteredLoading: PropTypes.bool,
  registeredServiceLoading: PropTypes.bool,
  history: PropTypes.shape(),
  serviceData: PropTypes.shape(),
  checkRegisteredData: PropTypes.shape(),
  registerCurrentService: PropTypes.func,
  checkCurrentRegisteredService: PropTypes.func,
};


const mapStateToProps = ({ registerServiceInitialState, checkRegisteredServiceTypesInitialState }) => ({
  registeredServiceLoading: registerServiceInitialState.registeredService,
  serviceData: registerServiceInitialState.data,

  checkRegisteredLoading: checkRegisteredServiceTypesInitialState.loading,
  checkRegisteredData: checkRegisteredServiceTypesInitialState.data
});

const mapDispatchToProps = (dispatch) => (
  {
    registerCurrentService: (token, data) => {
      dispatch(registerService(token, data));
    },

    checkCurrentRegisteredService: (token) => {
      dispatch(checkRegisteredService(token));
    },

  });


export default connect(mapStateToProps, mapDispatchToProps)(RegisterServices);

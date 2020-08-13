/**
* This is helper function to validate empty user login form.
* @param {object} state state object.
* @returns {object} data.
*/
const validatemptyLoginFields = (state) => {
  let emptyLoginFields;

  if (state.credential.length < 1 && state.password.length < 1) {
    emptyLoginFields = 'error';
    const emailclass = 'email-input';
    const passwordclass = 'password-input';
    return { emptyLoginFields, emailclass, passwordclass };
  }

  if (state.credential.length < 1) {
    emptyLoginFields = 'error';
    const emailclass = 'email-input';
    return { emptyLoginFields, emailclass };
  }

  if (state.password.length < 1) {
    emptyLoginFields = 'error';
    const passwordclass = 'password-input';
    return { emptyLoginFields, passwordclass };
  }


  emptyLoginFields = 'Loading...';
  return { emptyLoginFields };
};

/**
* This is helper function to validate empty master login form.
* @param {object} state state object.
* @returns {object} data.
*/
const validatemptyMasterLoginFields = (state) => {
  let emptyLoginFields;

  if (state.email.length < 1 && state.password.length < 1) {
    emptyLoginFields = 'error';
    const emailclass = 'master-email-input';
    const passwordclass = 'master-password-input';
    return { emptyLoginFields, emailclass, passwordclass };
  }

  if (state.email.length < 1) {
    emptyLoginFields = 'error';
    const emailclass = 'master-email-input';
    return { emptyLoginFields, emailclass };
  }

  if (state.password.length < 1) {
    emptyLoginFields = 'error';
    const passwordclass = 'master-password-input';
    return { emptyLoginFields, passwordclass };
  }


  emptyLoginFields = 'Loading...';
  return { emptyLoginFields };
};

/**
* This is helper function to validate empty a user register form-one.
* @param {object} state state object.
* @returns {object} data.
*/
const validatemptyRegisterFieldsOneRegistry = (state) => {
  let emptyRegiserFieldsOneRegistry;

  if (state.firstname.length < 1 && state.lastname.length < 1 && state.email.length < 1 && state.phone.length < 4) {
    emptyRegiserFieldsOneRegistry = 'error';
    const firstnameclass = 'name-input';
    const lastnameclass = 'name-input';
    const emailclass = 'email-input';
    const phoneclass = 'telephone-input';
    return { emptyRegiserFieldsOneRegistry, firstnameclass, lastnameclass, emailclass, phoneclass };
  }

  if (state.firstname.length < 1) {
    emptyRegiserFieldsOneRegistry = 'error';
    const firstnameclass = 'name-input';
    return { emptyRegiserFieldsOneRegistry, firstnameclass };
  }

  if (state.lastname.length < 1) {
    emptyRegiserFieldsOneRegistry = 'error';
    const lastnameclass = 'name-input';
    return { emptyRegiserFieldsOneRegistry, lastnameclass };
  }

  if (state.email.length < 1) {
    emptyRegiserFieldsOneRegistry = 'error';
    const emailclass = 'email-input';
    return { emptyRegiserFieldsOneRegistry, emailclass };
  }
  emptyRegiserFieldsOneRegistry = 'Loading...';
  return { emptyRegiserFieldsOneRegistry };
};

/**
* This is helper function to validate empty a user register form-two.
* @param {object} state state object.
* @returns {object} data.
*/
const validatemptyRegisterFieldsTwoRegistry = (state) => {
  let emptyRegiserFieldsTwoRegistry;

  if (state.password.length < 1 && state.confirmpassword.length < 1) {
    emptyRegiserFieldsTwoRegistry = 'error';
    const passwordclass = 'password-input';
    const confirmpasswordclass = 'confirm-password-input';
    return { emptyRegiserFieldsTwoRegistry, passwordclass, confirmpasswordclass };
  }
  if (state.password.length < 1) {
    emptyRegiserFieldsTwoRegistry = 'error';
    const passwordclass = 'password-input';
    return { emptyRegiserFieldsTwoRegistry, passwordclass };
  }

  if (state.confirmpassword.length < 1) {
    emptyRegiserFieldsTwoRegistry = 'error';
    const confirmpasswordclass = 'confirm-password-input';
    return { emptyRegiserFieldsTwoRegistry, confirmpasswordclass };
  }

  emptyRegiserFieldsTwoRegistry = 'Loading...';
  return { emptyRegiserFieldsTwoRegistry };
};

/**
* This is helper function to validate empty form for reset password.
* @param {object} state state object.
* @returns {object} data.
*/
const validatemptyResetLink = (state) => {
  let emptyEmailFields;

  if (state.email.length < 1) {
    emptyEmailFields = 'error';
    const emailclass = 'email-input';
    return { emptyEmailFields, emailclass };
  }

  emptyEmailFields = 'Loading...';
  return { emptyEmailFields };
};

// Validate register Services both EMPTY FIELDS and ERROR FIELDS

/**
* This is helper function to validate empty form-one for register service.
* @param {object} state state object.
* @returns {object} data.
*/
const validatemptyStepOneFrom = (state) => {
  let emptyStepOneFrom;
  let errorStepOneFrom;

  // Validate register Services EMPTY FIELDS

  if (state.gender.length < 1 && state.city.length < 1 && state.addressname.length < 1) {
    emptyStepOneFrom = 'error';
    errorStepOneFrom = 'Empty fields found';
    const genderclass = 'gender-input';
    const cityclass = 'city-input';
    const addressnameclass = 'addressname-input';
    return { emptyStepOneFrom, errorStepOneFrom, genderclass, cityclass, addressnameclass };
  }


  // Validate register Services EMPTY FIELDS
  if (state.gender.length < 1) {
    emptyStepOneFrom = 'error';
    const genderclass = 'gender-input';
    errorStepOneFrom = 'Please gender is required';
    return { emptyStepOneFrom, errorStepOneFrom, genderclass };
  }

  // Validate register Services EMPTY FIELDS
  if (state.city.length < 1) {
    emptyStepOneFrom = 'error';
    const cityclass = 'city-input';
    errorStepOneFrom = 'Please city is required';
    return { emptyStepOneFrom, errorStepOneFrom, cityclass };
  }

  // Validate register Services ERROR FIELDS
  if (state.city.length < 3) {
    emptyStepOneFrom = 'error';
    const cityclass = 'city-input';
    errorStepOneFrom = 'Please city is required';
    return { emptyStepOneFrom, errorStepOneFrom, cityclass };
  }

  if (state.addressname === undefined || state.addressname.length < 1) {
    emptyStepOneFrom = 'error';
    const addressnameclass = 'addressname-input';
    return { emptyStepOneFrom, addressnameclass };
  }

  if (state.addressname.length < 3 || state.addressname.length > 50) {
    emptyStepOneFrom = 'error';
    const addressnameclass = 'addressname-input';
    errorStepOneFrom = 'Please  real address name is required';
    return { errorStepOneFrom, emptyStepOneFrom, addressnameclass };
  }

  emptyStepOneFrom = 'Loading...';
  return { emptyStepOneFrom };
};

/**
* This is helper function to validate empty form-two for register service.
* @param {object} state state object.
* @returns {object} data.
*/
const validatemptyStepTwoFrom = (state) => {
  let emptyStepTwoFrom;
  let errorStepTwoFrom;


  // Validate register Services EMPTY FIELDS
  if (state.regnumber.length < 1 && state.regcouncil.length < 1 && state.regyear.length < 1) {
    emptyStepTwoFrom = 'error';
    errorStepTwoFrom = 'Empty fields found';
    const regnumberclass = 'regnumber-input';
    const regcouncilclass = 'regcouncil-input';
    const regyearclass = 'regyear-input';
    return { emptyStepTwoFrom, errorStepTwoFrom, regnumberclass, regcouncilclass, regyearclass };
  }


  // Validate register Services EMPTY FIELDS
  if (state.regnumber.length < 1) {
    emptyStepTwoFrom = 'error';
    const regnumberclass = 'regnumber-input';
    return { emptyStepTwoFrom, regnumberclass };
  }

  // Validate register Services ERROR FIELDS
  if (!/^[0-9]+$/.test(state.regnumber) || state.regnumber.length < 3 || state.regnumber.length > 30) {
    emptyStepTwoFrom = 'error';
    const regnumberclass = 'regnumber-input';
    errorStepTwoFrom = 'Please  Real registration number is required';
    return { errorStepTwoFrom, emptyStepTwoFrom, regnumberclass };
  }

  // Validate register Services EMPTY FIELDS
  if (state.regcouncil.length < 1) {
    emptyStepTwoFrom = 'error';
    const regcouncilclass = 'regcouncil-input';
    return { emptyStepTwoFrom, regcouncilclass };
  }

  // Validate register Services ERROR FIELDS
  if (state.regcouncil.length < 3 || state.regcouncil.length > 30) {
    emptyStepTwoFrom = 'error';
    const regcouncilclass = 'regcouncil-input';
    errorStepTwoFrom = 'Please  real registration council is required';
    return { errorStepTwoFrom, emptyStepTwoFrom, regcouncilclass };
  }


  // Validate register Services EMPTY FIELDS
  if (state.regyear.length < 1) {
    emptyStepTwoFrom = 'error';
    const regyearclass = 'regyear-input';
    return { emptyStepTwoFrom, regyearclass };
  }


  // Validate register Services ERROR FIELDS
  if (!/^[0-9]+$/.test(state.regyear) || state.regyear < 1900 || state.regyear > new Date().getFullYear()) {
    emptyStepTwoFrom = 'error';
    const regyearclass = 'regyear-input';
    errorStepTwoFrom = 'Please  real registration year is required';
    return { errorStepTwoFrom, emptyStepTwoFrom, regyearclass };
  }

  emptyStepTwoFrom = 'Loading...';
  return { emptyStepTwoFrom };
};

/**
* This is helper function to validate empty form-three for register service.
* @param {object} state state object.
* @returns {object} data.
*/
const validatemptyStepThreeFrom = (state) => {
  let emptyStepThreeFrom;
  let errorStepThreeFrom;
  const removeSpaceOnTreatment = state.treatment.toString().trim();
  if (state.degree.length < 1 && state.college.length < 1 && state.completionyear.length < 1 && state.specialization.length < 1 && removeSpaceOnTreatment.length < 1 && state.experience.length < 1) {
    emptyStepThreeFrom = 'error';
    errorStepThreeFrom = 'Empty fields found';
    const degreeclass = 'degree-input';
    const collegeclass = 'college-input';
    const completionyearclass = 'completionyear-input';
    const specializationclass = 'specialization-input';
    const treatmentclass = 'treatment-input';
    const experienceclass = 'experience-input';
    return { emptyStepThreeFrom, errorStepThreeFrom, degreeclass, collegeclass, completionyearclass, specializationclass, treatmentclass, experienceclass };
  }

  // Validate register Services EMPTY FIELDS
  if (state.degree.length < 1) {
    emptyStepThreeFrom = 'error';
    const degreeclass = 'degree-input';
    return { emptyStepThreeFrom, degreeclass };
  }

  // Validate register Services ERROR FIELDS
  if (state.degree.length < 10 || state.degree.length > 50) {
    emptyStepThreeFrom = 'error';
    const degreeclass = 'degree-input';
    errorStepThreeFrom = 'Please  real degree name is required';
    return { errorStepThreeFrom, emptyStepThreeFrom, degreeclass };
  }

  // Validate register Services EMPTY FIELDS
  if (state.college.length < 1) {
    emptyStepThreeFrom = 'error';
    const collegeclass = 'college-input';
    return { emptyStepThreeFrom, collegeclass };
  }

  // Validate register Services ERROR FIELDS
  if (state.college.length < 10 || state.college.length > 50) {
    emptyStepThreeFrom = 'error';
    const collegeclass = 'college-input';
    errorStepThreeFrom = 'Please  real college name is required';
    return { errorStepThreeFrom, emptyStepThreeFrom, collegeclass };
  }

  // Validate register Services EMPTY FIELDS
  if (state.completionyear.length < 1) {
    emptyStepThreeFrom = 'error';
    const completionyearclass = 'completionyear-input';
    return { emptyStepThreeFrom, completionyearclass };
  }

  // Validate register Services ERROR FIELDS
  if (!/^[0-9]+$/.test(state.completionyear) || state.completionyear < 1900 || state.completionyear > new Date().getFullYear()) {
    emptyStepThreeFrom = 'error';
    const completionyearclass = 'completionyear-input';
    errorStepThreeFrom = 'Please  real completion year is required';
    return { errorStepThreeFrom, emptyStepThreeFrom, completionyearclass };
  }

  // Validate register Services EMPTY FIELDS
  if (state.specialization.length < 1) {
    emptyStepThreeFrom = 'error';
    const specializationclass = 'specialization-input';
    return { emptyStepThreeFrom, specializationclass };
  }

  // Validate register Services ERROR FIELDS
  if (state.specialization.length < 3) {
    emptyStepThreeFrom = 'error';
    const specializationclass = 'specialization-input';
    errorStepThreeFrom = 'Please real specialization is required';
    return { errorStepThreeFrom, emptyStepThreeFrom, specializationclass };
  }

  // Validate register Services EMPTY FIELDS
  if (removeSpaceOnTreatment.length < 1) {
    emptyStepThreeFrom = 'error';
    const treatmentclass = 'treatment-input';
    errorStepThreeFrom = 'Please real treatment animals is required';
    return { emptyStepThreeFrom, errorStepThreeFrom, treatmentclass };
  }

  // Validate register Services ERROR FIELDS
  if (removeSpaceOnTreatment.length < 3) {
    emptyStepThreeFrom = 'error';
    const treatmentclass = 'treatment-input';
    errorStepThreeFrom = 'Please treatment animals is required';
    return { errorStepThreeFrom, emptyStepThreeFrom, treatmentclass };
  }

  // Validate register Services EMPTY FIELDS
  if (state.experience.length < 1) {
    emptyStepThreeFrom = 'error';
    const experienceclass = 'experience-input';
    return { emptyStepThreeFrom, experienceclass };
  }

  // Validate register Services ERROR FIELDS if (state.experience.length < 1) {
  if (!/^[0-9]+$/.test(state.experience) || state.experience > 100) {
    emptyStepThreeFrom = 'error';
    const experienceclass = 'experience-input';
    errorStepThreeFrom = 'Please  real experience year is required';
    return { errorStepThreeFrom, emptyStepThreeFrom, experienceclass };
  }

  // //////////////////////////////////////////////


  emptyStepThreeFrom = 'Loading...';
  return { emptyStepThreeFrom };
};

/**
* This is helper function to validate empty form-four for register service.
* @param {object} state state object.
* @returns {object} data.
*/
const validatemptyStepFourFrom = (state) => {
  let emptyStepFourFrom;
  let errorStepFourFrom;
  if (state.establishment.length < 1) {
    emptyStepFourFrom = 'error';
    errorStepFourFrom = 'Please establishment is required';
    const establishmentclass = 'establishment-input';
    return { emptyStepFourFrom, errorStepFourFrom, establishmentclass };
  }

  emptyStepFourFrom = 'Loading...';
  return { emptyStepFourFrom };
};

/**
* This is helper function to validate empty form-five for register service.
* @param {object} state state object.
* @returns {object} data.
*/
const validatemptyStepFiveFrom = (state) => {
  let emptyStepFiveFrom;
  let errorStepFiveFrom;

  // Validate register Services EMPTY FIELDS
  if (state.establishmentname.length < 1 && state.establishmentcity.length < 1 && state.establishmentlocality.length < 1) {
    emptyStepFiveFrom = 'error';
    errorStepFiveFrom = 'Empty fields found';
    const establishmentnameclass = 'establishmentname-input';
    const establishmentcityclass = 'establishmentcity-input';
    const establishmentlocalityclass = 'establishmentlocality-input';
    return { emptyStepFiveFrom, errorStepFiveFrom, establishmentnameclass, establishmentcityclass, establishmentlocalityclass };
  }

  // Validate register Services ERROR FIELDS
  if (state.establishmentname.length < 1 || state.establishmentname.length < 3 || state.establishmentname.length > 50) {
    emptyStepFiveFrom = 'error';
    const establishmentnameclass = 'establishmentname-input';
    errorStepFiveFrom = 'Please  real establishment name is required';
    return { errorStepFiveFrom, emptyStepFiveFrom, establishmentnameclass };
  }

  // Validate register Services ERROR FIELDS
  if (state.establishmentcity.length < 1 || state.establishmentcity.length < 3 || state.establishmentcity.length > 50) {
    emptyStepFiveFrom = 'error';
    const establishmentcityclass = 'establishmentcity-input';
    errorStepFiveFrom = 'Please  real establishment city is required';
    return { errorStepFiveFrom, emptyStepFiveFrom, establishmentcityclass };
  }

  // Validate register Services ERROR FIELDS
  if (state.establishmentlocality.length < 1 || state.establishmentlocality.length < 3 || state.establishmentlocality.length > 50) {
    emptyStepFiveFrom = 'error';
    const establishmentlocalityclass = 'establishmentlocality-input';
    errorStepFiveFrom = 'Please  real establishment locality is required';
    return { errorStepFiveFrom, emptyStepFiveFrom, establishmentlocalityclass };
  }

  emptyStepFiveFrom = 'Loading...';
  return { emptyStepFiveFrom };
};

/**
* This is helper function to validate empty form-six for register service.
* @param {object} state state object.
* @returns {object} data.
*/
const validatemptyStepSixFrom = (state) => {
  let emptyStepSixFrom;
  let errorStepSixFrom;

  // Validate register Services EMPTY FIELDS
  if (state.medicalregproofdocument === undefined || state.medicalregproofdocument.length < 1 || state.medicalregproofdocument.name === undefined) {
    emptyStepSixFrom = 'error';
    const medicalregproofdocumentclass = 'medicalregproofdocument-input';
    errorStepSixFrom = 'Please real medical registration proof document is required';
    return { errorStepSixFrom, emptyStepSixFrom, medicalregproofdocumentclass };
  }

  // Validate register Services ERROR FIELDS
  if (state.medicalregproofdocument.name) {
    if (state.medicalregproofdocument.name.length < 4) {
      emptyStepSixFrom = 'error';
      const medicalregproofdocumentclass = 'medicalregproofdocument-input';
      errorStepSixFrom = 'Please real medical registration proof document is required';
      return { errorStepSixFrom, emptyStepSixFrom, medicalregproofdocumentclass };
    }
    const getDocName = state.medicalregproofdocument.name;
    const docLength = getDocName.length;
    const point = getDocName.lastIndexOf('.');
    const getExtensionFile = getDocName.substring(point, docLength);
    const lowCaseExtensionFile = getExtensionFile.toLowerCase();
    if (lowCaseExtensionFile !== '.jpg' && lowCaseExtensionFile !== '.png' && lowCaseExtensionFile !== '.pdf') {
      emptyStepSixFrom = 'error';
      const medicalregproofdocumentclass = 'medicalregproofdocument-input';
      errorStepSixFrom = 'Please medical registration document format must be jpg, png or pdf ';
      return { errorStepSixFrom, emptyStepSixFrom, medicalregproofdocumentclass };
    }
  }

  emptyStepSixFrom = 'Loading...';
  return { emptyStepSixFrom };
};

/**
* This is helper function to validate empty form-seven for register service.
* @param {object} state state object.
* @returns {object} data.
*/
const validatemptyStepSevenFrom = (state) => {
  let emptyStepSevenFrom;
  let errorStepSevenFrom;

  // Validate register Services EMPTY FIELDS
  if (state.identityproofdocument === undefined || state.identityproofdocument.length < 1 || state.identityproofdocument.name === undefined) {
    emptyStepSevenFrom = 'error';
    const identityproofdocumentclass = 'identityproofdocument-input';
    errorStepSevenFrom = 'Please real identity proof document is required';
    return { errorStepSevenFrom, emptyStepSevenFrom, identityproofdocumentclass };
  }

  // Validate register Services ERROR FIELDS
  if (state.identityproofdocument.name) {
    if (state.identityproofdocument.name.length < 4) {
      emptyStepSevenFrom = 'error';
      const identityproofdocumentclass = 'identityproofdocument-input';
      errorStepSevenFrom = 'Please real identity proof document is required';
      return { errorStepSevenFrom, emptyStepSevenFrom, identityproofdocumentclass };
    }
    const getDocName = state.identityproofdocument.name;
    const docLength = getDocName.length;
    const point = getDocName.lastIndexOf('.');
    const getExtensionFile = getDocName.substring(point, docLength);
    const lowCaseExtensionFile = getExtensionFile.toLowerCase();
    if (lowCaseExtensionFile !== '.jpg' && lowCaseExtensionFile !== '.png' && lowCaseExtensionFile !== '.pdf') {
      emptyStepSevenFrom = 'error';
      const identityproofdocumentclass = 'identityproofdocument-input';
      errorStepSevenFrom = 'Please identity document format must be jpg, png or pdf ';
      return { errorStepSevenFrom, emptyStepSevenFrom, identityproofdocumentclass };
    }
  }

  emptyStepSevenFrom = 'Loading...';
  return { emptyStepSevenFrom };
};

/**
* This is helper function to validate empty form-ten for register service.
* @param {object} state state object.
* @returns {object} data.
*/
const validatemptyStepTenFrom = (state) => {
  let emptyStepTenFrom;
  let errorStepTenFrom;

  if (state.daymonday.length < 1 && state.daytuesday.length < 1 && state.daywednesday.length < 1 && state.daythursday.length < 1 && state.dayfriday.length < 1 && state.daysaturday.length < 1 && state.daysunday.length < 1 && state.starttime.length < 1 && state.endtime.length < 1 && state.sessiontime.length < 1) {
    emptyStepTenFrom = 'error';
    errorStepTenFrom = 'Empty fields detected';
    const weekdayClass = 'weekDays-input';
    const starttimeclass = 'starttime-input';
    const endtimeclass = 'endtime-input';
    const sessiontimeclass = 'sessiontime-input';
    return { emptyStepTenFrom, errorStepTenFrom, weekdayClass, starttimeclass, endtimeclass, sessiontimeclass };
  }

  if (state.daymonday.length < 1 && state.daytuesday.length < 1 && state.daywednesday.length < 1 && state.daythursday.length < 1 && state.dayfriday.length < 1 && state.daysaturday.length < 1 && state.daysunday.length < 1) {
    emptyStepTenFrom = 'error';
    const weekdayClass = 'weekDays-input';
    errorStepTenFrom = 'Please working day/s is required';
    return { errorStepTenFrom, emptyStepTenFrom, weekdayClass };
  }

  if (state.starttime.length < 1) {
    emptyStepTenFrom = 'error';
    const starttimeclass = 'starttime-input';
    errorStepTenFrom = 'Please start time is required';
    return { errorStepTenFrom, emptyStepTenFrom, starttimeclass };
  }

  if (state.endtime.length < 1) {
    emptyStepTenFrom = 'error';
    const endtimeclass = 'endtime-input';
    errorStepTenFrom = 'Please end time is required';
    return { errorStepTenFrom, emptyStepTenFrom, endtimeclass };
  }

  if (state.sessiontime.length < 1) {
    emptyStepTenFrom = 'error';
    const sessiontimeclass = 'sessiontime-input';
    errorStepTenFrom = 'Please session time is required';
    return { errorStepTenFrom, emptyStepTenFrom, sessiontimeclass };
  }

  emptyStepTenFrom = 'Loading...';
  return { emptyStepTenFrom };
};

/**
* This is helper function to validate empty form-eleven for register service.
* @param {object} state state object.
* @returns {object} data.
*/
const validatemptyStepElevenFrom = (state) => {
  let emptyStepElevenFrom;
  let errorStepElevenmFrom;

  if (state.consultationfees.length < 1 && state.establishmenthours.length < 1) {
    emptyStepElevenFrom = 'error';
    errorStepElevenmFrom = 'Empty fields detected';
    const establishmenthoursclass = 'establishmenthours-input';
    const consultationfeesclass = 'consultationfees-input';
    return { emptyStepElevenFrom, errorStepElevenmFrom, establishmenthoursclass, consultationfeesclass };
  }


  // Validate register Services EMPTY FIELDS
  if (state.consultationfees.length < 1) {
    emptyStepElevenFrom = 'error';
    const consultationfeesclass = 'consultationfees-input';
    errorStepElevenmFrom = 'Please  real consultation fees is required';
    return { emptyStepElevenFrom, errorStepElevenmFrom, consultationfeesclass };
  }

  // Validate register Services ERROR FIELDS
  if (!/^[0-9]+$/.test(state.consultationfees) || state.consultationfees.length > 50) {
    emptyStepElevenFrom = 'error';
    const consultationfeesclass = 'consultationfees-input';
    errorStepElevenmFrom = 'Please  real consultation fees is required';
    return { errorStepElevenmFrom, emptyStepElevenFrom, consultationfeesclass };
  }

  // Validate register Services EMPTY FIELDS
  if (state.establishmenthours.length < 1) {
    emptyStepElevenFrom = 'error';
    const establishmenthoursclass = 'establishmenthours-input';
    errorStepElevenmFrom = 'Please establishment hours is required';
    return { emptyStepElevenFrom, errorStepElevenmFrom, establishmenthoursclass };
  }

  emptyStepElevenFrom = 'Loading...';
  return { emptyStepElevenFrom };
};

/**
* This is helper function to validate additional formr for register service.
* @param {object} state state object.
* @returns {object} data.
*/
const validateElevenAdditionFrom = (state) => {
  let emptyAdditionFrom;
  let errorAdditionFrom;
  if (state.establishmentlocation.length < 1 || state.establishmentlocation.length < 3 || state.establishmentlocation.length > 50) {
    emptyAdditionFrom = 'error';
    errorAdditionFrom = 'Please establishment location is required';
    const establishmentlocationclass = 'establishmentlocation-input';
    return { emptyAdditionFrom, errorAdditionFrom, establishmentlocationclass };
  }

  emptyAdditionFrom = 'Loading...';
  return { emptyAdditionFrom };
};

/**
* This is helper function to validate both empty and error on search form.
* @param {object} state state object.
* @returns {object} data.
*/
const validatemptySearchForm = (state) => {
  let searchFormError;

  if (state.message.length < 10) {
    searchFormError = 'error';
    const searchFormErrorMessage = 'Please only meaningfully  message allowed';
    const messageClass = 'search-error';
    return { searchFormError, searchFormErrorMessage, messageClass };
  }

  if (state.message.length > 1000) {
    searchFormError = 'error';
    const searchFormErrorMessage = 'Please message can not over 1000 words';
    const messageClass = 'search-error';
    return { searchFormError, searchFormErrorMessage, messageClass };
  }

  searchFormError = 'Loading...';
  return { searchFormError };
};

/**
* This is helper function to validate both empty and error on shift form.
* @param {object} state state object.
* @returns {object} data.
*/
const validateShiftFrom = (state) => {
  let emptyShiftForm;


  if (state.reason.length < 1 && state.visitType.length < 1 && state.appointmentDate.length < 1 && state.appointmentStartTime.length < 1 && state.appointmentSessionTime.length < 1) {
    emptyShiftForm = 'error';
    const reasonClass = 'reason-input';
    const visittypeClass = 'visittype-input';
    const shiftdateClass = 'shiftdate-input';
    const sessiontimeClass = 'sessiontime-input';
    const shiftstarttimeClass = 'shiftstarttime-input';
    return { emptyShiftForm, reasonClass, visittypeClass, shiftdateClass, sessiontimeClass, shiftstarttimeClass, };
  }

  if (state.visitType.length < 1) {
    emptyShiftForm = 'error';
    const visittypeClass = 'visittype-input';
    return { emptyShiftForm, visittypeClass };
  }


  if (state.appointmentSessionTime.length < 1) {
    emptyShiftForm = 'error';
    const sessiontimeClass = 'sessiontime-input';
    return { emptyShiftForm, sessiontimeClass, };
  }


  if (state.appointmentDate.length < 1) {
    emptyShiftForm = 'error';
    const shiftdateClass = 'shiftdate-input';
    return { emptyShiftForm, shiftdateClass };
  }


  if (state.appointmentStartTime.length < 1) {
    emptyShiftForm = 'error';
    const shiftstarttimeClass = 'shiftstarttime-input';
    return { emptyShiftForm, shiftstarttimeClass };
  }

  if (state.reason.length < 1) {
    emptyShiftForm = 'error';
    const reasonClass = 'reason-input';
    return { emptyShiftForm, reasonClass };
  }

  if (state.reason.length < 10) {
    emptyShiftForm = 'error';
    const reasonClass = 'reason-input';
    const errorShiftForm = 'Please real shift reason is required';
    return { emptyShiftForm, errorShiftForm, reasonClass };
  }

  emptyShiftForm = 'Loading...';
  return { emptyShiftForm };
};


export {
  validatemptyLoginFields,
  validatemptyMasterLoginFields,
  validatemptyRegisterFieldsOneRegistry,
  validatemptyRegisterFieldsTwoRegistry,
  validatemptyResetLink,
  validatemptyStepOneFrom,
  validatemptyStepTwoFrom,
  validatemptyStepThreeFrom,
  validatemptyStepFourFrom,
  validatemptyStepFiveFrom,
  validatemptyStepSixFrom,
  validatemptyStepSevenFrom,
  validatemptyStepTenFrom,
  validatemptyStepElevenFrom,
  validatemptySearchForm,
  validateShiftFrom,
  validateElevenAdditionFrom,
};

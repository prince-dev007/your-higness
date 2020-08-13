/**
* This is helper function to validate error on login a user form.
* @param {object} state state object.
* @returns {object} data.
*/
const validaterrorLoginFields = (state) => {
  // Assign all errors to this variable
  let errorLoginFields;

  // validate email or phone number
  const getInsertedUserEmail = state.credential;
  const giveFormatInsertedUserEmail = getInsertedUserEmail.toString().trim().toLowerCase();
  const email = giveFormatInsertedUserEmail;
  const emailLength = email.length > 40;
  const goodEmail = /^(([a-zA-Z0-9 .-_]{2,6})+)@(([a-zA-Z0-9]{2,6})+).([a-z]{2,6})(.[a-z]{2,6})$/;
  const checkedEmailCredential = (!goodEmail.test(email));

  const getInsertedUserPhone = state.credential;
  const giveFormatInsertedUserPhone = getInsertedUserPhone.toString().trim().toLowerCase();
  const removeUnwantedCharacters = giveFormatInsertedUserPhone.replace(/[^+0-9]/g, '');
  const checkedPhoneCredential = !(removeUnwantedCharacters.match(/^([+][91]{2}[0-9]*?)/) && removeUnwantedCharacters.length === 13);

  // Validate a strong password
  const getInsertedUserPassword = state.password;
  const giveFormatInsertedUserPassword = getInsertedUserPassword.toString().trim().toLowerCase();
  const passwordLength = giveFormatInsertedUserPassword.length < 6 || giveFormatInsertedUserPassword.length > 16;
  const passwordContainNumber = (giveFormatInsertedUserPassword.search(/[0-9]/) === -1);
  const passwordContainCharacter = (giveFormatInsertedUserPassword.search(/[! @ # $ % & * ~ ` : "" '' ' " ? / , .]/) === -1);

  // Catching error with condition
  if (emailLength) {
    errorLoginFields = 'Invalid email or phone, eg: pet@gmail.com or +91xxxxxxxxxx';
    const emailclas = 'email-input';
    return { errorLoginFields, emailclas };
  }

  if (checkedEmailCredential && checkedPhoneCredential) {
    errorLoginFields = 'Invalid email or phone, eg: pet@gmail.com or +91xxxxxxxxxx';
    const emailclas = 'email-input';
    return { errorLoginFields, emailclas };
  }

  if (passwordLength || passwordContainNumber || passwordContainCharacter) {
    errorLoginFields = 'Please strong password eg:qwerty@123';
    const passwordclas = 'password-input';
    return { errorLoginFields, passwordclas };
  }
  errorLoginFields = 'Loading...';
  return { errorLoginFields };
};

/**
* This is helper function to validate error on login a master form.
* @param {object} state state object.
* @returns {object} data.
*/
const validaterrorMasterLoginFields = (state) => {
  // Assign all errors to this variable
  let errorLoginFields;

  // validate email or phone number
  const getInsertedUserEmail = state.email;
  const giveFormatInsertedUserEmail = getInsertedUserEmail.toString().trim().toLowerCase();
  const email = giveFormatInsertedUserEmail;
  const emailLength = email.length > 40;
  const goodEmail = /^(([a-zA-Z0-9 .-_]{2,6})+)@(([a-zA-Z0-9]{2,6})+).([a-z]{2,6})(.[a-z]{2,6})$/;
  const checkedEmailCredential = (!goodEmail.test(email));
  // Validate a strong password
  const getInsertedUserPassword = state.password;
  const giveFormatInsertedUserPassword = getInsertedUserPassword.toString().trim().toLowerCase();
  const passwordLength = giveFormatInsertedUserPassword.length < 6 || giveFormatInsertedUserPassword.length > 16;
  const passwordContainNumber = (giveFormatInsertedUserPassword.search(/[0-9]/) === -1);
  const passwordContainCharacter = (giveFormatInsertedUserPassword.search(/[! @ # $ % & * ~ ` : "" '' ' " ? / , .]/) === -1);

  // Catching error with condition
  if (emailLength) {
    errorLoginFields = 'Invalid email eg: pet@gmail.com';
    const emailclas = 'master-email-input';
    return { errorLoginFields, emailclas };
  }

  if (checkedEmailCredential) {
    errorLoginFields = 'Invalid email eg: pet@gmail.com';
    const emailclas = 'master-email-input';
    return { errorLoginFields, emailclas };
  }

  if (passwordLength || passwordContainNumber || passwordContainCharacter) {
    errorLoginFields = 'Please strong password eg:qwerty@123';
    const passwordclas = 'master-password-input';
    return { errorLoginFields, passwordclas };
  }
  errorLoginFields = 'Loading...';
  return { errorLoginFields };
};

/**
* This is helper function to validate error on master search form.
* @param {object} state state object.
* @returns {object} data.
*/
const validaterrorMasterSearchFields = (state) => {
  // Assign all errors to this variable
  let errorSearchFields;

  // validate search input with condition
  if (state.search.length < 1) {
    errorSearchFields = 'error';
    const searchclass = 'search-input';
    return { errorSearchFields, searchclass };
  }

  if (state.search.length < 3 || state.search.length > 40) {
    errorSearchFields = 'error';
    const searchclass = 'search-input';
    const error = 'Please use meaningfully keyword';
    return { errorSearchFields, error, searchclass };
  }

  errorSearchFields = 'Loading...';
  return { errorSearchFields };
};

/**
* This is helper function to validate error on register service form-one.
* @param {object} state state object.
* @returns {object} data.
*/
const validaterrorRegisterFieldsOne = (state) => {
  let errorRegisterFieldsOne;


  // Validate a real email
  const getInsertedUserEmail = state.email;
  const giveFormatInsertedUserEmail = getInsertedUserEmail.toString().trim().toLowerCase();
  const email = giveFormatInsertedUserEmail;
  const emailLength = email.length > 40;
  const goodEmail = /^(([a-zA-Z0-9 .-_]{2,6})+)@(([a-zA-Z0-9]{2,6})+).([a-z]{2,6})(.[a-z]{2,6})$/;
  const checkedEmail = (!goodEmail.test(email));

  // validate phone number
  const getInsertedUserPhone = state.phone;
  const giveFormatInsertedUserPhone = getInsertedUserPhone.toString().trim().toLowerCase();
  const removeUnwantedCharacters = giveFormatInsertedUserPhone.replace(/[^+0-9]/g, '');
  const validateCountryCode = removeUnwantedCharacters.match(/^([+][91]{2}[1-9]*?)/);
  const phoneLength = removeUnwantedCharacters.length === 13;


  if (state.name.length < 3 || state.name.length > 40) {
    errorRegisterFieldsOne = 'Please real name required';
    const nameclas = 'name-input';
    return { errorRegisterFieldsOne, nameclas };
  }

  if (emailLength) {
    errorRegisterFieldsOne = 'Invalid email';
    const emailclas = 'email-input';
    return { errorRegisterFieldsOne, emailclas };
  }

  if (checkedEmail) {
    errorRegisterFieldsOne = 'Invalid email';
    const emailclas = 'email-input';
    return { errorRegisterFieldsOne, emailclas };
  }

  if (!phoneLength) {
    errorRegisterFieldsOne = 'Invalid pnone-number';
    return { errorRegisterFieldsOne };
  }

  if (!validateCountryCode) {
    errorRegisterFieldsOne = 'Country code must be +91 eg: +91 XXXXX-XXXXX';
    return { errorRegisterFieldsOne };
  }

  errorRegisterFieldsOne = 'Loading...';
  const phone = removeUnwantedCharacters;
  return { errorRegisterFieldsOne, phone };
};

/**
* This is helper function to validate error on register user form-one.
* @param {object} state state object.
* @returns {object} data.
*/
const validaterrorRegisterFieldsOneRegistry = (state) => {
  let errorRegisterFieldsOneRegistry;


  // Validate a real email
  const getInsertedUserEmail = state.email;
  const giveFormatInsertedUserEmail = getInsertedUserEmail.toString().trim().toLowerCase();
  const email = giveFormatInsertedUserEmail;
  const emailLength = email.length > 40;
  const goodEmail = /^(([a-zA-Z0-9 .-_]{2,6})+)@(([a-zA-Z0-9]{2,6})+).([a-z]{2,6})(.[a-z]{2,6})$/;
  const checkedEmail = (!goodEmail.test(email));

  // validate phone number
  const getInsertedUserPhone = state.phone;
  const giveFormatInsertedUserPhone = getInsertedUserPhone.toString().trim().toLowerCase();
  const removeUnwantedCharacters = giveFormatInsertedUserPhone.replace(/[^+0-9]/g, '');
  const validateCountryCode = removeUnwantedCharacters.match(/^([+][91]{2}[1-9]*?)/);
  const phoneLength = removeUnwantedCharacters.length === 13;


  if (state.firstname.length < 3 || state.firstname.length > 40) {
    errorRegisterFieldsOneRegistry = 'Please real first-name required';
    const firstnamenameclas = 'name-input';
    return { errorRegisterFieldsOneRegistry, firstnamenameclas };
  }

  if (state.lastname.length < 3 || state.lastname.length > 40) {
    errorRegisterFieldsOneRegistry = 'Please real last-name required';
    const lastnamenameclas = 'name-input';
    return { errorRegisterFieldsOneRegistry, lastnamenameclas };
  }

  if (emailLength) {
    errorRegisterFieldsOneRegistry = 'Invalid email';
    const emailclas = 'email-input';
    return { errorRegisterFieldsOneRegistry, emailclas };
  }

  if (checkedEmail) {
    errorRegisterFieldsOneRegistry = 'Invalid email';
    const emailclas = 'email-input';
    return { errorRegisterFieldsOneRegistry, emailclas };
  }

  if (!phoneLength) {
    errorRegisterFieldsOneRegistry = 'Invalid pnone-number';
    const phoneclas = 'telephone-input';
    return { errorRegisterFieldsOneRegistry, phoneclas };
  }

  if (!validateCountryCode) {
    errorRegisterFieldsOneRegistry = 'Country code must be +91 eg: +91 XXXXX-XXXXX';
    const phoneclas = 'telephone-input';
    return { errorRegisterFieldsOneRegistry, phoneclas };
  }

  errorRegisterFieldsOneRegistry = 'Loading...';
  const phone = removeUnwantedCharacters;
  return { errorRegisterFieldsOneRegistry, phone };
};

/**
* This is helper function to validate error on register user form-two.
* @param {object} state state object.
* @returns {object} data.
*/
const validaterrorRegisterFieldsTwoRegistry = (state) => {
  let errorRegisterFieldsTwoRegistry;

  // Validate a strong password
  const getInsertedUserPassword = state.password;
  const giveFormatInsertedUserPassword = getInsertedUserPassword.toString().trim().toLowerCase();
  const passwordLength = giveFormatInsertedUserPassword.length < 6;
  const passwordContainNumber = (giveFormatInsertedUserPassword.search(/[0-9]/) === -1);
  const passwordContainCharacter = (giveFormatInsertedUserPassword.search(/[! @ # $ % & * ~ ` : "" '' ' " ? / , .]/) === -1);

  // Catching error with condition
  if (passwordLength || passwordContainNumber || passwordContainCharacter) {
    errorRegisterFieldsTwoRegistry = 'Please strong password eg:qwerty@123';
    const passwordclas = 'password-input';
    return { errorRegisterFieldsTwoRegistry, passwordclas };
  }
  if (state.password !== state.confirmpassword) {
    errorRegisterFieldsTwoRegistry = 'confirm-password must be the same with password';
    const confirmpasswordclas = 'confirm-password-input';
    return { errorRegisterFieldsTwoRegistry, confirmpasswordclas };
  }
  errorRegisterFieldsTwoRegistry = 'Loading...';
  return { errorRegisterFieldsTwoRegistry };
};


// #######################################################################################

const validaterrorRegisterFieldsTwo = (state) => {
  let errorRegisterFieldsTwo;
  const date = new Date();
  const mydate = new Date(state.date);

  if (state.petname.length < 3) {
    errorRegisterFieldsTwo = 'Please real pet-name required';
    const petnameclas = 'petname-input';
    return { errorRegisterFieldsTwo, petnameclas };
  }


  if (date < mydate) {
    errorRegisterFieldsTwo = 'Please real date required';
    const dateclas = 'date-input';
    return { errorRegisterFieldsTwo, dateclas };
  }


  if (state.pettype.length < 2) {
    errorRegisterFieldsTwo = 'Please real Pet-type required';
    const pettypeclas = 'pettype-input';
    return { errorRegisterFieldsTwo, pettypeclas };
  }

  if (state.petimage.name) {
    if (state.petimage.name.length < 4) {
      errorRegisterFieldsTwo = 'Please real Pet-image only';
      return { errorRegisterFieldsTwo };
    }
    const getImageName = state.petimage.name;
    const ImageLength = getImageName.length;
    const point = getImageName.lastIndexOf('.');
    const getExtensionFile = getImageName.substring(point, ImageLength);
    const lowCaseExtensionFile = getExtensionFile.toLowerCase();
    if (lowCaseExtensionFile !== '.jpg' && lowCaseExtensionFile !== '.png' && lowCaseExtensionFile !== '.gif') {
      errorRegisterFieldsTwo = 'Please Pet-image format must be jpg, png or gif ';
      return { errorRegisterFieldsTwo };
    }
  }

  if (state.addressname.length < 3) {
    errorRegisterFieldsTwo = 'Please real-address required';
    const locationclas = 'location-input';
    return { errorRegisterFieldsTwo, locationclas };
  }

  errorRegisterFieldsTwo = 'Loading...';
  return { errorRegisterFieldsTwo };
};

const validaterrorRegisterFieldsTwoDoctor = (state) => {
  let errorRegisterFieldsTwoDoctor;
  const date = new Date();
  const mydate = new Date(state.date);

  if (state.career.length < 3) {
    errorRegisterFieldsTwoDoctor = 'Please real-specialization required';
    const pettypeclas = 'pettype-input';
    return { errorRegisterFieldsTwoDoctor, pettypeclas };
  }

  if (date < mydate) {
    errorRegisterFieldsTwoDoctor = 'Please real date required';
    const dateclas = 'date-input';
    return { errorRegisterFieldsTwoDoctor, dateclas };
  }

  if (state.petimage.name) {
    if (state.petimage.name.length < 4) {
      errorRegisterFieldsTwoDoctor = 'Please real Pet-image only';
      return { errorRegisterFieldsTwoDoctor };
    }
    const getImageName = state.petimage.name;
    const ImageLength = getImageName.length;
    const point = getImageName.lastIndexOf('.');
    const getExtensionFile = getImageName.substring(point, ImageLength);
    const lowCaseExtensionFile = getExtensionFile.toLowerCase();
    if (lowCaseExtensionFile !== '.jpg' && lowCaseExtensionFile !== '.png' && lowCaseExtensionFile !== '.gif') {
      errorRegisterFieldsTwoDoctor = 'Please Pet-image format must be jpg, png or gif ';
      return { errorRegisterFieldsTwoDoctor };
    }
  }


  if (state.addressname.length < 3) {
    errorRegisterFieldsTwoDoctor = 'Please real-address required';
    const locationclas = 'location-input';
    return { errorRegisterFieldsTwoDoctor, locationclas };
  }

  if (state.coverpicture.name) {
    if (state.petimage.name.length < 4) {
      errorRegisterFieldsTwoDoctor = 'Please real Pet-image only';
      return { errorRegisterFieldsTwoDoctor };
    }
    const getImageName = state.coverpicture.name;
    const ImageLength = getImageName.length;
    const point = getImageName.lastIndexOf('.');
    const getExtensionFile = getImageName.substring(point, ImageLength);
    const lowCaseExtensionFile = getExtensionFile.toLowerCase();
    if (lowCaseExtensionFile !== '.jpg' && lowCaseExtensionFile !== '.png' && lowCaseExtensionFile !== '.gif') {
      errorRegisterFieldsTwoDoctor = 'Please Pet-image format must be jpg, png or gif ';
      return { errorRegisterFieldsTwoDoctor };
    }
  }

  if (state.profilepicture.name) {
    if (state.petimage.name.length < 4) {
      errorRegisterFieldsTwoDoctor = 'Please real Pet-image only';
      return { errorRegisterFieldsTwoDoctor };
    }
    const getImageName = state.profilepicture.name;
    const ImageLength = getImageName.length;
    const point = getImageName.lastIndexOf('.');
    const getExtensionFile = getImageName.substring(point, ImageLength);
    const lowCaseExtensionFile = getExtensionFile.toLowerCase();
    if (lowCaseExtensionFile !== '.jpg' && lowCaseExtensionFile !== '.png' && lowCaseExtensionFile !== '.gif') {
      errorRegisterFieldsTwoDoctor = 'Please Pet-image format must be jpg, png or gif ';
      return { errorRegisterFieldsTwoDoctor };
    }
  }

  errorRegisterFieldsTwoDoctor = 'Loading...';
  return { errorRegisterFieldsTwoDoctor };
};

const validaterrorRegisterFieldsThree = (state) => {
  let errorRegisterFieldsThree;

  // Validate a strong password
  const getInsertedUserPassword = state.password;
  const giveFormatInsertedUserPassword = getInsertedUserPassword.toString().trim().toLowerCase();
  const passwordLength = giveFormatInsertedUserPassword.length < 6;
  const passwordContainNumber = (giveFormatInsertedUserPassword.search(/[0-9]/) === -1);
  const passwordContainCharacter = (giveFormatInsertedUserPassword.search(/[! @ # $ % & * ~ ` : "" '' ' " ? / , .]/) === -1);

  // Catching error with condition
  if (passwordLength || passwordContainNumber || passwordContainCharacter) {
    errorRegisterFieldsThree = 'Please strong password eg:qwerty@123';
    const passwordclas = 'password-input';
    return { errorRegisterFieldsThree, passwordclas };
  }
  if (state.password !== state.confirmpassword) {
    errorRegisterFieldsThree = 'confirm-password must be the same with password';
    const confirmpasswordclas = 'confirm-password-input';
    return { errorRegisterFieldsThree, confirmpasswordclas };
  }
  errorRegisterFieldsThree = 'Loading...';
  return { errorRegisterFieldsThree };
};

// #######################################################################################

/**
* This is helper function to validate error on reset password link form.
* @param {object} state state object.
* @returns {object} data.
*/
const validaterrorRsetLink = (state) => {
  let errorResetLink;

  // validate email or phone number  ######### Progress later......
  const getInsertedUserEmail = state.email;
  const giveFormatInsertedUserEmail = getInsertedUserEmail.toString().trim().toLowerCase();
  const email = giveFormatInsertedUserEmail;
  const goodEmail = /^(([a-zA-Z0-9 .-_]{2,6})+)@(([a-zA-Z0-9]{2,6})+).([a-z]{2,6})(.[a-z]{2,6})$/;
  const checkedEmail = (!goodEmail.test(email));

  // Catching error with condition
  if (checkedEmail) {
    errorResetLink = 'Invalid email';
    const emailclas = 'email-input';
    return { errorResetLink, emailclas };
  }
  errorResetLink = 'Loading...';
  return { errorResetLink };
};

/**
* This is helper function to validate book form form.
* @param {object} state state object.
* @returns {object} data.
*/
const validateBookForm = (state) => {
  let validationResult;
  let validationMessage;
  // Validate a real email logic
  const getInsertedUserEmail = state.appointmentEmail;
  const giveFormatInsertedUserEmail = getInsertedUserEmail.toString().trim().toLowerCase();
  const email = giveFormatInsertedUserEmail;
  const goodEmail = /^(([a-zA-Z0-9 .-_]{2,6})+)@(([a-zA-Z0-9]{2,6})+).([a-z]{2,6})(.[a-z]{2,6})$/;
  const checkedEmail = (!goodEmail.test(email));


  // validate phone number logic
  const getInsertedUserPhone = state.appointmentPhone;
  const giveFormatInsertedUserPhone = getInsertedUserPhone.toString().trim().toLowerCase();
  const removeUnwantedCharacters = giveFormatInsertedUserPhone.replace(/[^+0-9]/g, '');
  const validateCountryCode = removeUnwantedCharacters.match(/^([+][91]{2}[1-9]*?)/);


  if (
    state.appointmentName.length < 1
    && state.appointmentEmail.length < 1
    && state.appointmentPhone.length < 1
    && state.appointmentLocation.length < 1
    && state.appointmentDate.length < 1
    && state.appointmentStartTime.length < 1
    && state.appointmentSessionTime.length < 1) {
    validationResult = 'error';
    validationMessage = '';
    const appointmentNameclass = 'appointmentName-input';
    const appointmentEmailclass = 'appointmentEmail-input';
    const appointmentPhoneclass = 'appointmentPhone-input';
    const appointmentLocationclass = 'appointmentLocation-input';
    const appointmentDateclass = 'appointmentDate-input';
    const appointmentStartTimeclass = 'appointmentStartTime-input';
    const appointmentSessionTimeclass = 'appointmentSessionTime-input';
    return {
      validationResult,
      validationMessage,
      appointmentNameclass,
      appointmentEmailclass,
      appointmentPhoneclass,
      appointmentLocationclass,
      appointmentDateclass,
      appointmentStartTimeclass,
      appointmentSessionTimeclass
    };
  }

  if (state.appointmentName.length < 1 || state.appointmentName.length < 3 || state.appointmentName.length > 40) {
    validationResult = 'error';
    validationMessage = 'Real name required';
    const appointmentNameclass = 'appointmentName-input';
    return {
      validationResult,
      validationMessage,
      appointmentNameclass,
    };
  }

  if (checkedEmail || state.appointmentEmail.length > 40) {
    validationResult = 'error';
    validationMessage = 'Real email required';
    const appointmentEmailclass = 'appointmentEmail-input';
    return {
      validationResult,
      validationMessage,
      appointmentEmailclass,
    };
  }

  if ((!validateCountryCode) || state.appointmentPhone.length > 13 || state.appointmentPhone.length <= 12) {
    validationResult = 'error';
    validationMessage = 'Real phone required eg: +91 XXXXX-XXXXX';
    const appointmentPhoneclass = 'appointmentPhone-input';
    return {
      validationResult,
      validationMessage,
      appointmentPhoneclass,
    };
  }

  if (state.appointmentLocation.length < 1 || state.appointmentLocation.length < 3 || state.appointmentLocation.length > 40) {
    validationResult = 'error';
    validationMessage = 'Real location required';
    const appointmentLocationclass = 'appointmentLocation-input';
    return {
      validationResult,
      validationMessage,
      appointmentLocationclass,
    };
  }

  if (state.appointmentDate.length < 1) {
    validationResult = 'error';
    validationMessage = 'Real date required';
    const appointmentDateclass = 'appointmentDate-input';
    return {
      validationResult,
      validationMessage,
      appointmentDateclass,
    };
  }

  if (state.appointmentStartTime.length < 1) {
    validationResult = 'error';
    validationMessage = 'Real time required';
    const appointmentStartTimeclass = 'appointmentStartTime-input';
    return {
      validationResult,
      validationMessage,
      appointmentStartTimeclass,
    };
  }

  if (state.appointmentSessionTime.length < 1) {
    validationResult = 'error';
    validationMessage = 'Real session-time required';
    const appointmentSessionTimeclass = 'appointmentSessionTime-input';
    return {
      validationResult,
      validationMessage,
      appointmentSessionTimeclass
    };
  }

  validationMessage = 'Loading...';
  validationResult = 'correct';
  return { validationMessage, validationResult };
};

export {
  validaterrorLoginFields,
  validaterrorMasterLoginFields,
  validaterrorMasterSearchFields,
  validaterrorRegisterFieldsOne,
  validaterrorRegisterFieldsOneRegistry,
  validaterrorRegisterFieldsTwoRegistry,
  validaterrorRegisterFieldsTwo,
  validaterrorRegisterFieldsTwoDoctor,
  validaterrorRegisterFieldsThree,
  validaterrorRsetLink,
  validateBookForm
};

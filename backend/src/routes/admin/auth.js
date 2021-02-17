const express = require('express');
const { requireSignin } = require('../../common-middleware');
const { signup, signin, signout } = require('../../controller/admin/auth');
const { validateSignupRequest, validateSigninRequest, isRequestValidate } = require('../../validators/auth');
const router = express.Router();

router.post('/signup', validateSignupRequest, isRequestValidate, signup);

router.post('/signin', validateSigninRequest, isRequestValidate, signin);

router.post('/signout', requireSignin, signout);


module.exports = router;
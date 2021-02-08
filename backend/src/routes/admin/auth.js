const express = require('express');
const { signup, signin, requireSignin } = require('../../controller/admin/auth');
const router = express.Router();

router.post('/signup', signup);

router.post('/signin', signin);


module.exports = router;
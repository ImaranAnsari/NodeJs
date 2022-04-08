const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.js');

router.post('/resister',userController.resister);

module.exports= router;

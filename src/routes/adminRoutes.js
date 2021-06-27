
const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();
router.get('/test',adminController.getPosts);

module.exports= router;
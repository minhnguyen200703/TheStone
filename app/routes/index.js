// const app = require('express').Router();
// const { join } = require('path');

// app.get('/', (req, res) =>
//     require(join(__dirname, '../controllers/index')).index(req, res));

// module.exports = app;

const express = require('express');
const router = express.Router();

// Import controllers
const landingController = require('../controllers/landingController');
const contactController = require('../controllers/contactController');
const aboutController = require('../controllers/aboutController');
const storyController = require('../controllers/storyController');
const franchiseController = require('../controllers/franchiseController');
const servicesController = require('../controllers/servicesController');

// Define routes
router.get('/', landingController.getLandingPage);

// Contact
router.get('/contact', contactController.getContactPage);
router.post('/contact', contactController.submitContactForm);

// About
router.get('/about', aboutController.getAboutPage);

// Story
router.get('/story', storyController.getStoryPage);

// Franchise
router.get('/franchise', franchiseController.getFranchisePage);

// Services
router.get('/services', servicesController.getServicesPage);

module.exports = router;

var express = require('express');
var router = express.Router();

const usersController = require('../controllers').users;
const eventsController = require('../controllers').events;
const attendeesController = require('../controllers').attendees;
/*Users*/
router.get('/api/users', usersController.list);
router.post('/api/users/signup', usersController.add);
router.post('/api/users/email', usersController.getByEmail);
router.get('/api/users/:id', usersController.getById);
router.post('/api/users/signin', usersController.signIn);
/*Events*/
router.get('/api/events', eventsController.list);
router.post('/api/events', eventsController.add);
router.get('/api/events/completed', eventsController.getByCompleted);
router.get('/api/events/incompleted', eventsController.getByIncompleted);
/*Attendees*/
router.get('/api/attendees', attendeesController.list);
router.post('/api/attendees', attendeesController.add);
router.post('/api/attendees/toggle', attendeesController.toggleLeft);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

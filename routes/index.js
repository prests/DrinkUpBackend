/**
 * Router - Endpoint URLs to call Queries
 * @author Shayne F. Preston <prests@rpi.edu>
 */
var express = require('express');
var router = express.Router();

const usersController = require('../controllers').users;
const eventsController = require('../controllers').events;
const attendeesController = require('../controllers').attendees;
/*Users*/
router.get('/api/users', usersController.list);
router.post('/api/users/signup', usersController.add);
router.put('/api/users/:id', usersController.updateById);
router.post('/api/users/email', usersController.getByEmail);
router.get('/api/users/:id', usersController.getById);
router.post('/api/users/signin', usersController.signIn);
router.delete('/api/users/:id', usersController.delete);

/*Events*/
router.get('/api/events', eventsController.list);
router.get('/api/events/:id', eventsController.getById);
router.post('/api/events', eventsController.add);
router.get('/api/events/completed', eventsController.getByCompleted);
router.get('/api/events/incompleted', eventsController.getByIncompleted);
router.post('/api/events/ownerEvents', eventsController.getEventsByOwner);
router.put('/api/events/closeEvent/:id', eventsController.closeEvent);
router.delete('/api/events/:id', eventsController.delete);

/*Attendees*/
router.get('/api/attendees', attendeesController.list);
router.get('/api/attendees/:id', attendeesController.getById);
router.post('/api/attendees', attendeesController.add);
router.post('/api/attendees/left', attendeesController.toggleLeft);
router.post('/api/attendees/enter', attendeesController.toggleReturn);
router.post('/api/attendees/getEvents', attendeesController.getEvents);
router.delete('/api/attendees/:id', attendeesController.delete);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

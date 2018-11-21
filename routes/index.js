var express = require('express');
var router = express.Router();

const usersController = require('../controllers').users;
const eventsController = require('../controllers').events;
/*Users*/
router.get('/api/users', usersController.list);
router.post('/api/users', usersController.add);
router.post('/api/users/email', usersController.getByEmail);
router.get('/api/users/:id', usersController.getById);
/*Events*/
router.get('/api/events', eventsController.list);
router.post('/api/events', eventsController.add);
router.get('/api/events/completed', eventsController.getByCompleted);
router.get('/api/events/incompleted', eventsController.getByIncompleted);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

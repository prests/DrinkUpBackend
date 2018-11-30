/**
 * Index Controller - Exports for Controllers
 * @author Shayne F. Preston <prests@rpi.edu>
 */
const users = require('./users');
const events = require('./events');
const attendees = require('./attendees');

module.exports = {
  users,
  events,
  attendees,
};

/**
 * Events Controller - Queries for Events Table
 * @author Shayne F. Preston <prests@rpi.edu>
 */
const Events = require('../models').Events;

module.exports = {
  list(req, res) {//Return all events
    return Events
     .findAll()
     .then((events) => res.status(200).send(events))
     .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {//search for event by id
    return Events
      .findById(req.params.id)
      .then((events) => res.status(200).send(events))
      .catch((error) => { res.status(400).send(error); });
  },

  add(req, res){//create a new event
    return Events
      .create({
        name: req.body.name,
        description: req.body.description,
        owner: req.body.owner,
        completed: false,
      })
     .then((users) => res.status(201).send(users))
     .catch((error) => res.status(400).send(error));
  },

  getByCompleted(req, res){//get all completed events
    return Events
     .findAll({
	where: {
	  completed: true,
        }
     })
     .then((events) => res.status(200).send(events))
     .catch((error) => { res.status(400).send(error); });
  },

  getByIncompleted(req, res){//get all noncompleted events
    return Events
      .findAll({
         where: {
           completed: false,
         }
      })
      .then((events) => res.status(200).send(events))
      .catch((error) => { res.status(400).send(error); });
  },

  closeEvent(req, res){//Set an event to completed based on id
    return Events
      .update({
        completed: true
      }, {
        where: {
          id: req.params.id
        },
        returning: true
      })
      .then((events) => res.status(200).send(events[1][0]))
      .catch((error) => { res.status(400).send(error); });
  },

  getEventsByOwner(req, res) {//get all events based on an ownerId
    //console.log(req);
    return Events
      .findAll({
        where: {
          owner: req.body.owner,
          completed: req.body.completed,
        }
      })
      .then((events) => res.status(200).send(events))
      .catch((error) => { res.status(400).send(error); });
  },

  delete(req, res) {//delete an event
    return Events
      .findById(req.params.id)
      .then(events => {
        if (!events) {
          return res.status(400).send({
            message: 'Event Not Found',
          });
        }
        return event
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
    },
};

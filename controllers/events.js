const Events = require('../models').Events;

module.exports = {
  list(req, res) {
    return Events
     .findAll()
     .then((events) => res.status(200).send(events))
     .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Events
      .findById(req.params.id)
      .then((events) => res.status(200).send(events))
      .catch((error) => { res.status(400).send(error); });
  },

  add(req, res){
    return Events
      .create({
        name: req.body.name,
        description: req.body.description,
        owner: req.body.owner,
        completed: req.body.completed,
      })
     .then((users) => res.status(201).send(users))
     .catch((error) => res.status(400).send(error));
  },

  getByCompleted(req, res){
    return Events
     .findAll({
	where: {
	  completed: true,
        }
     })
     .then((events) => res.status(200).send(events))
     .catch((error) => { res.status(400).send(error); });
  },

  getByIncompleted(req, res){
    return Events
      .findAll({
         where: {
           completed: false,
         }
      })
      .then((events) => res.status(200).send(events))
      .catch((error) => { res.status(400).send(error); });
  },

  delete(req, res) {
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

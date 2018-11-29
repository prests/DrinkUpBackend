const Attendees = require('../models').Attendees;

module.exports = {
  list(req, res) {
    return Attendees
     .findAll()
     .then((attendees) => res.status(200).send(attendees))
     .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Attendees
      .findById(req.params.id)
      .then((attendees) => res.status(200).send(attendees))
      .catch((error) => { res.status(400).send(error); });
  },

  add(req, res){
    return Attendees
      .create({
        firstName: req.body.firstName,
        middle_name: req.body.middleName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dob,
        age: req.body.age,
        license_number: req.body.licenseNumber,
      })
      .then((attendees) => res.status(201).send(attendees))
      .catch((error) => res.status(400).send(error));
  },

  toggleLeft(req, res){
    return Attendees
      .update({
        left: req.body.left
      },
      {
        where: {
          license_number: req.body.licenseNumber
        }
      })
      .then((attendees) => res.status(201).send(attendees))
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Attendees
      .findById(req.params.id)
      .then(attendees => {
        if (!attendees) {
          return res.status(400).send({
            message: 'Attendee Not Found',
          });
        }
        return attendee
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
    },
};

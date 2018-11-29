const Attendees = require('../models').Attendees;


function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  var da = today.getDate() - birthDate.getDate();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  if(m<0){
      m +=12;
  }
  if(da<0){
      da +=30;
  }
  return age;
}

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

  getEvents(req, res){
    return Attendees
      .findAll({
        where: {
          eventId: req.body.eventId
        }
      })
      .then((attendee) => res.status(200).send(attendee))
      .catch((error) => { res.status(400).send(error); });
  },

  add(req, res){
    return Attendees
      .create({
        firstName: req.body.firstName,
        middle_name: req.body.middleName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dob,
        age: getAge(req.body.dob),
        license_number: req.body.licenseNumber,
        eventId: req.body.eventId,
        left: false,
      })
      .then((attendees) => res.status(201).send(attendees))
      .catch((error) => res.status(400).send(error));
  },

  toggleLeft(req, res){
    return Attendees
      .update({
        left: true
      },
      {
        where: {
          license_number: req.body.licenseNumber
        }
      })
      .then((attendees) => res.status(201).send(attendees))
      .catch((error) => res.status(400).send(error));
  },

  toggleReturn(req, res){
    return Attendees
      .update({
        left: false
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

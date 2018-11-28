const AttendeesToEvents = require('../models').AttendeesToEvents;

module.exports = {
  list(req, res) {
    return AttendeesToEvents
     .findAll()
     .then((attendeestoevents) => res.status(200).send(attendeestoevents))
     .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return AttendeesToEvents
      .findById(req.params.id)
      .then((attendeestoevents) => res.status(200).send(attendeestoevents))
      .catch((error) => { res.status(400).send(error); });
  },

  add(req, res){
    return AttendeesToEvents
      .create({
        event_id: req.body.eventId,
        attendee_id: req.body.attendeeId
      })
      .then((attendeestoevents) => res.status(201).send(attendeestoevents))
      .catch((error) => res.status(400).send(error));
  },

  findAttendeesByEvent(req, res){
    return AttendeesToEvents
        .findAll({
            where: {
                event_id: req.body.eventId
            }
        })
        .then((attendeestoevents) => res.status(200).send(attendeestoevents))
        .catch((error) => { res.status(400).send(error); });
  },

  delete(req, res) {
    return AttendeesToEvents
      .findById(req.params.id)
      .then(attendeestoevents => {
        if (!attendeestoevents) {
          return res.status(400).send({
            message: 'AttendeeToEvent Not Found',
          });
        }
        return attendeetoevents
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
    },
};

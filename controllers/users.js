const Users = require('../models').Administrators;

module.exports = {
  list(req, res) {
    return Users
     .findAll()
     .then((users) => res.status(200).send(users))
     .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Users
      .findById(req.params.id)
      .then((users) => res.status(200).send(users))
      .catch((error) => { res.status(400).send(error); });
  },

  add(req, res){
    return Users
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      })
      .then((users) => res.status(201).send(users))
      .catch((error) => res.status(400).send(error));
  },

  getByEmail(req, res) {
    return Users
      .findAll({
        where: {
          email: req.body.email,
        }
      })
      .then((users) => res.status(200).send(users))
      .catch((error) => { res.status(400).send(error); });
  },

  delete(req, res) {
    return Users
      .findById(req.params.id)
      .then(users => {
        if (!users) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
    },
};



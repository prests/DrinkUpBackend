/**
 * Users Controller - Queries for Aminstrators Table
 * @author Shayne F. Preston <prests@rpi.edu>
 */
const Users = require('../models').Administrators;

module.exports = {
  list(req, res) {//return all admins
    return Users
     .findAll()
     .then((users) => res.status(200).send(users))
     .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {//get and admin by ID
    return Users
      .findById(req.params.id)
      .then((users) => {res.status(200).send(users); console.log(users);})
      .catch((error) => { res.status(400).send(error); console.log(error);});
  },

  updateById(req, res){//update admin info
    console.log('here');
    return Users
      .update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      },
      {
        where: {
          id: req.params.id
        },
        returning: true
      })
      .then(function(users){
        console.log(users);
        res.status(201).send(users[1][0]);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res){//create a new admin
    return Users
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      })
      .then((users) => res.status(201).send(users), console.log(res.status))
      .catch((error) => res.status(400).send(error));
  },

  signIn(req, res){//sign an admin in
    return Users
      .findOne({
        where: {
          email: req.body.email
        }
      })
      .then((users) => {
        if(users.password == req.body.password){
          res.status(201).send({
            id: users.id
          })
        }
        else{
          res.status(400).send(null)
        }
      })
      .catch((error) => res.status(400).send(error));
  },

  getByEmail(req, res) {//get get an admin by email
    return Users
      .findOne({
        where: {
          email: req.body.email,
        }
      })
      .then((users) => res.status(200).send(users))
      .catch((error) => { res.status(400).send(error); });
  },

  delete(req, res) {//delete an admin
    return Users
      .destroy({
        where: {
          id: req.params.id,
        }
      })
      .then(users => res.status(204).send(users))
      .catch((error) => res.status(400).send(error));
    },
};



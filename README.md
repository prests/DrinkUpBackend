# SD&D Drink Up Backend Repository
#### Shayne Preston, Dylan Cheung, Jeffrey Poegel, Jason Hall

## Overview

This is a Node.js and Express server that utilizes sequelize.js to make function based queries rather than raw SQL. The database is a postgres database hosted by aws RDS, and the server runs on AWS EC2.

## Setup
1. Clone the repository
2. Create a config folder with config.json inside cloned repository
3. Add the appropriate details in config.json see developers for access to Database (This is actual means of access database content)
4. run 'npm install'
5. to test locally execute npm run dev

## Exhisting Endpoints

#### Users:

+ Get a list of all users (GET REQUEST): https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/users

+ Get a user by unique ID (:id is replaced by ID) (GET REQUEST): https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/:id
params:{
    id (integer)
}

+ Get a user by unique email (POST REQUEST): https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/users/email
body:{
    email (string)
}

+ Sign a user in (POST REQUEST): https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/users/signin
body:{
    email (string),
    password (string)
}

+ Sign a user up (POST REQUEST):
https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/users/signup
body:{
    firstName (string),
    lastName (string),
    email (string),
    password (string)
}

+ Update a user info (:id is replaced by ID) (PUT REQUEST):
https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/users/:id
params:{
    id (integer)
}
body:{
    firstName (string),
    lastName (string),
    email (string),
    password (string)
}

#### Events:

+ Get a list of all events (GET REQUEST):  https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events

+ Add an event (POST REQUEST): https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events
body:{
    name (string),
    description (string),
    owner (integer),
    completed (boolean)
}

+ Get a list of all events that are completed (GET REQUEST):  https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events/completed

+ Get a list of all events that are incompleted (GET REQUEST): https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events/incompleted

+ Get all the events of an owner (POST REQUEST): https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events/ownerEvents
body:{
    owner (integer),
    completed (boolean)
}

+ Close an event (:id replaced by ID) (PUT REQUEST): https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events/closeEvent/:id
params:{
    id (integer),
}

#### Attendees:

+ Get a list of all attendees (GET REQUEST): https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/attendees

+ Add an attendee (POST REQUEST): https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/atendees
body:{
    firstName (string),
    middleName (string),
    lastName (string),
    dob (date),
    age (integer),
    licenseNumber (integer),
    eventId (integer)
}

+ Set if an attendee has left (POST REQUEST): https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/attendees/left
body:{
    id (integer)
}

+ Set if an attendee has entered (POST REQUEST): https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/attendees/enter
body:{
    id (integer)
}

+ Get all attendees for an eventId (POST REQUEST): https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/attendees/getEvents
body:{
    eventId (integer)
}
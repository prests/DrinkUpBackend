# SD&D Drink Up Backend Repository
#### Shayne Preston, Dylan Cheung, Jeffrey Poegel, Jason Hall

## Overview

This is a Node.js server 

## Setup
1. Clone the repository
2. Create a config folder with config.json inside cloned repository
3. Add the appropriate details in config.json see developers for access to Database
4. run npm install
5. to test locally execute npm run dev

## Exhisting Endpoints

#### Users:

+ Get a list of all users (GET REQUEST): https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/users
+ Add an user (POST REQUEST): https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/users


#### Events:

+ Get a list of all events (GET REQUEST):  https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events
+ Add an event (POST REQUEST): https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events
+ Get a list of all events that are completed (GET REQUEST):  https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events/completed
+ Get a list of all events that are incompleted (GET REQUEST): https://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events/incompleted

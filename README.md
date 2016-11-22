# React voting app

A voting app that lets users create, vote on and share polls.
This was built as an exercise in full stack development, with a frontend courtesy of ReactJS and Material UI, a node.js backend and a postgres database.

Example running at <a href="https://shrouded-fortress-20795.herokuapp.com/" target="_blank">https://shrouded-fortress-20795.herokuapp.com/</a>.

## Features

* User accounts with oauth2 and passport js. Users can create an account by linking their google user name. Unauthenticated users cannot create polls but can still vote on them.
* Basic persistence with a postgres database.
* RESTful api endpoints for creation of users, posts and votes
* Client and server side authentication
* Javascript and css minification with webpack

## Installation and deployment

`git clone` and navigate to main directory

`npm run build` creates production ready minified javascript and css bundles in `app/client/dist`.

`npm run start` starts the development node and webpack hot module reload server.

`npm run eslint` lints all related files. For best results use an editor with an eslint plugin to lint on the fly.

If you have the heroku CLI, you can run `heroku local` to run a local version of the app with all the paramaters in the procfile and your local config vars.

## TODO

* ~~Make dashboard a protected route~~
* Add code splitting/tree shaking with webpack2 (update to webpack2)
* Make server requests on changes from the dashboard
* Add  ability to add answers to questions on the dashboard
* Add a total votes variable on poll model
* Batch server requests to reduce load
* Look into redis for caching and fun
* Add more options for polls on dashboard, allow comments, change styles etc
* Write unit and functional tests (grr)

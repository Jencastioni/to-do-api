# CheckIt - Task Manager App

CheckIt is a single-page web application designed for anyone who wants to keep organized.You shouldn't have to read a manual to use an app that helps you stay organized and with CheckIt you don't have to! 

CheckIt allows users to keep track of their everyday tasks. Users can add, update and delete tasks as they complete them, and each task is categorized into 1 of 4 priorities per the Eisnehower Matrix (Important and Urgent, Important and Not Urgent, Urgent and Not Important, Not Urgent and Not Important).


## Preparation

1. Fork and clone this repository.
1. Create a new branch, for your work.
1. Checkout to that branch.
1. Install dependencies with `npm install`.
1. Use `npm start` to start up the locals server in your browser


## Important Links

- [CheckIt API Repo](https://github.com/Jencastioni/to-do-api)
- [Deployed API](https://floating-reef-69808.herokuapp.com/)
- [Deployed Client](https://jencastioni.github.io/to-do-client)
- [Requirements](https://git.generalassemb.ly/ga-wdi-boston/capstone-project/blob/master/requirements.md)


## Planning Story

I began planning on creating some type of to-do list app as I am always struggling to stay organized. I drew up my wiredrame and ERD and was able to formulte a plan to create it. My app remained unnamed until days later!

The first step was to set up the back end API and make sure to enable CRUD actions on authentication and resources. Next, was setting up the front end, following a similar CRUD process. Finally, I designed the front end using the React framework.


### User Stories

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to create a task.
- As a signed in user, I would like to update my task.
- As a signed in user, I would like to delete my itask.
- As a signed in user, I would like to see all tasks.
- As a signed in user, I would like to see completed tasks.
- As a signed in user, I would like my tasks to be organized by priority and date.


### Technologies Used

- HTML/CSS
- Bootstrap
- Javascript
- React
- React Router
- Express.js
- MongoDB


## Tasks

`npm` is used as a task runner for this project. These are the commands available:

| Command                | Effect                                                                                                      |
|------------------------|-------------------------------------------------------------------------------------------------------------|
| `npm run server`       | Starts a development server with `nodemon` that automatically refreshes when you change something.                                                                                         |
| `npm start`             | Runs an arbitrary command specified in the package’s "start"  property of its "scripts" object.                                                                                     |
| `npm test`             | Runs automated tests.                                                                                       |


### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |


### Catalog of Routes

Verb         |	URI Pattern
------------ | -------------
| GET | /tasks  |
| GET | /tasks/:id  |
| POST | /tasks  |
| PATCH | /tasks/:id  |
| DELETE | /tasks/:id  |


### Unsolved Problems

In future iterations of CheckIt I would like:

- Have a checkmark that can be clicked to send tasks to "Completed"
- Further Categories to organize daily tasks, chores, school, work etc...
- Have check boxes for each completed task.



### CheckIt
![CheckIt](https://media.git.generalassemb.ly/user/28872/files/86d7b580-f9b2-11ea-805e-b723f88655ba)


## ERD

![CheckIt ERD](https://media.git.generalassemb.ly/user/28872/files/b9d2b100-fc1f-11ea-83ee-afee09effc17)

# CheckIt - Task Manager App

CheckIt is a single-page web application designed for anyone who wants to keep organized.You shouldn't have to read a manual to use an app that helps you stay organized and with CheckIt you don't have to! 

CheckIt allows users to keep track of their everyday tasks. Users can add, update and delete tasks as they complete them, and each task is categorized into 1 of 4 priorities per the Eisnehower Matrix (Important and Urgent, Important and Not Urgent, Urgent and Not Important, Not Urgent and Not Important).


## Important Links

- [CheckIt API Repo](https://github.com/LadiesLoveCleanCode/MangoDB-api)
- [Deployed API](https://floating-mesa-18024.herokuapp.com)
- [Deployed Client](https://ladieslovecleancode.github.io/MangoDB-client)
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


### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |


### Unsolved Problems

In a future iteration of CheckIt, I want there to be more categories of tasks and from there you can prioritize them.


### Catalog of Routes

Verb         |	URI Pattern
------------ | -------------
| GET | /tasks  |
| GET | /tasks/:id  |
| POST | /tasks  |
| PATCH | /tasks/:id  |
| DELETE | /tasks/:id  |


## ERD

[![CheckIt ERD](https://imgur.com/a/bAxHGxM)]
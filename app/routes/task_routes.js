// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for examples
const Task = require('../models/task')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /examples
router.get('/tasks', requireToken, (req, res, next) => {
    const owner = req.user.id  
  Task.find({owner: owner})
    .then(tasks => {
      // `examples` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return tasks.map(task => task.toObject())
    })
    // respond with status 200 and JSON of the examples
    .then(tasks => res.status(200).json({ tasks: tasks }))
    // if an error occurs, pass it to the handler
    .catch(next)
})
// TOKEN="890ac712d7a2ebfa57913158b6d360fc" sh curl-scripts/task/index.sh

// SHOW
// GET /examples/5a7db6c74d55bc51bdf39793
router.get('/tasks/:id', requireToken, (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Task.findById(req.params.id)
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "example" JSON
    .then(task => res.status(200).json({ task: task.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(next)
})
// ID=5f621292605d8d045f0f6690 TOKEN="890ac712d7a2ebfa57913158b6d360fc" sh curl-scripts/task/show.sh

// CREATE
// POST /examples
router.post('/tasks', requireToken, (req, res, next) => {
  // set owner of new example to be current user
  req.body.task.owner = req.user.id

  Task.create(req.body.task)
    // respond to succesful `create` with status 201 and JSON of new "example"
    .then(task => {
      res.status(201).json({ task: task.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})
// TOKEN="890ac712d7a2ebfa57913158b6d360fc" CATEGORY="active" TITLE="complete assignment" TEXT="FINISH PROJECT 4" sh curl-scripts/task/create.sh


// UPDATE
// PATCH /examples/5a7db6c74d55bc51bdf39793
router.patch('/tasks/:id', requireToken, removeBlanks, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.task.owner

  Task.findById(req.params.id)
    .then(handle404)
    .then(task => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, task)

      // pass the result of Mongoose's `.update` to the next `.then`
      return task.updateOne(req.body.task)
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})
// ID=5f6217e70cfdb00639aa138e TOKEN="890ac712d7a2ebfa57913158b6d360fc" CATEGORY="active" TITLE="complete assignment" TEXT="FINISH PROJECT 4" sh curl-scripts/task/update.sh

// DESTROY
// DELETE /examples/5a7db6c74d55bc51bdf39793
router.delete('/tasks/:id', requireToken, (req, res, next) => {
  Task.findById(req.params.id)
    .then(handle404)
    .then(task => {
      // throw an error if current user doesn't own `example`
      requireOwnership(req, task)
      // delete the example ONLY IF the above didn't throw
      task.deleteOne()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})
// ID=5f6217e70cfdb00639aa138e TOKEN="890ac712d7a2ebfa57913158b6d360fc" sh curl-scripts/task/destroy.sh

module.exports = router

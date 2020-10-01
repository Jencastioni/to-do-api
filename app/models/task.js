const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    options: [ '1', '2', '3', '4', 'Completed']
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  checkBox: {
    type: Boolean,
    required: false,
    default: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toObject: {virtuals: true}
})

module.exports = mongoose.model('Task', taskSchema)

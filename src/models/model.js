const mongoose = require('mongoose');

const mongoSchema = new mongoose.Schema({
  content: {
    type: String,
    require: [true, "must have content"],
  }
});

const Model = mongoose.model('Model', mongoSchema);
module.exports = Model;
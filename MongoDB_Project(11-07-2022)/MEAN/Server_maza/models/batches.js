//const { default: mongoose } = require('mongoose');

mongoose = require('mongoose');

batchesSchema = new mongoose.Schema({
  name: {
    type:String,
  },
  duration: {
    type:Number,
  },
});


batches = mongoose.model("batches", batchesSchema);

module.exports = batches;
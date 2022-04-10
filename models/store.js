var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var storeSchema = new Schema({
  nom : String,
  done : {
    type : Boolean,
    default : false
  },
  createdAt : {
    type : Date,
    default : Date.now
  },
});


module.exports = mongoose.model('store', storeSchema);




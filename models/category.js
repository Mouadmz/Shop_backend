var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var categorySchema = new Schema({
    nom: String,
    description: String,
    store: { type: Schema.Types.ObjectId, ref: 'store' },
    done : {
      type : Boolean,
      default : false
    },
    createdAt : {
      type : Date,
      default : Date.now
    },
   
  });

  module.exports = mongoose.model('category', categorySchema );
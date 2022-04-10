var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({
    nom: String,
    prix: Number,
    categories: { type: Schema.Types.ObjectId, ref: 'category' },
    done : {
      type : Boolean,
      default : false
    },
    createdAt : {
      type : Date,
      default : Date.now
    },
   
  });
  module.exports = mongoose.model('product', productSchema );

const Store = require('../models/store');

let store = require('../models/store');
let tablestore = [store];

function createstore(req, res) {
    let store = require('../models/store');
    let newstore = store ({
        nom: req.body.nom,
    });

    tablestore.push(newstore);
    console.log(tablestore);
    newstore.save()
    .then((savedstore) => {

        //send back the created store
        res.json(savedstore);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readstores(req, res) {

    let store = require("../models/store");

    store.find({})
    .then((stores) => {
        res.status(200).json(stores);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readstore(req, res) {

    let store = require("../models/store");

    store.findById({_id : req.params.id})
    .then((store) => {
        res.status(200).json(store);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updatestore(req, res) {

    let store = require("../models/store");

    store.findByIdAndUpdate({_id: req.params.id}, 
        {nom : req.body.nom}, 
        {new : true})
    .then((updatedstore) => {
        res.status(200).json(updatedstore);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deletestore(req, res) {

    let store = require("../models/store");

    store.findOneAndRemove({_id : req.params.id})
    .then((deletedstore) => {
        res.status(200).json(deletedB);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function done(req, res) {

    let store = require("../models/store");

    store.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then((updatedstore) => {
        res.status(200).json(updatedstore);
    }, (err) => {
        res.status(500).json(err);
    });

}

function undone(req, res) {

    let store = require("../models/store");

    store.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then((updatedstore) => {
        res.status(200).json(updatedstore);
    }, (err) => {
        res.status(500).json(err);
    });

}
// créer une category pour une store donnée
function createcategory(req, res) {
    let category = require('../models/category');
    let newcategory = category ({
        nom: req.body.nom,
        description: req.body.description,
        store: req.body.store,
    });

    let i = 0;
    while(i<tablestore.length && tablestore[i].nom !== req.body.store ){
        i++;
    }

    if(i<tablestore.length){
        newcategory.store = p._id;
    }else{
       
        let store = require('../models/store');
        let newstore = new store({
            nom: req.body.store
        });
        newcategory.store = newstore._id;
        
    }

    if (this.newcategory != {nom:'',description:'',store:''}){

            newcategory.save()
    .then((savedcategory) => {

        //send back the created store
        res.json(savedcategory);
            
    }, (err) => {
        res.status(400).json(err)
    });


    }else{
        res.status(500).json("Veuillez fournir toutes les données nécessaires pour la catégorie à créer. Merci!")
    }
  
    
}

function readcategorys(req, res) {

    let category = require("../models/category");

    category.find({})
    .then((category) => {
        res.status(200).json(category);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readcategory(req, res) {

    let category = require("../models/category");

    category.findById({_id : req.params.id})
    .then((category) => {
        res.status(200).json(category);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updatecategory(req, res) {

    let category = require("../models/category");

    category.findByIdAndUpdate({_id: req.params.id}, 
        {title : req.body.title, 
        description : req.body.description}, 
        {new : true})
    .then((updatedcategory) => {
        res.status(200).json(updatedcategory);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deletecategory(req, res) {

    let category = require("../models/category");

    category.findOneAndRemove({_id : req.params.id})
    .then((deletedcategory) => {
        res.status(200).json(deletedB);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function done(req, res) {

    let category = require("../models/category");

    Todo.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then((updatedcategory) => {
        res.status(200).json(updatedcategory);
    }, (err) => {
        res.status(500).json(err);
    });

}

function undone(req, res) {

    let category = require("../models/category");

    category.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then((updatedcategory) => {
        res.status(200).json(updatedcategory);
    }, (err) => {
        res.status(500).json(err);
    });

}

function createproduct(req, res) {
    let product = require('../models/product');
    let newproduct = product ({
        designation: req.body.designation,
        prix: req.body.prix,
        quantity: req.body.quantity,
    });
  
    newproduct.save()
    .then((savedproduct) => {

        //send back the created store
        res.json(savedproduct);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readproduct(req, res) {

    let product = require("../models/product");

    product.find({})
    .then((product) => {
        res.status(200).json(product);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readproduct(req, res) {

    let product = require("../models/product");

    product.findById({_id : req.params.id})
    .then((product) => {
        res.status(200).json(product);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateproduct(req, res) {

    let product = require("../models/product");

    product.findByIdAndUpdate({_id: req.params.id}, 
        {title : req.body.title, 
        description : req.body.description}, 
        {new : true})
    .then((updatedproduct) => {
        res.status(200).json(updatedproduct);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteproduct(req, res) {

    let product = require("../models/product");

    product.findOneAndRemove({_id : req.params.id})
    .then((deleteproduct) => {
        res.status(200).json(deletedB);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function done(req, res) {

    let product = require("../models/product");

    product.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then((updatedcategory) => {
        res.status(200).json(updatedproduct);
    }, (err) => {
        res.status(500).json(err);
    });

}

function undone(req, res) {

    let product = require("../models/product");

    product.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then((updatedproduct) => {
        res.status(200).json(updatedproduct);
    }, (err) => {
        res.status(500).json(err);
    });

}
module.exports.create = createstore;
module.exports.reads = readstores;
module.exports.read = readstore;
module.exports.delete = deletestore;
module.exports.update = updatestore;
module.exports.done = done;

module.exports.undone = undone;

module.exports.createC = createcategory;
module.exports.readsC = readcategorys;
module.exports.readC = readcategory;
module.exports.deleteC = deletecategory;
module.exports.updateC = updatecategory;
module.exports.doneC = done;
module.exports.undoneC = undone;

module.exports.createP = createproduct;
module.exports.readsP = readproduct;
module.exports.readP = readproduct;
module.exports.deleteP = deleteproduct;
module.exports.updateP = updateproduct;
module.exports.doneP = done;
module.exports.undoneP = undone;

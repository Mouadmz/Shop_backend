//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/controller');

//CREATE
router.post("/store", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/stores", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/stores/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/stores/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/stores/:id", (req, res) => {
    
    controller.delete(req, res);

});

//COMPLETED
router.post("/stores/:id/done", (req, res) => {

    controller.done(req, res);

});

router.post("/stores/:id/undone", (req, res) => {

    controller.undone(req, res);

});

//CREATE
router.post("/category", (req, res) => {

    controller.createC(req, res);

});

//READ
router.get("/categories", (req, res) => {
    
    controller.readsC(req, res);

});

router.get("/categories/:id", (req, res) => {
    
    controller.readC(req, res);

});

//UPDATE
router.put("/categories/:id", (req, res) => {
    
    controller.updateC(req, res);

});

//DELETE
router.delete("/categories/:id", (req, res) => {
    
    controller.deleteC(req, res);

});

//COMPLETED
router.post("/categories/:id/done", (req, res) => {

    controller.doneC(req, res);

});

router.post("/categories/:id/undone", (req, res) => {

    controller.undoneC(req, res);

});

//CREATE
router.post("/product", (req, res) => {

    controller.createP(req, res);

});

//READ
router.get("/products", (req, res) => {
    
    controller.readsP(req, res);

});

router.get("/products/:id", (req, res) => {
    
    controller.readP(req, res);

});

//UPDATE
router.put("/products/:id", (req, res) => {
    
    controller.updateP(req, res);

});

//DELETE
router.delete("/products/:id", (req, res) => {
    
    controller.deleteP(req, res);

});

//COMPLETED
router.post("/products/:id/done", (req, res) => {

    controller.doneP(req, res);

});

router.post("/products/:id/undone", (req, res) => {

    controller.undoneP(req, res);

});

module.exports = router;
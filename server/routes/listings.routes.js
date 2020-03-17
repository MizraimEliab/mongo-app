const express = require('express');
const router = express.Router();
const listingsController = require('../controllers/Listings.controller');

  
    router.get('/', listingsController.getListenings);
    router.get('/ptype', listingsController.getProperty_type);
    router.get('/price', listingsController.getByPrice);
    router.post('/', listingsController.createListening);
    router.get('/:id', listingsController.getListening);
    router.put('/:id', listingsController.editListening);
    router.delete('/:id', listingsController.deleteListening);
module.exports = router;
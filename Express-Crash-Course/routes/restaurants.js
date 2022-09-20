const express = require('express');
const router = express.Router();

// import data
const restaurants = require('../data');

let currentRestaurantId = 4


//  replace app with router
// GET Method
router.get('/', (req, res)=>{
    res.json(restaurants);
});

// GET Method
router.get('/:id', (req, res)=> {
    const restaurantId = Number.parseInt(req.params.id, 10);
    const restaurant  = restaurants.find((restaurant) => restaurant.id === restaurantId);
    res.json(restaurant);
});

// POST Method
router.post('/', (req, res)=>{
    currentRestaurantId += 1;

    // จะต้องไป set middleware
    const newRestaurant = {
        id:currentRestaurantId,
        ...req.body
    };
    restaurants.push(newRestaurant);
    res.json(newRestaurant);
});

// PUT Method
router.put('/:id', (req, res)=>{
    const restaurantId = Number.parseInt(req.params.id, 10);
    const restaurantIndex = restaurants.findIndex((restaurant) => restaurant.id === restaurantId);
    const updatedRestaurant = {
        id: restaurantId,
        ...req.body
    };
    restaurants[restaurantIndex] = updatedRestaurant
    res.json(updatedRestaurant);
});

// Delete Method
router.delete('/:id', (req, res)=>{
    const restaurantId = Number.parseInt(req.params.id, 10);
    const restaurantIndex = restaurants.findIndex((restaurant) => restaurant.id === restaurantId);
    restaurants.splice(restaurantIndex, 1);
    res.sendStatus(204);
});


module.exports = router;
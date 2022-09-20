// import express
const express = require('express');

// import data
const restaurants = require('../data')
// import router
const router = express.Router();

// ลองเรียกใช้ method get 
// ยิง req และส่ง res ไปที่ browser
router.get('/', (req, res)=>{
    res.render('./layouts/index', {
        restaurants
    });
});

module.exports = router;
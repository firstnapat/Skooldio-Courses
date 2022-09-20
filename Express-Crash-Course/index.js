// import express
const express = require('express');

// import router
const restaurantsRouter = require('./routes/restaurants');

// import middleware
const logger = require('./middleware/logger')

// สร้าง app ด้วย express โดยจะ return เป็น object app 
const app = express();

// Custom middleware
app.use(logger);




// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));



// Routes
app.use('/apis/restaurants', restaurantsRouter);




// ลองเรียกใช้ method get 
// ยิง req และส่ง res ไปที่ browser
app.get('/', (req, res)=>{
    res.send('<h1>Hello Express</h1>');
});

// สร้าง server ด้วย listen
app.listen(3000, () => {
    console.log('listening to port 3000');
});

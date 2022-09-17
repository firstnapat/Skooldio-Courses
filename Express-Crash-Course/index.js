// import express
const express = require('express');

// import router
const restaurantsRouter = require('./routes/restaurants');


// สร้าง app ด้วย express โดยจะ return เป็น object app 
const app = express();

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

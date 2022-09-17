// import express
const express = require('express');
// สร้าง app ด้วย express โดยจะ return เป็น object app 
const app = express();
// สร้าง server ด้วย listen
app.listen(3000, () => {
    console.log('listening to port 3000');
});

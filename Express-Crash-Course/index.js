// import path of static file
const path = require('path')

// import express
const express = require('express');
// import handlebars
const { engine } = require('express-handlebars');
// import router
const restaurantsRouter = require('./routes/restaurants');
// import indexRouter
const indexRouter = require('./routes');


// import middleware
const logger = require('./middleware/logger');
const { request } = require('express');


// สร้าง app ด้วย express โดยจะ return เป็น object app 
const app = express();

// ย่อคำโดยใช้ extension name
// Template engines
app.engine('hbs', engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Custom middleware
app.use(logger);


// Routes
app.use('/apis/restaurants', restaurantsRouter);
app.use('/', indexRouter);



// สร้าง server ด้วย listen
app.listen(3000, () => {
    console.log('listening to port 3000');
});

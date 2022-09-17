const express = require('express');
const router = express.Router();
//  replace app with router
// GET Method
router.get('/', (req, res)=>{
    res.send('GET API');
});

// GET Method
router.get('/:id', (req, res)=> {
    res.send('GET 1 API');
});

// POST Method
router.post('/', (req, res)=>{
    res.send('POST API');
});

// PUT Method
router.put('/:id', (req, res)=>{
    res.send('PUT API');
});

// Delete Method
router.delete('/:id', (req, res)=>{
    res.send('DELETE API');
});


module.exports = router;
const express = require('express');

const router = express.Router();

router.get('/bio', (req, res) => {
    res.send('Bio')
})

router.get('/contact', (req, res) => {
    res.send('Contact')
})


router.get('*', (req, res) => {
    console.log(req.path)
    res.send(req.path.toUpperCase().slice(1));
})

module.exports = router;

const express = require('express');

const router = express.Router();

router.get('/bio', (req, res) => {
    res.send('Bio')
})

router.get('/contact', (req, res) => {
    res.send('Contact')
})


router.get('/:id', (req, res) => {
    // console.log(req.path)
    res.send(req.params.id.toUpperCase());
})

module.exports = router;

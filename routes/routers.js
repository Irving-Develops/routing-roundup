const express = require('express');

const router = express.Router();


router.get('*', (req, res) => {
    console.log(req.path)
    res.send(req.path.toUpperCase().slice(1));
})

module.exports = router;

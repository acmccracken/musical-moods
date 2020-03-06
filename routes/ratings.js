const express = require("express");
const router = express.Router();
const ratingsCtrl = require("../controllers/ratings");


router.post('/songs/:id/ratings', ratingsCtrl.create);

module.exports = router;
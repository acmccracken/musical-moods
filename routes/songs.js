const express = require("express");
const router = express.Router();
const songsCtrl = require("../controllers/songs");


router.get("/", songsCtrl.index);


module.exports = router;
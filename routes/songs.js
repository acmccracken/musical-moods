const express = require("express");
const router = express.Router();
const songsCtrl = require("../controllers/songs");


router.get("/", songsCtrl.index);

router.get('/new', songsCtrl.new);
router.get('/:id', songsCtrl.show);

router.post('/', songsCtrl.create);
router.delete('/:id', songsCtrl.delete);
router.put('/:id', songsCtrl.update);




module.exports = router;
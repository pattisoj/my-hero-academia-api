var express = require("express");
var router = express.Router();
var data = require("../data/characters.json");

/* GET characters listing. */
router.get("/", function (req, res, next) {
  res.json(data.characters);
});

module.exports = router;

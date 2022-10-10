var express = require("express");
var router = express.Router();
var data = require("../data/characters.json");

/* GET all characters. */
router.get("/students", function (req, res, next) {
  res.json(data.students);
});

/* GET all characters. */
router.get("/villains", function (req, res, next) {
  res.json(data.villains);
});

/* GET all characters. */
router.get("/", function (req, res, next) {
  res.json(data);
});

module.exports = router;

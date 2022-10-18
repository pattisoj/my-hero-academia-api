var createError = require("http-errors");
var express = require("express");
var router = express.Router();
var data = require("../data/characters.json");

/* GET all students. */
router.get("/students", function (req, res, next) {
  res.json(data.students);
});

/* GET all villains. */
router.get("/villains", function (req, res, next) {
  res.json(data.villains);
});

/* GET all characters. */
router.get("/", function (req, res, next) {
  res.json(data);
});

/* Handle 404 error */
router.use(function (req, res) {
  res.status(400);
  res.render("404.jade", { title: "404: File Not Found" });
});

/* Handle 500 error */
router.use(function (error, req, res, next) {
  res.status(500);
  res.render("500.jade", { title: "500: Internal Server Error", error: error });
});

module.exports = router;

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

/* Catch errors */
router.use(function (req, res, next) {
  next(createError(404));
});

router.use(function (err, req, res, next) {
  // set locals
  res.locals.message = err.message;
  res.locals.error = err;
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
module.exports = router;

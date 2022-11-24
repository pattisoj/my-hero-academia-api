const express = require("express");
const router = express.Router();
const data = require("../data/characters.json");
const myModels = require("../models/characters");
const getCharacterByID = myModels.characterByID;

/* GET all students. */
router.get("/students", function (req, res, next) {
  res.json(data.students);
});

/* GET all villains. */
router.get("/villains", function (req, res, next) {
  res.json(data.villains);
});

/* GET all heroes. */
router.get("/heroes", function (req, res, next) {
  res.json(data.heroes);
});

/* GET character by ID */
router.get("/:id", function (req, res) {
  let searchedID = req.params.id;
  const responseObject = getCharacterByID(searchedID);
  res.json(responseObject);
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

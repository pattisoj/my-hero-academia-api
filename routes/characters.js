var express = require("express");
var router = express.Router();

/* GET characters listing. */
router.get("/", function (req, res, next) {
  res.send("This route will supply character information");
});

module.exports = router;

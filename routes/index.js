var express = require("express");
var router = express.Router();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

/* Documentation styling options */
var options = {
  customCss: `.topbar-wrapper img {content:url(https://1000logos.net/wp-content/uploads/2021/11/My-Hero-Academia-Logo.png); width:20vw; height:auto;} .swagger-ui .topbar { background-color: #FFFFFF; margin-bottom: -2vh;}`,
  customSiteTitle: "My Hero Academia API",
  customfavIcon: "/favicon.ico",
};

/* Get the documentation */
router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

/* Handle 404 error */
router.use(function (req, res) {
  res.status(400);
  res.render("404.jade", {
    title: "404: File Not Found",
  });
});

/* Handle 500 error */
router.use(function (error, req, res, next) {
  res.status(500);
  res.render("500.jade", { title: "500: Internal Server Error", error: error });
});

module.exports = router;

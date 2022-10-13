var express = require("express");
var router = express.Router();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

/* Documentation styling options */
var options = {
  customCss: `.topbar-wrapper img {content:url(https://1000logos.net/wp-content/uploads/2021/11/My-Hero-Academia-Logo.png); width:20vw; height:auto;} .swagger-ui .topbar { background-color: #FFFFFF; margin-bottom: -10vh; }`,
  customSiteTitle: "My Hero Academia API",
  customfavIcon: "/favicon.ico",
};

/* Get the documentation */
router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

module.exports = router;

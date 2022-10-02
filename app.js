var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var charactersRouter = require("./routes/characters");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

var options = {
  customCss: `.topbar-wrapper img {content:url(https://1000logos.net/wp-content/uploads/2021/11/My-Hero-Academia-Logo.png); width:20vw; height:auto;} .swagger-ui .topbar { background-color: #FFFFFF; margin-bottom: -10vh; }`,
  customSiteTitle: "My Hero Academia API",
  customfavIcon: "./assets/favicon.ico",
};

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
app.use("/characters", charactersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

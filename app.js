const express = require("express");
const app = express();
const path = require("node:path");

const indexRouter = require("./routers/indexRouter.js");
const newRouter = require("./routers/newRouter");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(3000);
console.log(`App is listening on port 3000`);

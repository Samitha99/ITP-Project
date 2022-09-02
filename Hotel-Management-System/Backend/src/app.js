import "dotenv/config";
import express from "express";
import cors from "cors";
import passport from "passport";
import session from "express-session";
// var session = require("express-session");
import logger from "./utils/logger";
import config from "./configs";
import MongoStore from "connect-mongo";
import { connect } from "./utils/database.connection";
import { googleAuth } from "./configs/google.auth";
import { routesInit } from "./api/routes";
import employeeRoutes from "./api/routes/employee";
import employeeattRoutes from "./api/routes/employeeAttendance";
import packagesRoutes from "./api/routes/packages";

// const FoodModel = require("./api/models/Food");

const app = express();
const PORT = process.env.PORT || "8090";
//api link manage
app.use(cors());
//request body size defines
app.use(express.json({ limit: "20mb" }));
app.use(
  session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: config.DB_CONNECTION_STRING }),
    cookie: {
      secure: false,
      expires: new Date(Date.now() + 10000),
      maxAge: 10000,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res, next) => {
  res.send("<a href='http://localhost:8090/auth/google'>Login With Google</a>");
  next();
});

//routes
app.use("/api/customer", require("./api/routes/customer.routers"));
app.use("/api/food", require("./api/routes/food.route"));
app.use("/api/supplier", require("./api/routes/supplier.route"));
app.use("/api/category", require("./api/routes/category.route"));
app.use("/api/employee", employeeRoutes);
app.use("/api/employeeAttendance", employeeattRoutes);

//running part
app.listen(PORT, () => {
  logger.info(`Server is up and running on PORT ${PORT}`);
  connect();
  routesInit(app, passport);
  googleAuth(passport);
});

//app middleware
// app.use(bodyParser.json());

app.use(employeeRoutes);

app.use(packagesRoutes);

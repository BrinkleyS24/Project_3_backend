///////////////////////////////
// DEPENDENCIES
////////////////////////////////
require("dotenv").config();
const { PORT, MONGODB_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const mealsController = require('./controllers/meal')
///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


app.get("/", (req, res) => res.redirect("/meals"))
///////////////////////////////
// ROUTES
////////////////////////////////
app.use("/meals", mealsController);
///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));


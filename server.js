const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const users = require("./routes/api/users");

//middleware
app.use(morgan());
app.use(cors("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//connect mongo
const db = require("./config/keys").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

//connect routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));

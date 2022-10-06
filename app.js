// app.js
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");

//new added
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
app.use(cors());

// routes
const books = require("./routes/api/book");

const app = express();

// Connect Database
connectDB();

//new added
require("./models/Book.js");

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello world!123"));

// use Routes
app.use("/api/books", books);

const PORT = process.env.PORT || 5000;
//const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

//new added

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//import routes
require("./routes/api/book.js")(app);

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./2022_S1_CISE_Assignment1B_Group10-main/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./2022_S1_CISE_Assignment1B_Group10-main/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

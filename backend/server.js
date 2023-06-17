//create varables and import pacages
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//import .env
require("dotenv").config();

//initialize port number
const PORT = process.env.PORT || 8030;

//use dependancies
app.use(cors());
//get json using bodyparser
app.use(bodyParser.json());

//connect mongo db options
const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!')
})

const db = mongoose.connection;

const contactsRouter = require("./routes/contacts.js");
app.use("/contactDetails", contactsRouter);


app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
})


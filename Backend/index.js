const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config()

app.use(express.json());
app.use(cors());
const db=process.env.DB_URL

mongoose.connect(db)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("Not connected",);
  });
 
const User = require("./model/db"); 

// create----
app.post("/create", (req, res) => {
  User.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

// show data--------
app.get("/getdata", (req, res) => {
  User.find({})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

// delete data-----
app.delete("/deleteuser/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

// update data---
app.get("/getuser/:id", (req, res) => {
  const id = req.params.id;
  User.findById({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(
    { _id: id },{
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
    })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

const PORT=process.env.PORT || 5500
app.listen(PORT, () => {
  console.log("Server is running on 4500 port");
});

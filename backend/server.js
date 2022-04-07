const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Classes = require("./models/classes");
const School = require("./models/schools");
const Teacher = require("./models/teachers");

mongoose
  .connect("mongodb://localhost:27017/school_management", {})
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err.message);
  });       

app.use(express.json())
app.use(cors());

app.get("/", (req, res) => {
  console.log("sending from backend");
});
app.get("/class", async (req, res) => {
  try {
    const result = await Classes.find();
    res.status(200).send(result)
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/school", async (req, res) => {
    try {
      const result = await School.find();
      res.status(200).send(result);
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  });
  app.get("/teacher", async (req, res) => {
    try {
      const result = await Teacher.find();
      res.status(200).send(result);
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  });
app.listen(8000, (req, res) => {
  console.log("listening on port" + 8000);
});

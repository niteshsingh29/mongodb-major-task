const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Cls = require("./models/cls");
const School = require("./models/schools");
const Teacher = require("./models/teachers");
const path = require("path");
const Schoolclass = require("./models/school_classes");

mongoose
  .connect("mongodb://localhost:27017/school_management", {})
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("sending from backend");
});

app.post("/createSchool", async (req, res) => {
  try {
    const schoolDocument = new School({
      name: req.body.schoolname,
    });
    const schoolData = await schoolDocument.save();
    console.log("dataSent successfully to mongo db");
  } catch (err) {
    console.log(err.message);
  }
});
app.get("/getclass", async (req, res) => {
  try {
    const result = await Cls.find();
    console.log("cls", result);
    res.status(200).send(result);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/getschools", async (req, res) => {
  try {
    const result = await School.find();
    res.status(200).send(result);
  } catch (err) {
    console.log(err.message);
  }
});
// app.get("/teacher", async (req, res) => {
//   try {
//     const result = await Teacher.find();
//     res.status(200).send(result);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

app.post("/sendid", async (req, res) => {
  try {
    const school_id = req.body.schoolId;
    const class_id = req.body.classId;

    const schoolClass_document = new Schoolclass({
      school_id: school_id,
      class_id: class_id,
    });
    const insertedData = await schoolClass_document.save();
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/getRespectiveclass", async (req, res) => {
  const school_strength = req.body.schoolId;
  try {
    const class_strength = await Schoolclass.findOne({
      school_id: school_strength,
    });

    const classes = await Cls.find({
      class: { $lte: class_strength.class_id },
    });
    console.log("classes", classes);
    res.status(200).send({ ...class_strength, classes });
    // res.status(200).send(class_strength);
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/teacherAssign", async (req, res) => {
  try {
    const school_id = req.body.schoolId;
    const selected_class = req.body.checked_classes;
    const teachername = req.body.teacherName;
    const finalDocument = new Teacher({
      school_id: school_id,
      selected_class: selected_class,
      teachername: teachername,
    });
    const result = await finalDocument.save();
  } catch (err) {
    console.log(err.message);
  }
});
// app.post("/Assignclass", (req, res) => {
//   try {
//     const selected_class = req.body.classId;
//     console.log(selected_class);
//   } catch (err) {
//     console.log(err.message);
//   }
// });
app.get("/teacher", async (req, res) => {
  try {
    const result = await Teacher.find();
    res.status(200).send(result)
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(8000, (req, res) => {
  console.log("listening on port" + 8000);
});

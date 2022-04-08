const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Classes = require("./models/classes");
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
    const result = await Classes.find();
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
// app.post("/teacher", async (req, res) => {
//   try {
//     const school = req.body.selectedValue;
//     const clas = req.body.selectedclas;

//     console.log(school);
//     console.log(clas);
//     const school_idvalid = mongoose.Types.ObjectId.isValid(school);
//     const clas_idvalid = mongoose.Types.ObjectId.isValid(clas);
//     console.log(clas_idvalid);

//     if (school_idvalid && clas_idvalid) {
//       const result = await Teacher.find({
//         school_id: school,
//       });
//       console.log(result);
//       const finalResult = result.filter((item) => item.class_id.includes(clas));
//       console.log(finalResult);
//       res.status(200).send(finalResult);
//     } else {
//       console.log("not a valid school/class id");
//     }
//   } catch (err) {
//     console.log(err.message);
//   }
// });

app.listen(8000, (req, res) => {
  console.log("listening on port" + 8000);
});

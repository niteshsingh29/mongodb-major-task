import axios from "axios";
import { useState, useEffect } from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Assignteacher = () => {
  const [schoolList, setSchoolList] = useState([]);
  const [schoolId, setSchoolId] = useState(null);
  const [classStrength, setClassStrength] = useState({
    classes: [],
  });
  const [teacherName, setTeacherName] = useState("");
  const [ischecked, setChecked] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/getschools")
      .then((response) => {
        setSchoolList(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  useEffect(() => {
    axios
      .post("http://localhost:8000/getRespectiveclass", {
        schoolId: schoolId,
      })
      .then((response) => {
        console.log("response.data", response.data);
        setClassStrength(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [schoolId]);

  console.log(classStrength);

  // const renderingClass = [];
  // const handleclassStrength = () => {
  //   for (let i = 1; i <= classStrength._doc.class_id; i++) {
  //     renderingClass.push(i);
  //   }
  // };

  // handleclassStrength();

  const handle_Teacher = () => {
    axios
      .post("http://localhost:8000/teacherAssign", {
        schoolId: schoolId,
        checked_classes: ischecked,
        teacherName: teacherName,
      })
      .then(() => {
        console.log("teaacher assigned");
      })
      .catch((err) => {
        console.log(err.message);
      });
      alert("Teacher assigned successfully")
      setSchoolId(null);
      setChecked([])
      setTeacherName("")


  };

  const handleChange = (e) => {
    let data = ischecked;
    data.push(e.target.value);
    setChecked(data);
  };

  return (
    <>
      <div>
        <img
          src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          style={{ position: "relative", width: "100%", height: "1150px" }}
        />
      </div>
      <div className="container">
        <h1
          className="text-warning"
          style={{
            fontSize: "70px",
            position: "absolute",
            left: "450px",
            top: "50px",
          }}
        >
          Assign Teachers !!
        </h1>
        <div
          className="mt-5"
          style={{ position: "absolute", left: "750px", top: "150px" }}
        >
          <FormControl className="mt-3">
            <h1 className="text-warning" style={{ fontSize: "50px" }}>
              Select School
            </h1>
            <Select
              placeholder="Select School"
              onChange={(e) => setSchoolId(e.target.value)}
              style={{ width: "500px", height: "50px" }}
              className="bg-warning"
            >
              {schoolList.map((item) => (
                <option
                  className="text-dark"
                  style={{ backgroundColor: "white" }}
                  value={item._id}
                >
                  {item.name}
                </option>
              ))}
            </Select>
          </FormControl>

          <div className="mt-3">
            <h1 className="text-warning" style={{ fontSize: "50px" }}>
              Select Class
            </h1>
            <FormGroup className="text-white">
              {classStrength.classes.map((item) => {
                return (
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="warning"
                        value={item.class}
                        onChange={(e) => handleChange(e)}
                      />
                    }
                    label={item.class}
                  />
                );
              })}
            </FormGroup>
          </div>

          <h1 className="text-warning mt-5" style={{ fontSize: "40px" }}>
            Enter Teacher Name
          </h1>
          <FormLabel htmlFor="schools" className="text-white my-2">
            Please assign Teachers !
          </FormLabel>
          <input
            type="text"
            className="bg-warning text-dark"
            placeholder="Enter Name"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
            style={{ width: "500px", height: "50px" }}
          />

          <div>
            <button
              className="mt-4 btn btn-outline-warning"
              onClick={handle_Teacher}
            >
              Assign Teacher
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assignteacher;

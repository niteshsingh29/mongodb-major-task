import axios from "axios";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Createclass = () => {
  const [schoolId, setSchoolId] = useState(null);
  const [classId, setClassId] = useState(null);
  const [schoolList, setSchoolList] = useState([]);
  const [classList, setClassList] = useState([]);

  //   const url = "http://localhost:8000/createSchool";
  //   const handleCreateschoolbutton = () => {
  //     axios
  //       .post(url, {
  //         schoolname: schoolname,
  //       })
  //       .then(() => {
  //         console.log("school has been created successfully");
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //     schoolname
  //       ? alert("School has been created successfully")
  //       : alert("Please enter school name");
  //     setSchoolName("");
  //   };

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
      .get("http://localhost:8000/getclass")
      .then((response) => {
        setClassList(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handlesubmitbutton = () => {
    axios
      .post("http://localhost:8000/sendid", {
        schoolId: schoolId,
        classId: classId,
      })
      .then(() => {
        console.log("sent id to database");
      })
      .catch((error) => {
        console.log(error.message);
      });
      schoolId
      ? alert("Class Strength has been created successfully")
      : alert("Please create class first");


  };


  return (
    <>
      <div>
        <img
          src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          style={{ position: "relative", width: "100%", height: "750px" }}
        />
      </div>
      <div className="container">
        <div
          className="mt-1"
          style={{ position: "absolute", left: "750px", top: "250px" }}
        >
          <FormControl>
            <h1 className="text-warning" style={{ fontSize: "50px" }}>
              Select Schools
            </h1>
            <FormLabel htmlFor="schools" className="text-white my-2">
              Please First Select Schools to create class
            </FormLabel>
            <Select
              placeholder="Select School"
              onChange={(e) => setSchoolId(e.target.value)}
              style={{ width: "500px", height: "50px" }}
              className="bg-warning text-dark"
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
          <FormControl className="mt-5">
            <h1 className="text-warning" style={{ fontSize: "50px" }}>
              Select Class
            </h1>
            <FormLabel htmlFor="schools" className="text-white my-2">
              Please Create class
            </FormLabel>
            <Select
              placeholder="Select Class"
              onChange={(e) => setClassId(e.target.value)}
              style={{ width: "500px", height: "50px" }}
              className="bg-warning text-dark"
            >
              {classList.map((item) => (
                <option
                  className="text-dark"
                  style={{ backgroundColor: "white" }}
                  value={item.class}
                >
                  {item.class}
                </option>
              ))}
            </Select>
          </FormControl>

          <div>
            <button
              className="mt-4 btn btn-outline-warning"
              onClick={handlesubmitbutton}
            >
              Submit !!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Createclass;

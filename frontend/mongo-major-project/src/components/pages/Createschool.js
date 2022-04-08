import axios from "axios";
import { useState } from "react";

const Createschool = () => {
  const [schoolname, setSchoolName] = useState("");
  console.log(schoolname);

  const url = "http://localhost:8000/createSchool";
  const handleCreateschoolbutton = () => {
    axios
      .post(url, {
        schoolname: schoolname,
      })
      .then(() => {
        console.log("school has been created successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
    schoolname
      ? alert("School has been created successfully")
      : alert("Please enter school name");
    setSchoolName("");
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
          <h1 className="text-white" style={{ fontSize: "70px" }}>
            Createschool
          </h1>
          <input
            type="text"
            className="mt-2"
            placeholder="Enter School Name"
            value={schoolname}
            onChange={(e) => setSchoolName(e.target.value)}
            style={{width: "500px", height: "50px"}}
            
          />
          <div>
            <button
              className="mt-4 btn btn-danger"
              onClick={handleCreateschoolbutton}
            >
              Createschool
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Createschool;

import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Schools = () => {
  const [state, setState] = useState([]);
  const [clas, setClas] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedclas, setSelectedclas] = useState(null);
  const [teacherstate, setTeacherstate] = useState([]);

  console.log(state);
  useEffect(() => {
    axios
      .get("http://localhost:8000/school")
      .then((response) => {
        setState(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/class")
      .then((response) => {
        setClas(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/teacher", {
        selectedValue: selectedValue,
        selectedclas: selectedclas,
      })
      .then((response) => {
        console.log("_id sent success");
        setTeacherstate(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.mesage);
      });
  };
  // if(teacherstate.length == 0) {
  //   console.log("yes")
  // }
  // else{
  //   console.log("no")
  // }

  return (
    <>
      <div className="container " style={{ marginTop: "150px" }}>
        <FormControl>
          <h1>Lets find teachers</h1>
          <FormLabel htmlFor="schools">Schools</FormLabel>
          <Select
            placeholder="Select School"
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            {state.map((item) => (
              <option value={item._id}>{item.schoolName}</option>
            ))}
          </Select>

          <FormLabel htmlFor="class">Class</FormLabel>
          <Select
            placeholder="Select Class"
            onChange={(e) => setSelectedclas(e.target.value)}
          >
            {clas.map((item) => (
              <option value={item._id}>{item.class}</option>
            ))}
          </Select>

          <button onClick={handleSubmit} className="btn btn-dark mt-5">
            Submit
          </button>
        </FormControl>

        {teacherstate.length == 0 ? (
          <h1 className="mt-5 text-danger">no teacher assigned to this classs</h1>
        ) : (
          <h1 className="mt-5">{teacherstate[0].name}</h1>
        )}
      </div>
    </>
  );
};
export default Schools;

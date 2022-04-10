import axios from "axios";
import { useState, useEffect } from "react";
const Fetchdata = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/teacher")
      .then((response) => {
          setState(response.data)
          console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  },[]);
  return (
    <>
      <div className="container mt-5">
        <table className="table border shadow mt-4">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Sr. No</th>
              <th scope="col">Teacher Name</th>
              <th scope="col">Classes Assigned</th>
            </tr>
          </thead>
          <tbody>
            {state.map((item, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.teachername}</td>
              <td>{item.selected_class.map((ele) => ele + " ")}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Fetchdata;

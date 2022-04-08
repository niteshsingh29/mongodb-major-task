import axios from "axios";
import { useState } from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";

const Assignteacher = () => {

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
            Assign Teachers !!
          </h1>
          <FormControl>
            <Select
              placeholder="Select School"
            //   onChange={handleChangeschool}
              style={{ width: "500px", height: "50px" }}
              className="bg-warning text-dark"
            >
              {/* {schoolList.map((item) => (
                <option
                  className="text-dark"
                  style={{ backgroundColor: "white" }}
                  value={item._id}
                >
                  {item.name}
                </option>
              ))} */}
            </Select>
          </FormControl>
          <div>
            <button
              className="mt-4 btn btn-danger"
            //   onClick={handleCreateschoolbutton}
            >
              Createschool
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assignteacher;
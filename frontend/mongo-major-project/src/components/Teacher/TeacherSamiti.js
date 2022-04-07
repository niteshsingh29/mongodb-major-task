import { Dropdown, DropdownButton } from "react-bootstrap";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as React from "react";
import Alert from "@mui/material/Alert";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const simulateNetworkRequest = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };
const TeacherSamiti = () => {
    const [isSubmit, setSubmit] = useState(false);
    useEffect(() => {
        if (isSubmit) {
          simulateNetworkRequest().then(() => {
            setSubmit(false);
          });
        }
      }, [isSubmit]);
      const handleSubmit = () => setSubmit(true);
  return (

    <>
          {isSubmit ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert
            iconMapping={{
              success: <CheckCircleOutlineIcon fontSize="inherit" />,
            }}
          >
            Congratulations! We Have Assigned the respective classes to Teachers
          </Alert>
        </Stack>
      ) : (
        <h3 className="text-center mt-5">Samiti English Medium School</h3>
      )}
      <div className="container">
        <div className="school-1 d-flex mt-5">
          <div className="teacher">
            <DropdownButton
              id="dropdown-item-button"
              title="Select Teachers"
              autoClose="inside"
            >
              <Dropdown.Item as="button">Rahul kumar</Dropdown.Item>
              <Dropdown.Item as="button">Sanjeev Singh</Dropdown.Item>
              <Dropdown.Item as="button">Akshay patel</Dropdown.Item>
              <Dropdown.Item as="button">Dhiraj Rawat</Dropdown.Item>
            </DropdownButton>
          </div>

          <FormGroup>
            <div
              className="classes mx-5"
              styles={{ display: "flex", flexDirection: "column" }}
            >
              <h1>Classes</h1>
              <div className="a">
                <FormControlLabel control={<Checkbox />} label="1st" />
              </div>
              <div className="a">
                <FormControlLabel control={<Checkbox />} label="2nd" />
              </div>
              <div className="a">
                <FormControlLabel control={<Checkbox />} label="3rd" />
              </div>
              <div className="a">
                <FormControlLabel control={<Checkbox />} label="4th" />
              </div>
              <div className="a">
                <FormControlLabel control={<Checkbox />} label="5th" />
              </div>
              <div className="a">
                <FormControlLabel control={<Checkbox />} label="6th" />
              </div>
              <div className="a">
                <FormControlLabel control={<Checkbox />} label="7th" />
              </div>
              <button className="btn btn-danger mt-2" onClick={handleSubmit}>Submit</button>
            </div>
          </FormGroup>
        </div>
      </div>
    </>
  );
};
export default TeacherSamiti;
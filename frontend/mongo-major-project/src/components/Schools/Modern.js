import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { Link } from "react-router-dom";

// function valuetext(value) {
//     console.log(value);
//   return `${value}`;
// }

const Modern = () => {
  const [sliderValue, setsliderValue] = useState(0);
  console.log(sliderValue);

  return (
    <>
      <div className="container">
        <h1 className="mx-5">Modern English High School</h1>
      </div>
      <div className="container d-flex">
        <div className="school-text mt-5 mx-5">
          <h2>Select Class</h2>
        </div>
        <div className="slider">
          <Box sx={{ width: 300, marginTop: 7 }}>
            <Slider
              aria-label="Class"
              //   defaultValue={30}
              getAriaValueText={(value) => setsliderValue(value)}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={12}
            />
          </Box>
        </div>
        <div className="output mx-5 mt-5">
          <h2 className="text-danger">{sliderValue}</h2>
        </div>
      </div>
      <div className="container mt-3">
        <Link to="/teacher-modern">
          <button className="btn btn-danger mx-5">Submit Class</button>
        </Link>
      </div>
    </>
  );
};

export default Modern;

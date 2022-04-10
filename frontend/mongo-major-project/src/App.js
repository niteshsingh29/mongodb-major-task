import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Schools from "./components/Schools";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Samiti from "./components/Schools/Samiti";
import Modern from "./components/Schools/Modern";
import Stmarks from "./components/Schools/Stmarks";
import TeacherModern from "./components/Teacher/Teacher";
import TeacherSamiti from "./components/Teacher/TeacherSamiti";
import TeacherSt from "./components/Teacher/TeacherSt";
import Createschool from "./components/pages/Createschool";
import Navbar from "./components/Navbar/Navbar";
import Createclass from "./components/pages/Createclass";
import Assignteacher from "./components/pages/Assignteacher";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/CreateSchool" element={<Createschool />} />
          <Route exact path="/CreateClass" element={<Createclass />} />
          <Route exact path="/Assignteacher" element={<Assignteacher />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Schools from "./components/Schools";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Samiti from "./components/Schools/Samiti";
import Modern from "./components/Schools/Modern";
import Stmarks from "./components/Schools/Stmarks";
import TeacherModern from "./components/Teacher/Teacher"
import TeacherSamiti from "./components/Teacher/TeacherSamiti"
import TeacherSt from "./components/Teacher/TeacherSt"




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Schools" element={<Schools />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Samiti" element={<Samiti />}></Route>
        <Route path="/Modern" element={<Modern />}></Route>

        <Route path="/st" element={<Stmarks />}></Route>
        {/* <Route path="/teacher-modern" element={<TeacherModern />}></Route>
        <Route path="/teacher-modern" element={<TeacherModern />}></Route>
        <Route path="/teacher-samiti" element={<TeacherSamiti />}></Route>
        <Route path="/teacher-st" element={<TeacherSt />}></Route> */}



      </Routes>
    </Router>
  );
}

export default App;

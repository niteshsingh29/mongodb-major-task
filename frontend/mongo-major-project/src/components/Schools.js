import { Button, Offcanvas, Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

const Schools = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [state, setState] = useState([]);
  const [clas, setClas] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:8000/school")
      .then((response) => {
        setState(response.data);
        console.log(response.data);
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
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1595134561159-11a5fbf6b3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1329&q=80"
            alt="First slide"
          />
          <Carousel.Caption style={{ marginBottom: "50px" }}>
            <Button variant="primary" onClick={handleShow}>
              See Schools List
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1595134561159-11a5fbf6b3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1329&q=80"
            alt="Second slide"
          />
          <Carousel.Caption style={{ marginBottom: "50px" }}>
            <Button variant="primary" onClick={handleShow}>
              See Schools List
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ fontSize: "37px" }}>
            List of Schools
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
              Select School
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {state.map((item) => (
                <Dropdown.Item>{item.schoolName}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
              Select Class
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {clas.map((item) => (
                <Dropdown.Item>{item.class}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default Schools;

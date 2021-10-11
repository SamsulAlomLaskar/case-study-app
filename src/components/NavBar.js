import React from "react";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  InputGroup,
  FormControl,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { withRouter } from "react-router-dom";

function NavBar(props) {
  // router part start

  const navigateToQuestion = () => {
    //Navigating programatically
    console.log(props);
    props.history.push("/");
  };
  const navigateToSearch = () => {
    //Navigating programatically
    console.log(props);
    props.history.push("/Search");
  };

  return (
    <div className="root m-5 mt-1">
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container fluid>
          <Navbar.Brand className="logo" style={{ cursor: "pointer" }}>
            <img
              src="assets\TechnoElevate.png"
              className="image"
              height="45px"
              width="160px"
              onClick={navigateToQuestion}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="" style={{}}>
              <Nav className="me-auto">
                <Row className="g-3">
                  <Col md={2}>
                    <div className="tech">
                      <Form.Select
                        aria-label="Default select example"
                        variant=""
                        id="dropdown-basic"
                        className="technol"
                      >
                        <option value="select">Technology</option>
                        <option value="ReactJs">ReactJs</option>
                        <option value="VueJs">VueJs</option>
                        <option value="Angular">Angular</option>
                        <option value="Java">Java</option>
                        <option value="JavaScript">JavaScript</option>
                      </Form.Select>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="Linktech">
                      <Form.Select
                        aria-label="Default select example"
                        variant=""
                        id="dropdown-basic"
                        className="linksize"
                      >
                        <option>Level</option>
                        <option value="JAVA">Easy</option>
                        <option value="INTERMEDIATE">Intermediate</option>
                        <option value="HARD">Expert</option>
                      </Form.Select>
                    </div>
                  </Col>

                  <Col md={2}>
                    <div className="formdate">
                      <Form.Control
                        type="text"
                        name="From Date"
                        placeholder="From Date"
                        onFocus={(e) => (e.target.type = "date")}
                      />
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="todate">
                      <Form.Control
                        type="text"
                        name="To Date"
                        placeholder="To Date"
                        onFocus={(e) => (e.target.type = "date")}
                      />
                    </div>
                  </Col>

                  <Col md={3}>
                    <div>
                      <InputGroup>
                        <FormControl
                          type="text"
                          placeholder="Search Question"
                          aria-label="Search"
                          className="search "
                        />
                      </InputGroup>
                    </div>
                  </Col>

                  <Col md={1}>
                    <div>
                      <Button
                        variant="warning"
                        style={{
                          color: "white",
                          backgroundColor: "orange",
                          width: "100%",
                        }}
                        className="searchbutton"
                        onClick={navigateToSearch}
                      >
                        Search
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default withRouter(NavBar);

/* import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Dropdown, Form, FormControl, Nav, Navbar, SearchIconWrapper,
} from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
// import 'assets/TechnoElevate.png'  
import "./NavBar.css";
// router import
import { withRouter } from "react-router-dom";
// import { Link } from "react-router-dom";


// router part start
function NavBar(props) {
  const navigateToQuestion =()=>{
    //Navigating programatically
    console.log(props);
    props.history.push('/')
}
  const navigateToSearch =()=>{
    //Navigating programatically
    console.log(props);
    props.history.push('/Search')
}
//end router part
 
  return (
    <div className="root m-5 mt-1">
      <nav class="navbar">
        <div class="container-fluid"></div>
        <a className="navbar-brand" href="#">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E1BAQGS1cn31kgizw/company-background_10000/0/1618496970289?e=2159024400&v=beta&t=Czj4LapkpkSksSbfhMpbF_o9q5qoRbIKBK6h5mnwYys"
            width="170"
            height="35"
            alt="TechnoElevate"
            
            // router part
            onClick={navigateToQuestion}/>
        </a>
      </nav>

      <Navbar>
        <Container>
          <Dropdown>
            <Dropdown.Toggle
              className="border border-dark"
              variant="default"
              id="dropdown-basic">
              Technology
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">ReactJS</Dropdown.Item>
              <Dropdown.Item href="#/action-2">JavaScript</Dropdown.Item>
              <Dropdown.Item href="#/action-3">AngularJS</Dropdown.Item>
              <Dropdown.Item href="#/action-3">VueJS</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              className="border border-dark"
              variant="outline success"
              id="test"
            >
              Level
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1"  value="easy" >Easy</Dropdown.Item>
              <Dropdown.Item href="#/action-2"  value="interdiate" >Intermediate</Dropdown.Item>
              <Dropdown.Item href="#/action-3"  value="difficult">Difficult</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    
          <Navbar.Collapse id="navbarScroll">
            <Nav
              // className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <input
                className="container1"
                type="date"
                placeholder="From date"
              />
              <input className="container2" type="date" placeholder="To date" />
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className=" me-1"
                aria-label="Search"
              />
             
              <Button className="root2" variant="outline-success" 
              // router part
               onClick={navigateToSearch}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default withRouter(NavBar); */
/* 
<div className='datepick'>
<DatePicker id='cont1' placeholderText = "From Date" 
selected ={selectedDate} onChange ={date => {setselectedDate(date)}}
dateFormat ='dd/MM/yyyy'
              maxDate  = {new Date()}
              showYearDropdown
              scrollableMonthYearDropdown/>
              <i class="far fa-calendar" id='root4'></i>
              </div>
              <div className='datepick'>
              <DatePicker id='cont2' placeholderText= "To date" selected ={selectDate} onChange ={date => setselectDate(date)}
              dateFormat ='dd/MM/ yyyy'
              maxDate  = {new Date()}
              
              showYearDropdown
              scrollableMonthYearDropdown  />
              <i class="far fa-calendar" id='root5'></i>
              
              
              
              </div> */

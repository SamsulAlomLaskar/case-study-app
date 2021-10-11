import React from 'react'
import { Col, FloatingLabel, Form, Row, Dropdown, ButtonGroup, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function SubQuestions(props) {


    return (
        <div>
           <Row className="p-2 g-2 col-10 h-100">
<Col  md>
    <FloatingLabel controlId="floatingInputGrid" label="Question">
      <Form.Control placeholder="Question" as="textarea" rows= "3" />
    </FloatingLabel>
  </Col>
  <Col md>
    <FloatingLabel controlId="floatingSelectGrid" label="Difficulty Level">
      <Form.Select aria-label="Floating label select example">
        <option value="select">-select-</option>
        <option value="Easy">Easy</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Expert">Expert</option>
      </Form.Select>
    </FloatingLabel>
  </Col>
</Row>
<div  className="d-flex">
<Row className="md-12 g-2 p-2 col-10 h-100" >
<Col md >
    <FloatingLabel controlId="floatingInputGrid" label="Answer">
      <Form.Control style={{ height: '100px' }}  placeholder="Answer" as="textarea" rows="8" />
    </FloatingLabel>
  </Col>
</Row> 
<Col md className="m-4 mb-5">
  <Button variant="warning"><i class="fas fa-plus-circle"></i>Add New</Button> 
  </Col>
</div>
        </div>
    )
}

export default SubQuestions

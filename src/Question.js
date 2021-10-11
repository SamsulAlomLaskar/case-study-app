import React, { useState } from "react";
import {
  Col,
  FloatingLabel,
  Form,
  Row,
  Dropdown,
  ButtonGroup,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Questions.css";
// import SubQuestions from "./SubQuestions";
import "./Questions.css";
import DeleteConfirmation from "../modals/DeleteConfirmation";
import SubmitModal from "../modals/SubmitModal";

function Question() {
  const [primaryInfo, setprimaryInfo] = useState({
    candidateName: "",
    department: "",
    clientName: "",
    technology: "",
  });
  console.log("primaryInfo", primaryInfo);

  // const [data, setdata] = useState([0])
  // console.log('data',data);

  const [questions, setQuestions] = useState([
    {
      question: "",
      answer: "",
      difficultyLevel: "",
    },
  ]);

  /* Deleting the column confirmation  */
  const [showSubmitModal, setshowSubmitModal] = useState(false);
  const showModal = () => {
    setshowSubmitModal(true);
  };

  const [isshowDelete, setisshowDelete] = useState(false);

  const [isSaved, setisSaved] = useState(false);
  /* 
  const confirmDeleteRow = () => {
    setconfirmDelete(false)
  } */

  const [getDeleteI, setgetDeleteI] = useState();

  const getDeleteIndex = (index) => {
    setgetDeleteI(index);
    console.log(getDeleteI);
  };

  /*  const [addNewRow, setaddNewRow] = useState(false);

  const addNewColumns = () => {
    setaddNewRow(true);
  }; */

  /* For Deleting Row */

  /*  const deleteRow=(index)=>{
      questions.splice(index,1)
      // const uploadDataCopy = [...questions]
      setQuestions([...questions])
      setisshowDelete(false)
      console.log(questions);
    }; */

  const deleteRow = (index) => {
    const uploadDataCopy = [...questions];
    uploadDataCopy.splice(index, 1);
    setQuestions(uploadDataCopy);
    setisshowDelete(false);
    console.log(index);
  };

  /* 
      const deleteRow = (index) => {
    const uploadDataCopy = [...questions];
    uploadDataCopy.map((val, id) => {
      if (index !== id) {
        uploadDataCopy.splice(index, 1);
        setQuestions(uploadDataCopy);
      }
    });
    setisshowDelete(false);
    console.log(index);
  };
   */

  /* For Adding New Row */
  // debugger
  const addRow = () => {
    const uploadDataCopy = [...questions];
    uploadDataCopy.push(1);
    setQuestions(uploadDataCopy);
  };

  //Candidate Name Validation
  const [candidateNameError, setcandidateNameError] = useState(false);
  const [candidateCharError, setcandidateCharError] = useState(false);

  //department dropdown Validation
  const [departmentError, setdepartmentError] = useState(false);

  //client name validations
  const [clientNameError, setclientNameError] = useState(false);
  const [clientNameCharError, setclientNameCharError] = useState(false);

  //technology validations
  const [technologyError, setTechnologyError] = useState(false);

  //question Validation
  const [questionError, setquestionError] = useState(false);
  const [questionCharError, setquestionCharError] = useState(false);

  //Difficulty level Validation
  const [diffLevelError, setdiffLevelError] = useState(false);

  const updatePrimaryInfo = (event) => {
    setprimaryInfo({
      ...primaryInfo,
      [event.target.name]: event.target.value,
    });
  };

  const updateQuestion = (event, index) => {
    const questionsCopy = [...questions];
    const questionsAtIndex = {
      ...questions[index],
      [event.target.name]: event.target.value,
    };
    questionsCopy[index] = questionsAtIndex;
    setQuestions(questionsCopy);
    // console.log('questions copy',questionsCopy);
    // console.log(questions);
  };
  const savedata = (event) => {
    const finalQuestionCopy = [...questions];
    primaryInfo.questions = finalQuestionCopy;
    setisSaved(true);
    console.log("primaryInfo", primaryInfo.questions);
    console.log("final data", primaryInfo);
  };

  const validateForm = (event) => {
    event.preventDefault();

    //destructuring the state values
    const { candidateName, department, clientName, technology } = primaryInfo;
    const { question, difficultyLevel } = questions;

    console.log(primaryInfo);
    console.log(questions);
    if (candidateName) {
      setcandidateNameError(false);
      if (candidateName.search(/[^a-zA-Z]+/)) {
        setcandidateCharError(false);
      } else {
        setcandidateCharError(true);
      }
    } else {
      setcandidateCharError(false);
      setcandidateNameError(true);
    }

    if (department == "") {
      setdepartmentError(true);
    } else {
      setdepartmentError(false);
    }

    if (clientName) {
      setclientNameError(false);

      if (clientName.search(/[^a-zA-Z]+/)) {
        setclientNameCharError(false);
      } else {
        setclientNameCharError(true);
      }
    } else {
      setclientNameCharError(false);
      setclientNameError(true);
    }
    if (technology == "") {
      setTechnologyError(true);
    } else {
      setTechnologyError(false);
    }

    //QA validation
    if (question) {
      setquestionError(false);
      if (question.search(/[^a-zA-Z]+/)) {
        setquestionCharError(false);
      } else {
        setquestionCharError(true);
      }
    } else {
      setquestionCharError(false);
      setquestionError(true);
    }

    if (difficultyLevel == "") {
      setdiffLevelError(true);
    } else {
      setdiffLevelError(false);
    }
  };

  return (
    <div className="m-5">
      <Row md={12}>
        <h2 id="header">Upload Your Questions</h2>
      </Row>
      <Form>
        <Row className="g-2 ">
          {/* className="row-cols-3 g-2 row-cols-lg-4 p-2" */}
          <Col md={3}>
            <FloatingLabel controlId="floatingInputGrid" label="Candidate Name">
              <Form.Control
                name="candidateName"
                type="text"
                placeholder="Candidate Name"
                value={primaryInfo.candidateName}
                onChange={updatePrimaryInfo}
              />
              {candidateNameError && (
                <Form.Text className="errmsg">
                  Please enter candidate name
                </Form.Text>
              )}
              {candidateCharError && (
                <Form.Text className="errmsg">
                  Candidate name should contain only characters
                </Form.Text>
              )}
            </FloatingLabel>
          </Col>
          <Col md={3}>
            <FloatingLabel controlId="floatingSelectGrid" label="Department">
              <Form.Select
                aria-label="Floating label select example"
                onChange={updatePrimaryInfo}
                value={primaryInfo.department}
                name="department"
              >
                <option value="select">-select-</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Payroll">Payroll</option>
              </Form.Select>
              {departmentError && (
                <Form.Text className="errmsg">
                  Please select any option
                </Form.Text>
              )}
            </FloatingLabel>
          </Col>
          <Col md={3}>
            <FloatingLabel controlId="floatingInputGrid" label="Client Name">
              <Form.Control
                name="clientName"
                type="text"
                placeholder="Candidate Name"
                value={primaryInfo.clientName}
                onChange={updatePrimaryInfo}
              />
              {clientNameError && (
                <Form.Text className="errmsg">
                  Please enter candidate name
                </Form.Text>
              )}
              {clientNameCharError && (
                <Form.Text className="errmsg">
                  Candidate name should contain only characters
                </Form.Text>
              )}
            </FloatingLabel>
          </Col>
          <Col md={3}>
            <FloatingLabel controlId="floatingSelectGrid" label="Technology">
              <Form.Select
                aria-label="Floating label select example"
                value={primaryInfo.technology}
                onChange={updatePrimaryInfo}
                name="technology"
              >
                <option value="select">-select-</option>
                <option value="ReactJs">ReactJs</option>
                <option value="VueJs">VueJs</option>
                <option value="Angular">Angular</option>
                <option value="Java">Java</option>
                <option value="JavaScript">JavaScript</option>
              </Form.Select>
              {technologyError && (
                <Form.Text className="errmsg">
                  Please select any Option
                </Form.Text>
              )}
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="g-2 ">
          {/* Looping for the Question and Answer */}

          {questions.map((obj, index) => {
            return (
              <>
                <Col md={9}>
                  <FloatingLabel controlId="floatingInputGrid" label="Question">
                    <Form.Control
                      placeholder="Question"
                      as="textarea"
                      rows="3"
                      name="question"
                      value={questions.question}
                      onChange={(event) => {
                        updateQuestion(event, index);
                      }}
                    />
                    {questionError && (
                      <Form.Text className="errmsg">Enter question</Form.Text>
                    )}
                    {questionCharError && (
                      <p className="candidateerrormsg">
                        {" "}
                        Only characters are allowed
                      </p>
                    )}
                  </FloatingLabel>
                </Col>
                <Col md={3}>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Difficulty Level"
                  >
                    <Form.Select
                      aria-label="Floating label select example"
                      name="difficultyLevel"
                      name="difficultyLevel"
                      value={questions.difficultyLevel}
                      onChange={updateQuestion}
                    >
                      <option value="select">-select-</option>
                      <option value="Easy">Easy</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Expert">Expert</option>
                    </Form.Select>
                    {diffLevelError && (
                      <Form.Text className="errmsg">
                        Please Select any Option
                      </Form.Text>
                    )}
                  </FloatingLabel>
                </Col>
                <Col lg={9}>
                  <FloatingLabel controlId="floatingInputGrid" label="Answer">
                    <Form.Control
                      style={{ height: "100px" }}
                      placeholder="Answer"
                      as="textarea"
                      name="answer"
                      rows="8"
                      // onChange = {(e) => {updateData(e)}}
                    />
                  </FloatingLabel>
                </Col>
                <Col className="" lg={3}>
                  {/* Adding and Deleting Button */}

                  {index === questions.length - 1 ? (
                    <Button
                      className="button float-end"
                      variant=""
                      onClick={() => addRow()}
                    >
                      <i class="fas fa-plus-circle"></i> &nbsp; Add New
                    </Button>
                  ) : (
                    <Button
                      className="button float-end"
                      variant=""
                      // onClick={()=>{deleteRow(index)}}
                      onClick={() => {
                        getDeleteIndex(index);
                        {
                          setisshowDelete(true);
                        }
                      }}
                    >
                      <i class="fas fa-trash"></i> &nbsp; Delete
                    </Button>
                  )}
                </Col>
              </>
            );
          })}
        </Row>
      </Form>
      <Button
        variant=""
        style={{ backgroundColor: "#FAA81D", color: "#ffff" }}
        className="button float-end"
        onClick={(validateForm, savedata, showModal)}
      >
        Submit
      </Button>
      {showSubmitModal && (
        <SubmitModal validateForm={validateForm} set={showModal} />
      )}
      {isshowDelete && (
        <DeleteConfirmation
          getDeleteI={getDeleteI}
          deleteRow={deleteRow}
          setisshowDelete={setisshowDelete}
        />
      )}
    </div>
  );
}

export default Question;

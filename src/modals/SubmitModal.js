import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import "./SubmitModal.css";

function SubmitModal(props) {
  const submit = props.validateForm;

  const [smShow, setSmShow] = useState(true);

  return (
    <>
      {/* <Button onClick={() => setSmShow(true)}>Submit</Button> */}
      {/* <Button
        variant=""
        style={{ backgroundColor: "#FAA81D", color: "#ffff" }}
        className="button float-end"
        // onClick = {validateForm}
        onClick={() => setSmShow(true)}
      >
        Submit2
      </Button> */}
      <Modal
        size="sm"
        show={smShow}
        // onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        {/* <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Small Modal
            </Modal.Title>
          </Modal.Header> */}
        <Modal.Body>
          <div className="favSuccess">
            <i className="far fa-check-circle fa-4x"></i>
          </div>
          <br />
          <div className="msg">Successfully Uploaded</div>
          <div className="saved  text-center">
            <br />
            <Button
              variant="warning"
              onClick={() => {
                setSmShow(false);
              }}
            >
              OK
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SubmitModal;

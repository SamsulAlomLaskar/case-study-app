import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

function DeleteConfirmation(props) {

  const deleteIndex = props.getDeleteI;

  const deleteRowDataFromModal = (index) => {
    props.deleteRow(index);
  };

  const handleClose = () => props.setisshowDelete(false);
  const handleShow = () => props.setisshowDelete(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
         Submit
        </Button>
   */}
      <Modal show={handleShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body
        style = {{color:"red"}}
        >Are you sure to delete the row? once you delete it can't be reversed!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              deleteRowDataFromModal(deleteIndex);
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteConfirmation;

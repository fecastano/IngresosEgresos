import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";

const ModalActualizar = (props) => {
  console.log(props);
  return (
    <Modal
      show={props.modalActuzalizar}
      onHide={props.setModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="formularioRegistro">
          <Form.Group>
            <Form.Label>Tipo Movimiento</Form.Label>
            <Form.Control name="tipoMovimiento" as="select">
              <option>Ingreso</option>
              <option>Gasto</option>
            </Form.Control>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" name="nombre" placeholder="Nombre" />
            </Form.Group>
          </Form.Group>
          <Form.Group>
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              name="cantidad"
              placeholder="Cantidad"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.setModal}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalActualizar;

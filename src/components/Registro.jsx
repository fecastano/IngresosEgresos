import React from "react";
import ReactBootstrap, { Form, Button, Card } from "react-bootstrap";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";

const Registro = (props) => {
  const formik = useFormik({
    initialValues: {
      campoId: uuidv4(),
      tipoMovimiento: "Ingreso",
      nombre: "",
      cantidad: 0,
    },
    onSubmit: (values) => {
      props.setMovimientos((actual) => [...actual, values]);
      console.log(values);
    },
  });
  return (
    <Card>
      <Card.Header>Registro</Card.Header>
      <Card.Body>
        <Form id="formularioRegistro" onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Label>Tipo Movimiento</Form.Label>
            <Form.Control
              name="tipoMovimiento"
              as="select"
              onChange={formik.handleChange}
              value={formik.values.tipoMovimiento}
            >
              <option>Ingreso</option>
              <option>Gasto</option>
            </Form.Control>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                placeholder="Nombre"
                onChange={formik.handleChange}
                value={formik.values.nombre}
              />
            </Form.Group>
          </Form.Group>
          <Form.Group>
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              name="cantidad"
              placeholder="Cantidad"
              onChange={formik.handleChange}
              value={formik.values.cantidad}
            />
          </Form.Group>
          <Form.Group>
            <Button variant="danger" onClick={formik.resetForm}>
              Cancelar
            </Button>{" "}
            <Button variant="success" type="submit">
              Agregar Movimientos
            </Button>{" "}
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Registro;

import React from "react";
import ReactBootstrap, {
  Form,
  Button,
  FormControl,
  Card,
  Badge,
  Col,
  Row,
  Container,
  Table,
  ButtonGroup,
} from "react-bootstrap";
import { useFormik } from "formik";
import { contains } from "jquery";
import ModalActualizar from "./ModalActualizar";

const ListadoMovimientos = (props) => {
  const [filtros, setFiltros] = React.useState({
    buscar: "",
    seleccionarLista: "Todo",
  });
  const [modal, setModal] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      buscar: "",
      seleccionarLista: "Todo",
    },
    onSubmit: (values) => {
      setFiltros(values);
      console.log(values);
    },
  });
  const eliminar = (campoId) => {
    props.setMovimientos((actual) =>
      actual.filter((movimiento) => movimiento.campoId !== campoId)
    );
  };

  return (
    <>
      <ModalActualizar
        modalActuzalizar={modal}
        setModal={(value) => setModal(value)}
      />
      <Card>
        <Card.Header>
          Listado Movimientos &nbsp;
          <Badge variant="dark">{props.movimientos.length}</Badge>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Row>
              <Col md={10}>
                <FormControl
                  type="text"
                  name="buscar"
                  placeholder="Buscar"
                  onChange={formik.handleChange}
                  value={formik.values.buscar}
                />
              </Col>
              <Col md={2}>
                <Button variant="outline-info" type="submit">
                  Buscar
                </Button>
              </Col>
            </Form.Row>
            &nbsp;
            <Form.Group>
              <Form.Row>
                <Col>
                  <Form.Check
                    inline
                    onChange={formik.handleChange}
                    checked={formik.values.seleccionarLista === "Todo"}
                    value={"Todo"}
                    label="Todos"
                    name="seleccionarLista"
                    type={"radio"}
                  />
                </Col>
                <Col>
                  <Form.Check
                    inline
                    onChange={formik.handleChange}
                    checked={formik.values.seleccionarLista === "Ingreso"}
                    value={"Ingreso"}
                    label="Ingresos"
                    name="seleccionarLista"
                    type={"radio"}
                  />
                </Col>
                <Col>
                  <Form.Check
                    inline
                    onChange={formik.handleChange}
                    checked={formik.values.seleccionarLista === "Gasto"}
                    value={"Gasto"}
                    label="Egresos"
                    name="seleccionarLista"
                    type={"radio"}
                  />
                </Col>
              </Form.Row>
            </Form.Group>
          </Form>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {props.movimientos
                .filter((movimiento) =>
                  filtros.buscar === ""
                    ? true
                    : movimiento.nombre.includes(filtros.buscar)
                )
                .filter((movimiento) =>
                  filtros.seleccionarLista === "Todo"
                    ? true
                    : movimiento.tipoMovimiento === filtros.seleccionarLista
                )
                .map((movimiento) => (
                  <tr>
                    <td>{movimiento.nombre}</td>
                    <td>
                      <Badge
                        pill
                        variant={
                          movimiento.tipoMovimiento === "Ingreso"
                            ? "success"
                            : "danger"
                        }
                      >
                        {movimiento.cantidad}
                      </Badge>
                    </td>
                    <td>
                      <ButtonGroup size="lg" className="mb-2">
                        <Button
                          variant="danger"
                          onClick={() => {
                            eliminar(movimiento.campoId);
                          }}
                        >
                          Eliminar
                        </Button>
                        <Button onClick={() => setModal(true)}>
                          actualizar
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
};

export default ListadoMovimientos;

import React from "react";
import {
  Navbar,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Button,
} from "react-bootstrap";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";

const Header = (props) => {
  const [saldoFinal, setSaldoFinal] = React.useState(0);
  const formik = useFormik({
    initialValues: {
      saldoInicial: 0,
    },
    onSubmit: (values) => {
      const ingresos = props.movimientos
        .filter((movimiento) => movimiento.tipoMovimiento === "Ingreso")
        .reduce((total, movimiento) => total + movimiento.cantidad, 0);
      const gasto = props.movimientos
        .filter((movimiento) => movimiento.tipoMovimiento === "Gasto")
        .reduce((total, movimiento) => total + movimiento.cantidad, 0);
      setSaldoFinal(values.saldoInicial + ingresos - gasto);
      console.log(values, ingresos, gasto);
    },
  });

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Balance True</Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Form inline onSubmit={formik.handleSubmit}>
        <FormControl
          name="saldoInicial"
          onChange={formik.handleChange}
          value={formik.values.saldoInicial}
          type="number"
          placeholder="Saldo Inicial"
          className="mr-sm-2"
        />
        <FormControl
          type="number"
          value={saldoFinal}
          placeholder="Saldo Final"
          className="mr-sm-2"
          disabled
        />
        <Button variant="outline-secondary" type="submit">
          Calcular
        </Button>
      </Form>
    </Navbar>
  );
};
export default Header;

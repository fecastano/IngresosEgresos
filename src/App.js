import "./App.css";
import Header from "./components/Header";
import Registro from "./components/Registro";
import { Container, Row, Col } from "react-bootstrap";
import ListadoMovimientos from "./components/ListadoMovimientos";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [movimientos, setMovimientos] = React.useState([
    {
      campoId: "2",
      nombre: "test",
      cantidad: 85000,
      tipoMovimiento: "Gasto",
    },
    {
      campoId: "1",
      nombre: "Nicee",
      cantidad: 1000,
      tipoMovimiento: "Gasto",
    },
  ]);

  return (
    <div className="App">
      <Header movimientos={movimientos} />
      <Container fluid={true}>
        <Row>
          <Col>
            <Registro setMovimientos={setMovimientos} />
          </Col>
          <Col>
            <ListadoMovimientos
              movimientos={movimientos}
              setMovimientos={setMovimientos}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from 'reactstrap';
import Profile from './Components/Profile';
import CustomTabPane from './Components/CustomTabPane'

import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component {
  render() {
    return (
      <Container fluid>
      <Row>
          <Col lg={3}><Profile /></Col>
          <Col lg={9}><CustomTabPane /></Col>
      </Row>
      </Container>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

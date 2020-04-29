import React from 'react';
import PageNavbar from './components/PageNavbar/PageNavbar';
import PageFooter from './components/PageFooter/PageFooter';
import Intro from './components/Intro/Intro';
import ConversionCard from './components/ConversionCard/ConversionCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">

      <PageNavbar />
      <Intro />

      <Row>
        <Col md={6}>
          <ConversionCard />
        </Col>
        <Col md={6}>
          <ConversionCard />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <ConversionCard />
        </Col>
        <Col md={6}>
          <ConversionCard />
        </Col>
      </Row>

      <PageFooter />

    </div>
  );
}

export default App;

import React from 'react';
import PageNavbar from './components/PageNavbar/PageNavbar';
import PageFooter from './components/PageFooter/PageFooter';
import Intro from './components/Intro/Intro';
import ConversionCard from './components/ConversionCard/ConversionCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import CardDeck from 'react-bootstrap/CardDeck';-


function App() {
  return (
    <div className="App">

      <PageNavbar />
      <Intro />

      <Row className='my-5'>
        <Col md={5} className='mx-auto'>
          <ConversionCard title='Length' />
        </Col>
        <Col md={5} className='mx-auto'>
          <ConversionCard title='Temperature' />
        </Col>
      </Row>

      <Row className='my-5'>
        <Col md={5} className='mx-auto'>
          <ConversionCard title='Volume' />
        </Col>
        <Col md={5} className='mx-auto'>
          <ConversionCard title='Weight' />
        </Col>
      </Row>

      <PageFooter />

    </div>
  );
}

export default App;

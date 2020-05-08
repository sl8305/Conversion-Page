import React from 'react';
import PageNavbar from './components/PageNavbar/PageNavbar';
import PageFooter from './components/PageFooter/PageFooter';
import Intro from './components/Intro/Intro';
import ConversionCard from './components/ConversionCard/ConversionCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var lengthList = [{'Imperial':{'count':1,'unit':'Inch'}, 'Metric':{'count':2.54, 'unit':'Centimeter'}},
                  {'Imperial':{'count':1, 'unit':'Foot'}, 'Metric':{'count':0.3048, 'unit':'Meter'}}, 
];

function App() {
  return (
    <div className="App">

      <PageNavbar />
      
      <Intro />

      <Row className='my-5'>
        <Col md={5} className='mx-auto'>
          <ConversionCard title='Length' list= {lengthList}/>
        </Col>
        <Col md={5} className='mx-auto'>
          <ConversionCard title='Temperature' list= {lengthList}/>
        </Col>
      </Row>

      <Row className='my-5'>
        <Col md={5} className='mx-auto'>
          <ConversionCard title='Volume' list= {lengthList}/>
        </Col>
        <Col md={5} className='mx-auto'>
          <ConversionCard title='Weight' list= {lengthList}/>
        </Col>
      </Row>

      <PageFooter />

    </div>
  );
}

export default App;

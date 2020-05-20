import React from 'react';
import PageNavbar from './components/PageNavbar/PageNavbar';
import PageFooter from './components/PageFooter/PageFooter';
import Intro from './components/Intro/Intro';
import ConversionCard from './components/ConversionCard/ConversionCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './utils/App.css';

var lengthList = [{'Imperial':{'count':1,'unit':'Inch [in]'}, 'Metric':{'count':2.54, 'unit':'Centimeter [cm]'}},
                  {'Imperial':{'count':1, 'unit':'Foot [ft]'}, 'Metric':{'count':0.3048, 'unit':'Meter [m]'}}, 
                  {'Imperial':{'count':1, 'unit':'Yard [yd]'}, 'Metric':{'count':0.9144, 'unit':'Meter [m]'}}, 
                  {'Imperial':{'count':1, 'unit':'Mile'}, 'Metric':{'count':1.6093, 'unit':'Kilometer [km]'}}, 
                  {'Imperial':{'count':1, 'unit':'International Nautical Mile'}, 'Metric':{'count':1.853, 'unit':'Kilometer [km]'}},
];

var volumeList = [{'Imperial':{'count':1, 'unit':'Inch cubed'}, 'Metric':{'count':16.387, 'unit':'Centimeter cubed'}},
                  {'Imperial':{'count':1, 'unit':'Foot cubed'}, 'Metric':{'count':0.02832, 'unit':'Meter cubed'}},
                  {'Imperial':{'count':1, 'unit':'Fluid Ounce [fl oz]'}, 'Metric':{'count':29.574, 'unit':'Milileter [ml]'}},
                  {'Imperial':{'count':1, 'unit':'Pint [pt]'}, 'Metric':{'count':0.4732, 'unit':'Liters [L]'}},
                  {'Imperial':{'count':1, 'unit':'Gallon [gal]'}, 'Metric':{'count':3.7854, 'unit':'Liters [L]'}},
];

var weightList = [{'Imperial':{'count':1, 'unit':'Ounce [oz]'}, 'Metric':{'count': 28.35, 'unit':'Grams [g]'}},
                  {'Imperial':{'count':1, 'unit':'Pound [lb]'}, 'Metric':{'count': 0.4536, 'unit':'Kilogram [kg]'}},
                  {'Imperial':{'count':1, 'unit':'Ton'}, 'Metric':{'count': 0.9072, 'unit':'Metric ton'}},
];

var temperatureList =[{'Imperial':{'count':'Fahrenheit ', 'unit':'Celcius'}, 'Metric':{'count': '(F - 32)', 'unit':' * 9/32'}},
                      {'Imperial':{'count':'Celcius ', 'unit':'Fahrenheit'}, 'Metric':{'count': '(C * 9/5)', 'unit':' + 32'}},
];

function App() {
  return (
    <div className="App">

      <PageNavbar />
      
      <Intro />

      <Row className='cardSpacing '>
        <Col lg={6} md={12} sm={12} className='my-3 mx-auto'>
          <ConversionCard title='Weight' list= {weightList}/>
        </Col>
        <Col lg={6} md={12} className='my-3 mx-auto'>
          <ConversionCard title='Temperature' list= {temperatureList}/>
        </Col>
      </Row>

      <Row className='cardSpacing'>
        <Col lg={6} md={12} sm={12} className='my-3 mx-auto'>
          <ConversionCard title='Volume' list= {volumeList}/>
        </Col>
        <Col lg={6} md={12} sm={12} className='my-3 mx-auto'>
          <ConversionCard title='Length' list= {lengthList}/>
        </Col>
      </Row>

      <PageFooter />

    </div>
  );
}

export default App;

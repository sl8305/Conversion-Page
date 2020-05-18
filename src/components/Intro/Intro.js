import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Intro.css';


function Intro (){
    return (
        <Row className='mx-auto'>
            <Col sm={12} md={5} className='introSpacing'>
                <Image 
                    src='https://cdn.statcdn.com/Infographic/images/normal/18300.jpeg'
                    title='Infographic: Only Three Countries in the World (Officially) Still Use the Imperial System | Statista'
                    alt='Infographic: Only Three Countries in the World (Officially) Still Use the Imperial System | Statista'
                    className='mapImageStyle'
                    />
                
                <a 
                href="https://www.statista.com/chart/18300/countries-using-the-metric-or-the-imperial-system/" 
                >
                    More information is available at Statista 
                </a>

            </Col>

            <Col sm={12} md={5} className='introSpacing'>
                <h5>Description</h5>

                <p> 
                    Unit Conversion is a single page website, designed to help you convert numbers between the U.S. Customary 
                    systems of measurement  (which is derived from the British Imperial system) and the metric system. 
                    <br/><br/>
                    Input the value you would like converted in its respective table and choose the unit you would like converted from.
                    The submit button will convert the given value and unit to its respective equivalent. 
                    US standard will be converted to Metric and vice a versa. 
                </p>
            </Col>

        </Row>
    );

}

export default Intro;
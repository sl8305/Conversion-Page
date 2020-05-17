import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Intro.css';
import placeholder from '../../utils/images/placeholder.jpg';



function Intro (){
    return (
        <Row>
            <Col sm={4} md={4} className='mx-auto my-auto '>
                <Image className="hundredWidth" src={placeholder} />
            </Col>

            <Col sm={6} md={6} className='mx-auto padding5'>
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
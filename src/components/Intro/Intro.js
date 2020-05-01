import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';



function Intro (){
    return (
        <Row>
            <Col md={4} className='mx-auto'>
                <Image src={require('../../utils/images/placeholder.jpg')} rounded />
            </Col>

            <Col md={6} className='mx-auto'>
                <p> My name is Shad.</p>
                
                <p> Imperial vs Metric system explained.</p>
                
                <p> Why I made this page.</p>

            </Col>

        </Row>
    );

}

export default Intro;
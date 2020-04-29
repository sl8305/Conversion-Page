import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function Intro (){
    return (
        <Row>
            <Col className='mx-auto' md={4}>
                <Image src="../../../utils/images/placeholder.jpg" fluid />
            </Col>

            <Col className='mx-auto' md={8}>
                <p> My name is Shad.</p>
                
                <p> Imperial vs Metric system explained.</p>
                
                <p> Why I made this page.</p>

            </Col>

        </Row>


    );

}

export default Intro;
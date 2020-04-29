import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function Intro (){
    return (
        <Row>
            <Col md={4}>
                <Image src="./utils/images/placeholder.jpg/170x180" rounded />
            </Col>

            <Col md={8}>
                <p> My name is Shad.</p>
                
                <p> Imperial vs Metric system explained.</p>
                
                <p> Why I made this page.</p>

            </Col>

        </Row>
    );

}

export default Intro;
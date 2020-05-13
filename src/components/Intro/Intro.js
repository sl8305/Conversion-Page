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
                <h5>Description</h5>
                <p> 
                    Unit Conversion is a single page website, designed to help you convert numbers between the U.S. Customary 
                    systems of measurement, which is derived from the British Imperial system, and the metric system. 
                    <br/><br/>
                    This page allows the user to convert weights, temperature, volume and lengths from units used in the
                    United States to and from the metric units.
                </p>
                
                <h5>About Me</h5>
                <p> My name is Shad Lee and I have created this page is part of my portfolio. I am currently looking for employment as a front-end web developer or full stack developer. I graduated the University of Washington's Full Stack Coding Bootcamp in December of 2019. If you are an employer who is interested in reaching out to me, my professional materials can be found in the links above. If you stumbled on this page to use its functions, I hope you are able to use this cite to the fullest. </p>
                
                <h5>Learn More</h5>
                <p>If you are interested in looking at my other work, access is available via the links in the top right of the page or the icons in the footer. </p>

            </Col>

        </Row>
    );

}

export default Intro;
import React from 'react';
import Card from 'react-bootstrap/Card';


function ConversionCard (props){
    return(

        <Card bg="dark" text='light'>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    imperial value = metric value <br/>
                    imperial value = metric value <br/>
                    imperial value = metric value <br/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}


export default ConversionCard ;
import React from 'react';
import Card from 'react-bootstrap/Card';
import UserInput from '../UserInput/UserInput';
import Table from 'react-bootstrap/Table';


function ConversionCard (props){
    return(

        <Card bg="dark" text='light'>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th colSpan='3'>US or Imperial</th>
                                <th colSpan='2'>Metric</th>
                            </tr>
                        </thead>    

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Inch [in]</td>
                                <td></td>
                                <td>2.54</td>
                                <td>Centimeter [cm]</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Foot [ft]</td>
                                <td>12 in</td>
                                <td>0.3048</td>
                                <td>Meter [m]</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Yard [yd]</td>
                                <td>3 ft</td>
                                <td>0.91444</td>
                                <td>Meter [m]</td>
                            </tr>
                        </tbody>
                        
                    </Table>    
                </Card.Text>

                <UserInput/>

            </Card.Body>
        </Card>
    );
}


export default ConversionCard ;
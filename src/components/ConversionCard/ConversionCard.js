import React from 'react';
import Card from 'react-bootstrap/Card';
import UserInput from '../UserInput/UserInput';
import Table from 'react-bootstrap/Table';

const tableContent = list => {
    let content = [];
    for (let i = 0; i < list.length; i++) {
        const imperial = list[i].Imperial;
        const metric = list[i].Metric;
        content.push(
            <tr>
                <td>{imperial.count}</td>
                <td>{imperial.unit}</td>
                <td>{metric.count}</td>
                <td>{metric.unit}</td>
            </tr>
        );
    }
    return content;
}

function ConversionCard (props){
    return (
        <Card bg="dark" text='light'>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th colSpan='2'>US or Imperial</th>
                                <th colSpan='2'>Metric</th>
                            </tr>
                        </thead> 
                        <tbody>{tableContent(props.list)}</tbody>      
                    </Table>    
                </Card.Text>

                <UserInput/>

            </Card.Body>
        </Card>
    );
}

export default ConversionCard ;
import React from 'react';
import Card from 'react-bootstrap/Card';
import UserInput from '../UserInput/UserInput';
import Table from 'react-bootstrap/Table';

// dynamically renders the content of the conversion table via the list prop passed down from App.js
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
};

// dynamically renders the row with the title of the table given the title passed down from App.js
const tableHeader = (title) => {
    let content = [];
    if (title === 'Temperature'){
        content.push(
            <tr>
                <th colSpan='2'></th>
                <th colSpan='2'></th>
            </tr>
        );

        return content;
    }
    else {
        content.push(            
        <tr>
            <th colSpan='2'>US or Imperial</th>
            <th colSpan='2'>Metric</th>
        </tr>
        );

        return content;
    }

};

// variables to pass down to userinput to dynamically create the dropdown options
const renderInputComponent = (title, list) => {
    let content = [];
    if (title === 'Temperature'){
        let impList = ['Fahrenheit'];
        let metList = ['Celcius'];
        content.push( <UserInput Imperial={impList} Metric={metList} /> );
        
        return content;
    }
    else {
        let impList = [];
        let metList = [];

        for (let i = 0; i < list.length; i++) {
            impList.push(list[i].Imperial.unit);
            metList.push(list[i].Metric.unit);
        }
        // spread operator and native object Set is used to store unique values
        let uniqueImp = [...new Set(impList)];
        let uniqueMet = [...new Set(metList)];
        content.push( <UserInput Imperial={uniqueImp} Metric={uniqueMet} /> );
        return content;
    }
};

function ConversionCard (props){
    return (
        <Card bg="dark" text='light'>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    <Table striped bordered hover variant="dark">
                        <thead>{tableHeader(props.title)}</thead> 
                        <tbody>{tableContent(props.list)}</tbody>      
                    </Table>    
                </Card.Text>

                {renderInputComponent(props.title, props.list)}

            </Card.Body>
        </Card>
    );
}

export default ConversionCard ;
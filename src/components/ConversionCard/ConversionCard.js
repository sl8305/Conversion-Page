import React from 'react';
import Card from 'react-bootstrap/Card';
import UserInput from '../UserInput/UserInput';
import Table from 'react-bootstrap/Table';
import './ConversionCard.css';

var temperatureUnitList =['Fahrenheit','Celcius'];

// dynamically renders the content of the conversion table via the list prop passed down from App.js
const tableContent = list => {
    let content = [];
    for (let i = 0; i < list.length; i++) {
        const imperial = list[i].Imperial;
        const metric = list[i].Metric;
        content.push(
            <tr key={'apple' + i}>
                <td key={i +'iCount'}>{imperial.count}</td>
                <td key={i +'iUnit'}>{imperial.unit}</td>
                <td key={i +'mCount'}>{metric.count}</td>
                <td key={i +'mUnit'}>{metric.unit}</td>
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
            <tr key={title + 'TableHeader'}>
                <th colSpan='2'></th>
                <th colSpan='2'></th>
            </tr>
        );
        return content;
    }
    else {
        content.push(            
        <tr  key={title + 'TableHeader'}>
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
        content.push( <UserInput title={title} unitList={temperatureUnitList} key={'inputComponent'+ title} /> );
        return content;
    }
    else {
        let unitArray = [];

        for (let i = 0; i < list.length; i++) {
            unitArray.push(list[i].Imperial.unit);
            unitArray.push(list[i].Metric.unit);
        }
        // spread operator and native object Set is used to store unique values
        let uniqueUnitArray = [...new Set(unitArray)];
        content.push( <UserInput title={title} unitList={uniqueUnitArray} originalList={list}  key={'inputComponent'+ title}/> );
        return content;
    }
};

function ConversionCard (props){
    return (
        
        <Card bg="dark" text='light' >
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>

                    <Table striped bordered hover variant="dark">
                        <thead>{tableHeader(props.title)}</thead> 
                        <tbody>{tableContent(props.list)}</tbody>      
                    </Table> 

                {renderInputComponent(props.title, props.list)}

            </Card.Body>
        </Card>

    );
}

export default ConversionCard ;
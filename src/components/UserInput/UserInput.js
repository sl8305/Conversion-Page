import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import SubmitLogic from '../SubmitLogic/SubmitLogic';

// dynamically render the content of the dropdownoptions
const fillOptions = (unitList) => {
    let content = [];
    for (let i=0; i < unitList.length; i++){
        let dropDownId = '#' + unitList[i] + '';
        content.push(
        <Dropdown.Item href={dropDownId} >{unitList[i]}</Dropdown.Item>
        );
    }
    return content;
};

function createSubmitButton (title, originalList) {
    let content =[];
    if (title === 'temperature'){
        content.push(<SubmitLogic />);
        return content;
    }
    else{
        content.push(<SubmitLogic list={originalList}/>);
        return content;
    }
};

function generateForm(title){
    let content = [];
    let tempId = title + "Input";
    content.push(           
        <FormControl
        placeholder="Input value to be converted"
        aria-describedby="basic-addon1"
        id={tempId}
        />);
    return content;
};


function UserInput (props) {
    return (

        <InputGroup className='mb-3'>
            {generateForm(props.title)}
            
            <DropdownButton
            as={InputGroup.Append}
            variant="secondary"
            title="Unit"
            id="DropDownButtons"
            >
            {fillOptions(props.unitList)}
            </DropdownButton>

            {createSubmitButton(props.title, props.originalList)}

        </InputGroup>
    );
}

export default UserInput;
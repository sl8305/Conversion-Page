import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import SubmitLogic from '../SubmitLogic/SubmitLogic';

// dynamically render the content of the dropdownoptions
const fillOptions = (Imperial, Metric) => {
    let content = [];
    for (let i=0; i < Imperial.length; i++){
        content.push(
        <Dropdown.Item href="#">{Imperial[i]}</Dropdown.Item>
        );
    }
    content.push(<Dropdown.Divider/>);
    for (let i=0; i < Metric.length; i++){
        content.push(
        <Dropdown.Item href="#">{Metric[i]}</Dropdown.Item>
        );
    }

    return content;
};



function UserInput (props) {
    return (

        <InputGroup className='mb-3'>
            <FormControl
                placeholder="Input value to be converted"
                aria-describedby="basic-addon1"
                />
            
            <DropdownButton
            as={InputGroup.Append}
            variant="secondary"
            title="Unit"
            id="input-group-dropdown-2"
            >
            {fillOptions(props.Imperial, props.Metric)}
            </DropdownButton>

            <SubmitLogic/>

        </InputGroup>
    );
}

export default UserInput;
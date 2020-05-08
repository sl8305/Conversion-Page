import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import SubmitLogic from '../SubmitLogic/SubmitLogic';

function UserInput () {
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
                <Dropdown.Item href="#">Inch [in]</Dropdown.Item>
                <Dropdown.Item href="#">Foot [ft]</Dropdown.Item>
                <Dropdown.Item href="#">Yard [yd]</Dropdown.Item>
                <Dropdown.Item href="#">Mile </Dropdown.Item>
                    <Dropdown.Divider />
                <Dropdown.Item href="#">Milimeter [mm]</Dropdown.Item>
                <Dropdown.Item href="#">Centimeter [cm]</Dropdown.Item>
                <Dropdown.Item href="#">Meter [m]</Dropdown.Item>
                <Dropdown.Item href="#">Kilometer [km]</Dropdown.Item>
            </DropdownButton>

            <SubmitLogic/>

        </InputGroup>
    );
}

export default UserInput;
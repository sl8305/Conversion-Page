import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function userInput () {
    return (
                
                <InputGroup className='mb-5'>
                    <p>Hello Rabbit</p>
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                    
                    <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-secondary"
                    title="Dropdown"
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

                    {/* submit component */}
                </InputGroup>
    );

}

export default userInput;
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function PageNavbar() {
    return (
        
        <Navbar bg="dark" expand="lg" variant="dark">
            
            <Navbar.Brand href='#root'>Conversion Page </Navbar.Brand>
            <br />
            
            <Nav className='ml-auto'>
                <Nav.Link 
                    target='_blank' 
                    href='https://www.linkedin.com/in/shad-lee-724621162/'
                    >LinkedIn</Nav.Link>
                <Nav.Link 
                    target='_blank' 
                    href='https://github.com/sl8305'
                    >Github</Nav.Link>
                <Nav.Link 
                    target='_blank' 
                    href='https://sl8305.github.io/Portfolio_Shad/'
                    >Portfolio</Nav.Link>
            </Nav>
        </Navbar> 

    );
}

export default PageNavbar;
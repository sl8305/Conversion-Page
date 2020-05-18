import React from 'react';
import {GithubOutlined, LinkedinOutlined} from '@ant-design/icons';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';


function PageFooter() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Nav className='mx-auto'>
                <Nav.Link 
                    href='https://www.linkedin.com/in/shad-lee-724621162/'
                    ><LinkedinOutlined  style={{ fontSize: '36px', color: 'white'}} /></Nav.Link>
                <Nav.Link 
                    href='https://github.com/sl8305'
                    ><GithubOutlined style={{ fontSize: '36px', color: 'white'}} /></Nav.Link>
                <Nav.Link 
                    href='https://sl8305.github.io/Portfolio_Shad/'
                    style={{color: 'white'}}
                    >
                    <Image src={require('../../utils/images/shad-logo-32x32.png')} />
                    </Nav.Link>
            </Nav>
        </Navbar>

    );
    
}

export default PageFooter;
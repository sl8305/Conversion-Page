import React from 'react';
import {GithubOutlined, LinkedinOutlined} from '@ant-design/icons';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import styles from './PageFooter.css';



function PageFooter() {
    return (
        <Navbar fixed='bottom' bg="dark" expand="lg" variant="dark">
            <Nav className='mx-auto'>
                <Nav.Link 
                    target='_blank' 
                    href='https://www.linkedin.com/in/shad-lee-724621162/'
                    ><LinkedinOutlined className='mx-auto' style={{ fontSize: '36px', color: 'white'}} /></Nav.Link>
                <Nav.Link 
                    target='_blank' 
                    href='https://github.com/sl8305'
                    ><GithubOutlined style={{ fontSize: '36px', color: 'white'}} /></Nav.Link>
                <Nav.Link 
                    target='_blank' 
                    href='https://sl8305.github.io/Portfolio_Shad/'
                    style={{color: 'white'}}
                    >Shad Lee</Nav.Link>
            </Nav>
       

        </Navbar>

        

    );


    
}

export default PageFooter;
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
   

        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src="https://images.pexels.com/photos/8854200/pexels-photo-8854200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width="40"
                height="40"
                className="d-inline-block align-top"
                />{' '}
                React Bootstrap
            </Navbar.Brand>
            </Container>
        </Navbar>




    
  )
}

export default Header
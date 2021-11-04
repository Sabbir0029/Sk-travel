import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth/UseAuth';
import './Header.css'

const Header = () => {
  const {user, logOut}= UseAuth();
  const element = <FontAwesomeIcon icon={faUser} />
  return (
    <div className='d-flex justify-content-between align-items-center bg-secondary'>
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
        <Container>
        <Navbar.Brand href="#home"><span className='text-danger fw-bold fs-2'>Sk.</span>Travel</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav.Link className='text-light' as={Link} to="/home">Home</Nav.Link>
        <Nav.Link className='text-light' as={Link} to="/home">About us</Nav.Link>
        <Nav.Link className='text-light' as={Link} to="/Services">All Services</Nav.Link>
        <Nav.Link className='text-light' as={Link} to="/Specialoffer">Special offer</Nav.Link>
        <Nav.Link className='text-light' as={Link} to="/Contract">ContractUs</Nav.Link>
        {user?.displayName?
        <Nav.Link className='text-light' as={Link} to="/MyBooking">My Booking</Nav.Link>:
        <Nav.Link className='text-light' as={Link} to="/blog"></Nav.Link>}
        {user?.displayName?
        <Button onClick={logOut} variant="danger" className='text-light text-decoration-none' to='/login'>Logout</Button>:
        <Button variant="danger" className='text-light' as={Link} to="/Login">Login</Button>}
        
        <Navbar.Text>
            <div className='d-flex photo'>
            {user?.displayName?
      <img src={user.photoURL} className=' ms-3 rounded-circle'/>:
            <h4 className='ms-3'>{element}</h4>
            }
            <p className='text-light text-decoration-none mt-3 ms-3'>{user.displayName}</p>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CardServices.css'

const CardServices = (props) => {
  const {photo,name,Overview,address,person,price,_id} = props.service
  return (
    <div>
    <Col className='colone'>
      <Card>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title className='text-danger fw-bold'>Name : {name}</Card.Title>
          <Card.Text>Address : {address}</Card.Text>
          <Card.Text>Person : {person}</Card.Text>
          <Card.Text>Price : {price}</Card.Text>
          <Link to={`/placeOrder/${_id}`}><Button>Book Now</Button></Link>
        </Card.Body>
      </Card>
    </Col>
    </div>
  );
};

export default CardServices;
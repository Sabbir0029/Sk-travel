import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardOfferings = (props) => {
    const {photo,name, offer,address,person,price,_id} = props.services
    console.log(props.services)
    return (
      <div>
        <Col className='col'>
        <Card>
          <Card.Img variant="top" src={photo} />
          <Card.Body>
            <Card.Title className='text-danger fw-bold'>Name : {name}</Card.Title>
            <Card.Text>Address : {address}</Card.Text>
            <Card.Text>Person : {offer}</Card.Text>
            <Card.Text>Price : {price}</Card.Text>
            <Link to={`/placeOrder/${_id}`}><Button>Book Now</Button></Link>
          </Card.Body>
        </Card>
      </Col>
      </div>
    );
};

export default CardOfferings;
import React, { useEffect, useState } from 'react';
import { Button, Card, ListGroup, ListGroupItem, Placeholder } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import UseAuth from '../../Hooks/UseAuth/UseAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
  const {book}= useParams()
  const {user,}= UseAuth();
  const [booking, setbooking] = useState({});
  const element = <FontAwesomeIcon icon={faUser} />

  const {name,Overview,address,couple,couplePrice,offer,person,photo,travel,price} = booking;

  useEffect(()=>{
    fetch(`https://polar-earth-99556.herokuapp.com/Services/${book}`)
    .then(res => res.json())
    .then(booking => setbooking(booking))
  },[]);

  useEffect(()=>{
    fetch(`https://polar-earth-99556.herokuapp.com/HomeServices/${book}`)
    .then(res => res.json())
    .then(booking => setbooking(booking))
  },[]);
// 
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    fetch("http://localhost:5000/bookinginfo",{
      method:"POST",
      headers:{"content-type": "application/json"},
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(result => console.log(result));
  };

  return (
    <div className='Order'>
   {/*  */}
     <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Title>Address: {address}</Card.Title>
        <Card.Text>Overview: {Overview}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>couple: {couple}</ListGroupItem>
          <ListGroupItem>Price: {couplePrice}</ListGroupItem>
          <ListGroupItem>offer: {offer}</ListGroupItem>
        </ListGroup>
        <ListGroup className="list-group-flush">
          <ListGroupItem>person :{person}</ListGroupItem>
          <ListGroupItem>price: {price}</ListGroupItem>
          <ListGroupItem>offer: {offer}</ListGroupItem>
        </ListGroup>
      </Card>
    <div className='contract'>
    <div className='d-flex photoOne'>
            {user?.displayName?
      <img src={user.photoURL} className=' ms-3 rounded-circle'/>:
            <h4 className='ms-3'>{element}</h4>
            }
            <p className='text-light text-decoration-none mt-3 ms-3'>{user.displayName}</p>
            </div>
      {/*  */}
      <h1>Book This Package</h1>
    <form className='info' onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName",)} Placeholder='Your Full Name' />
      <input {...register("email",)} Placeholder='Your Email' />
      <input type="number" {...register("Phone",)} Placeholder='Phone Number' />
      <input type="submit" />
    </form>
    </div>
    </div>
  );
};

export default PlaceOrder;
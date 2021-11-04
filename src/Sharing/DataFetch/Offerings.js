import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CardOfferings from './Card/CardOfferings';

const Offerings = () => {

  const [offerings, setofferings] = useState([]);

  useEffect(()=>{
    fetch('https://polar-earth-99556.herokuapp.com/HomeServices')
    .then(res => res.json())
    .then(data => setofferings(data))
  },[])
  console.log(offerings);
  return (
    <div className='container mt-5'>
      <Row xs={1} md={3} className="g-3">
      {
        offerings.map(services => <CardOfferings
        services={services}
        ></CardOfferings>)
      }
      </Row>
    </div>
  );
};

export default Offerings;
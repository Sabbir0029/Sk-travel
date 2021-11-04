import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CardFetch from './Card/CardFetch';

const Fatch = () => {
  const [fetchOne, setFetchOne] = useState([]);

  useEffect(()=>{
    fetch('https://polar-earth-99556.herokuapp.com/HomeServices')
    .then(res => res.json())
    .then(data => setFetchOne(data))
  },[])
  return (
    <div className='container mt-5'>
      <Row xs={1} md={3} className="g-2">
      {
        fetchOne.map(services => <CardFetch 
        services={services}
        ></CardFetch>)
      }
      </Row>
    </div>
  );
};

export default Fatch;
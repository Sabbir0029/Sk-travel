import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CardServices from '../../card/cardServices/CardServices';
import './Services.css'

const Services = () => {
  const [services, setservices] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount]= useState(0);
  const size = 10;
  useEffect(() => {
      fetch(`https://polar-earth-99556.herokuapp.com/Services?page=${page}&&size=${size}`)
          .then(res => res.json())
          .then(data => {
              setservices(data.services);
              const count = data.count;
              const pageNumber = Math.ceil(count/size)
              setPageCount(pageNumber);
          });
  }, [page]);
  console.log(services)
  return (
    <div className='services'>
      {/* <div className='bg-primary py-5 px-5'>
      <h1 className='text-center text-light'>This is services</h1>
      </div> */}
      <div>
        <div className='text-center mt-5'>
          <h3 className='text-warning fw-bold'>Choose Your Package</h3>
          <h1>Select Your Best Package <br /> For Your Travel</h1>
          <h1>=============================================</h1>
        </div>
        </div>
        <div className='container mt-5'>
        <Row xs={1} md={3} className="g-2">
          {
            services.map(service => <CardServices 
              key={service._id}
              service={service}>
              </CardServices>)
          }
          </Row>

          <div className='pageCount'>
              {
                [...Array(pageCount).keys()]
                .map(number => <button
                className={number === page ? 'selected' : ''}
                key={number}
                onClick={()=> setPage(number)}
                >{number + 1}</button>)
              }
            </div>
        </div>
    </div>
  );
};

export default Services;
import React from 'react';
import img1 from '../../img/jaflong-sylhet-04.jpg';
import img2 from '../../img/37211531855_22675111c4_b.jpg';
import img3 from '../../img/Sajek-Valley-900.jpg' 
import './Home.css'
import { Carousel } from 'react-bootstrap';
import Fatch from '../../Sharing/DataFetch/Fatch';
import Offerings from '../../Sharing/DataFetch/Offerings';
import img from '../../img/1569515821354.jpg'
import img4 from '../../img/1557836665702.jpg'
import img5 from '../../img/1574710504993.jpg'

const Home = () => {
  return (
    <div>
      {/* slider section */}
      <div>
      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Jaflong Sylhet</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Cox Bazar</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Sajek Valley</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
      {/* slider section end*/}
      <div className='container'>
        {/* Choose Your Package */}
        <div className='text-center mt-5'>
          <h3 className='text-warning fw-bold'>Choose Your Package</h3>
          <h1>Select Your Best Package <br /> For Your Travel</h1>
          <h1>=============================================</h1>
        </div>
        <Fatch></Fatch>
        {/* Special offer */}
        <div>
        <div className='text-center mt-5' >
        <h3 className='text-warning fw-bold'>Special offer</h3>
        <h1>Our Most Popular And <br />Best Adventures</h1>
        </div>
        <Offerings></Offerings>
        </div>
          {/* Feature Tours */}
        <div>
        <div className='text-center mt-5' >
        <h3 className='text-warning fw-bold'>Feature Tours</h3>
        <h1>See Our Best Popular  <br />Destinations</h1>
        </div>
        </div>
        {/* Our Traveller Say */}
        <div>
        <div className='text-center mt-5' >
        <h3 className='text-warning fw-bold'>Our Traveller Say</h3>
        <h1>What Oue Traveller Say <br />About Us</h1>
        <div className='About mt-5'>
          <div className='AboutStyle'>
            <img src={img} alt="" />
            <h1>Jahid Hassan</h1>
            <h4>Traveller</h4>
            <p>Instant Quotes & Purchase. Learn More Today! PPO network, direct billing. US based licensed agents. Highlights: Press Room Available,</p>
          </div>
          <div className='AboutStyle'>
          <img src={img4} alt="" />
            <h1>Shwan Pull</h1>
            <h4>Traveller</h4>
            <p>Cryotherapy is growing in popularity for pain and inflammation reduction. It uses nitrogen to quickly cool the body, to trigger</p>
          </div>
          <div className='AboutStyle'>
          <img src={img5} alt="" />
            <h1>Dina jems</h1>
            <h4>Traveller</h4>
            <p>Skateboarding is a popular activity and skateparks are a fun and safe place for those who love skateboarding. While skateboarding</p>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
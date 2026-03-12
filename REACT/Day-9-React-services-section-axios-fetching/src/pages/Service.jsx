import axios from 'axios'
import React, { useState, useEffect } from 'react'

// function Service() {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     console.log("run")
//   }, [count])

//   const handleClick = () => {
//     setCount((prev) => prev + 1);
//   }


const Service = () => {
  const [services, setServices] = useState([])


const getServicesData = async () => {
  try{
    const response = await axios.get('/service.json');
    setServices(response.data.services);
  } catch (err){
    console.log(err.message);
  }
}

useEffect(() => {
  getServicesData();
}, [])

  return (

     <div className="services-container">

  <h1 className="services-title">Our Services</h1>

  <div className="services-grid">
    {services?.map((service) => {
      return (
      <div className="service-card" key={service.id}>

        <img 
          src={service.image} 
          alt={service.title} 
          className="service-img"
        />

        <div className="service-content">
          <h2 className="service-title">{service.title}</h2>
          <p className="service-desc">{service.description}</p>

          <div className="service-bottom">
            <h3 className="service-price">${service.price}</h3>
            <button className="service-btn">Book Now</button>
          </div>

        </div>

      </div>
    )})}
  </div>

</div>
  )
}

export default Service;

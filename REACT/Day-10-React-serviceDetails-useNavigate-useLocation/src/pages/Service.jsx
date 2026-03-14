import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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

  const navigate = useNavigate();


  const getServicesData = async () => {
    try {
      const response = await axios.get('/service.json');
      setServices(response.data.services);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getServicesData();
  }, [])

  const handleDetails = (service) => {
    navigate("/service-detail", {
      state: service
    })
  };

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
                <p className="service-desc">{service.shortDescription}</p>

                <div className="service-rating">
                  ⭐ {service.rating} ({service.reviews} reviews)
                </div>
                <div className="service-bottom">
                  <div className="service-details-price">

            <span className="old-price">
              ${service.oldPrice}
            </span>

            <span className="new-price">
              ${service.price}
            </span>

          </div>
                  <button className="service-btn" onClick={() => handleDetails(service)}>View Details</button>
                </div>

              </div>

            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Service;

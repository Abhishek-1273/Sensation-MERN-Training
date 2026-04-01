import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function Service() {

  const [services, setServices] = useState([])
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()

  const category = searchParams.get("category")
  const sort = searchParams.get("sort")

  const getServicesData = async () => {
    try {
      const response = await axios.get('/service.json')
      setServices(response.data.services)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getServicesData()
  }, [])

  const handleDetails = (service) => {
    navigate("/service-detail", {
      state: service
    })
  }

  let filteredServices = [...services]

  // category filter
  if (category) {
    filteredServices = filteredServices.filter(
      (s) => s.category === category
    )
  }

  // sorting
  if (sort === "low") {
    filteredServices.sort((a, b) => a.price - b.price)
  }

  if (sort === "high") {
    filteredServices.sort((a, b) => b.price - a.price)
  }

  if (sort === "rating") {
    filteredServices.sort((a, b) => b.rating - a.rating)
  }

  return (

    <div className="services-container">

      <h1 className="services-title">Our Services</h1>

 <div className="sort-buttons">

  <button onClick={() => setSearchParams({ sort: "low" })}>
    Price Low → High
  </button>

  <button onClick={() => setSearchParams({ sort: "high" })}>
    Price High → Low
  </button>

  <button onClick={() => setSearchParams({ sort: "rating" })}>
    Top Rating
  </button>

</div>

      <div className="services-grid">

        {filteredServices.map((service) => (

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

                <button
                  className="service-btn"
                  onClick={() => handleDetails(service)}
                >
                  View Details
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Service
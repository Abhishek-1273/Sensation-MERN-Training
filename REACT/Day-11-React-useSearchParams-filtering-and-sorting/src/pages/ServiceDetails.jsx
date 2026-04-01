import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function ServiceDetails() {

  const navigate = useNavigate();

  const location = useLocation();
  const service = location.state;

  if (!service) {
    return <h2 style={{ textAlign: "center" }}>Service Not Found</h2>
  }

  return (
    <div className="service-details-container">

      <div className="service-details-card">
        <img
          src="/src/assets/images/left-arrow.png"
          alt="back"
          className="back-arrow"
          onClick={() => navigate(-1)}
        />

        <div className="service-details-img">
          <img src={service.image} alt={service.title} />
        </div>

        <div className="service-details-content">

          <h1 className="service-details-title">{service.title}</h1>

          <div className="service-details-rating">
            ⭐ {service.rating} ({service.reviews} reviews)
          </div>

          <p className="service-details-desc">
            {service.description}
          </p>

          <div className="service-details-price">

            <span className="old-price">
              ${service.oldPrice}
            </span>

            <span className="new-price">
              ${service.price}
            </span>

          </div>

          <button className="service-details-btn">
            Book This Service
          </button>

        </div>

      </div>

    </div>
  )
}

export default ServiceDetails
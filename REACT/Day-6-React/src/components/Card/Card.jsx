import React from 'react'
import "./Card.css"

function Card() {

  const products = [
    {
      id: 1,
      name: "Shirt",
      desc: "Men Regular Fit Printed Shirt",
      oldPrice: "₹1500",
      price: "₹1000",
      img: "https://rukminim2.flixcart.com/image/2348/2348/xif0q/shirt/9/4/7/s-mmm-solbiza-original-imahkqffcw68ga6u.jpeg?q=90"
    },
    {
      id: 2,
      name: "Pants",
      desc: "Pack of 2 Men solid Multicolor Pants",
      oldPrice: "₹900",
      price: "₹799",
      img: "https://rukminim2.flixcart.com/image/4696/4696/xif0q/track-pant/z/v/s/m-rctp-1line-royster-callus-original-imah79wwfvmcrmmj.jpeg?q=90"
    },
    {
      id: 3,
      name: "Shoes",
      desc: "Lite Casual Shoes Sneaker for men",
      oldPrice: "₹1200",
      price: "₹999",
      img: "https://rukminim2.flixcart.com/image/2348/2348/xif0q/shoe/x/p/k/7-bis-snk-eva-851-blu-7-bruton-blue-original-imahbch75zuzxgr8.jpeg?q=90"
    }
  ];


  return (
    <div className='box'>

      {products.map((item) => {
        return (
          <div className='card' key={item.id}>
            <img src={item.img} alt={item.name} />

            <div className='card-container'>
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
            </div>

            <div className='product-price'>
              <span className='old-price'>{item.oldPrice}</span>{item.price}</div>

            <button className='add-to-cart-btn'>Add to Cart</button>

          </div>
        )
      })}

    </div>
  )
}
export default Card;

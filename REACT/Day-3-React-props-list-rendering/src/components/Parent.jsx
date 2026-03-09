import React from 'react'
import Child from './Child'
import User from './User';


const Parent = () => {
  const data = [
    {
        CarID: 2334,
        CarName: "BMW",
        Price:"3.5cr"
    },
    {
        CarID: 2344,
        CarName: "Range Rover",
        Price:"2cr"
    }
  ]

const name = "Ryuzaki";
const age = 27;
const city = "Shibuya"


  return (
    <>
    <div>
        <h1>Cars Data</h1>
        <Child data= {data} />
    </div>

    <div>
        <h1>User Data</h1>
        <User name = {name} age = {age} city = {city}/>
    </div>
    </>
  )
}

export default Parent
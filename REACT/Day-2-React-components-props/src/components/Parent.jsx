
import React from 'react'
import Child from './Child'

const Parent = () => {
    const data = [                                      // prop
        {
        id: 1, 
        name: "Shirt",
        price: 1999
    },
    {
        id: 2, 
        name: "Shoes",
        price: 2000
    }
]


  return (
    <>
    <h1>This is Parent</h1>
    <Child data={data}/>
    </>
  )
}

export default Parent

import React from 'react'

function Child({data}) {
  return (
    <>
    <div>
        {
            data?.map((item) => {
                return(
                    <div key={item.CarID}>
                        <ol>
                        <li><b>Car ID:</b> {item.CarID}</li>
                        <li><b>Car Name:</b> {item.CarName}</li>
                        <li><b>Car Price:</b> {item.Price}</li>
                        </ol>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Child

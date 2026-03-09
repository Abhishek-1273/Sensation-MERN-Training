import React from 'react'

const Child = ({ data }) => {
    console.log(data)
    return (
        <>
            <div>
                {data?.map((item) => {
                    return (
                        <div key={item.id}>
                            <h1>{item.name}</h1>
                            <h1>{item.price}</h1>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Child
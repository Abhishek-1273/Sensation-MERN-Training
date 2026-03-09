import React from 'react'

function User({name, age, city}) {
  return (
    <div>
    <ul>
        <li><b>User name :</b> {name}</li>
        <li><b>User age :</b> {age}</li>
        <li><b>User city :</b> {city}</li>
    </ul>
    </div>
  )
}

export default User
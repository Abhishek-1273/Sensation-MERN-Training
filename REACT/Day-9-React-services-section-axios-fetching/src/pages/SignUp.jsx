import React, { useState } from 'react'
import animation from "../assets/animation/login.json";
import Lottie from 'lottie-react';

function SignUp() {
  const [data, setData] = useState({
    name: '',
    email: '',
    pass: '',
    confirmPass: '',
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      name: '',
      email: '',
      pass: '',
    confirmPass: '',
    })
  }
  return (
    <div className='auth-container'>
      <form onSubmit={handleSubmit}>
        <Lottie
          animationData={animation}
          loop={true}
          autoplay={true}
          style={{ height: 200 }}
        />
        <label>Name</label>
        <input type="text" placeholder='Enter your full name' value={data.name} name='name' onChange={handleChange} />
        <label>Email</label>
        <input type="email" placeholder='Enter your email address' value={data.email} name='email' onChange={handleChange} />
        <label>Password</label>
        <input type="password" placeholder='*******' value={data.pass} name='pass' onChange={handleChange} />
        <label>Confirm your password</label>
        <input type="password" placeholder='Re-enter password' value={data.confirmPass} name='confirmPass' onChange={handleChange} />

        <button className='form-btn'>
          SignUp
        </button>
      </form>
    </div>
  )
}

export default SignUp

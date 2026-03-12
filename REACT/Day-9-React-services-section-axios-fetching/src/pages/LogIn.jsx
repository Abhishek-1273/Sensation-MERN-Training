import React, { useState } from "react";
import Lottie from "lottie-react";
import animation from "../assets/animation/login.json";

function LogIn() {

    const [data, setData] = useState({
        email: '',
        pass: '',
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
            email: '',
            pass: '',
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
                <label>Enter your email</label>
                <input type="email" placeholder='Enter your email' value={data.email} name='email' onChange={handleChange} />
                <label>Enter your Password</label>
                <input type="password" placeholder='**********' value={data.pass} name='pass' onChange={handleChange} />

                <button className='form-btn'>
                    Log In
                </button>
            </form>
        </div>
    )
}

export default LogIn;

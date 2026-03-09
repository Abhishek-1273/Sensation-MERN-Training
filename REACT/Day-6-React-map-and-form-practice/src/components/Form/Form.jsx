import React, { useState } from 'react'
import "./Form.css"

const Form = () => {

    const [formData, setFormData] = useState({
        "first-name": "",
        "last-name": "",
        "roll-no": "",
        email: "",
        phone: "",
        gender: "",
        course: "",
        address: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            "first-name": "",
            "last-name": "",
            "roll-no": "",
            email: "",
            phone: "",
            gender: "",
            course: "",
            address: ""
        })
    }


    return (
        <div className="container">
            <h2>Student Registration</h2>

            <form onSubmit={handleSubmit}>

                <label>First Name</label>
                <input type="text" name="first-name" placeholder="Enter your first name" onChange={handleChange} />

                <label>Last Name</label>
                <input type="text" name="last-name" placeholder="Enter your last name" onChange={handleChange} />

                <label>Roll No</label>
                <input type="text" name="roll-no" placeholder="Enter your roll no" onChange={handleChange} />

                <label>Email</label>
                <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} />

                <label>Phone</label>
                <input type="tel" name="phone" placeholder="Enter your phone number" onChange={handleChange} />

                <label>Gender</label>
                <div className="gender">
                    <label>
                        <input type="radio" name="gender" value="Male" onChange={handleChange} />
                        Male
                    </label>

                    <label>
                        <input type="radio" name="gender" value="Female" onChange={handleChange} />
                        Female
                    </label>
                </div>

                <label>Course</label>
                <select name="course" onChange={handleChange}>
                    <option value="">Select Course</option>
                    <option>BCA</option>
                    <option>BBA</option>
                    <option>B.Tech</option>
                    <option>MCA</option>
                </select>

                <label>Address</label>
                <textarea name="address" rows="3" onChange={handleChange}></textarea>

                <button type="submit">Register</button>

            </form>
        </div>
    )
}

export default Form
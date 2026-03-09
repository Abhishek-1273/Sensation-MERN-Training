import { useState } from 'react'

const Form = () => {

    // const [username, setName] = useState("");

    // const handleChange = (e) => {     // "e" ka matlab event object hota hai jo input ka data laata hai.
    //     setName(e.target.value);
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();   // Prevents the page from refreshing when the form submits.
    //     console.log(name)
    //     setName("");
    // }


    // ----------------------------------------------------------------------------------------------------------------------------------


    const [formData, setFormData] = useState({      // Yaha ek state object banaya gaya hai jo multiple inputs ka data store karega.
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {


        //     setFormData({
        //         ...formData,         // previous formData ko copy karte hain taaki baaki fields ka data lost na ho with the help of spread
        //         [e.target.name]: e.target.value,
        //     })


        setFormData((prev) => ({
            ...prev,                       // previous state callback bhi use kar skte hain
            [e.target.name]: e.target.value,
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        setFormData({
            username: "",
            email: "",
            password: "",
        });
    };


    return (
        <div>
            <h1>Form data Collector</h1>
            <form onSubmit={handleSubmit}>
                <input name="username" type="text"
                    placeholder='Enter your username' onChange={handleChange} value={formData.username} />

                <input name="email" type="text"
                    placeholder='Enter your email' onChange={handleChange} value={formData.email} />

                <input name="password" type="password"
                    placeholder='Enter your password' onChange={handleChange} value={formData.password} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;
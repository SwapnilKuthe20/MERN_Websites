import React, { useState } from 'react'
import { url } from '../ConstantUrl/ContantUrl';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import axios from 'axios';

const Login = () => {
    const [login, setLogin] = useState({
        Email: '',
        Password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin({
            ...login,
            [name]: value
        })
    }

    const payload = {
        email: login.Email,
        password: login.Password
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${url}/api/user/login`, payload)
            // console.log(response, "......");
            toast.success(response?.data?.message, {
                position: "top-right",
                autoClose: 1500,
                theme: "dark",
                transition: Bounce,
            });

            localStorage.setItem('token', response?.data?.token);
            setAuthenticate(true)

            if (response?.data?.success) {
                setTimeout(() => {
                    navigate('/');
                }, 1500); // Matches the autoClose time of the toast
            }

        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong", {
                position: "top-right",
                autoClose: 1500,
                theme: "dark",
                transition: Bounce,
            });
        }

    }

    return (
        <div className='container my-5 p-4 ' style={{ width: "600px", border: '2px solid yellow' }}>
            <h1 className='text-center'>User Log In</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email </label>
                    <input
                        type="email"
                        name='Email'
                        value={login.Email}
                        onChange={handleChange}
                        id="email"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        name='Password'
                        value={login.Password}
                        onChange={handleChange}
                        id="password"
                        className="form-control"
                        autocomplete="new-password"
                    />
                </div>
                <div className='d-grid col-6 mx-auto my-3'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login

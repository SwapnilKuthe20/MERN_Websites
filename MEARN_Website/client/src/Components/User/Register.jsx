import axios from 'axios';
import React, { useState } from 'react'
import { url } from '../ConstantUrl/ContantUrl';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [form, setForm] = useState({
        Name: '',
        Email: '',
        Password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const navigate = useNavigate();

    const payload = {
        name: form.Name,
        email: form.Email,
        password: form.Password
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${url}/api/user/register`, payload)
            .then((resp) => {
                alert(resp.data.message);
                resp?.data?.success && navigate('/login')

            })
            .catch((error) => {
                alert(error.message);
            })

        setForm({
            Name: '',
            Email: '',
            Password: ''
        });

    }


    return (
        <div className='container my-5 p-4 ' style={{ width: "600px", border: '2px solid yellow' }}>
            <h1 className='text-center'>User Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        name='Name'
                        value={form.Name}
                        id="name"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email </label>
                    <input
                        type="email"
                        name='Email'
                        value={form.Email}
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
                        value={form.Password}
                        onChange={handleChange}
                        id="password"
                        className="form-control"
                    />
                </div>
                <div className='d-grid col-6 mx-auto my-3'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register

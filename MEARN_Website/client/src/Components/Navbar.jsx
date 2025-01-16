import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/product/search/${input}`)
        setInput("");
    }



    return (
        <>
            <div className="nav sticky-top">
                <div className="nav-bar p-2 ">
                    <Link to={'/'} className="left text-white">
                        <h3>MERN-E-COMMERSE</h3>
                    </Link>
                    <form className="search-bar" onSubmit={submitHandler}>
                        <span className="material-symbols-outlined">
                            search
                        </span>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder='Search Products...'
                        />
                    </form>
                    <div className="right">
                        <button className="btn btn-warning mx-2">Cart</button>
                        <button className="btn btn-warning mx-2">Profile</button>
                        <Link to={'/register'} className="btn btn-warning mx-2">Register</Link>
                        <Link to={'/login'} className="btn btn-warning mx-2">LogIn</Link>
                        <button className="btn btn-warning mx-2">LogOut</button>
                    </div>
                </div>
                <div className="sub-bar">

                </div>
            </div>

        </>
    )
}

export default Navbar

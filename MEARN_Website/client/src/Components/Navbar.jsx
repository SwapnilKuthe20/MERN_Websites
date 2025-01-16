import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AppContext from '../ContexApi/AppContex';

const Navbar = () => {
    const [input, setInput] = useState("");

    const navigate = useNavigate();
    const { products, setFilterData } = useContext(AppContext)
    const location = useLocation();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/product/search/${input}`)
        setInput("");
    }

    const handleFilter = (category) => {
        setFilterData(
            products?.filter((data) => data?.category?.toLowerCase()?.includes(category?.toLowerCase()))
        )
    }

    const handlePrice = (price) => {
        setFilterData(
            products?.filter((data) => data?.price < price)
        )
    }

    return (
        <>
            <div className="nav sticky-top">
                <div className="nav-bar p-2 ">
                    <Link to={'/'} className="left text-white">
                        <h3 onClick={() => setFilterData(products)}>MERN-E-COMMERSE</h3>
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
                        <Link to={'/logout'} className="btn btn-warning mx-2">LogOut</Link>
                    </div>
                </div>

                {
                    location.pathname == '/' &&
                    (
                        <div className="sub-bar">
                            <div className="item" onClick={() => setFilterData(products)}>All</div>
                            <div className="item" onClick={() => handleFilter("mobile")}>Mobiles</div>
                            <div className="item" onClick={() => handleFilter("laptop")}>Laptops</div>
                            <div className="item" onClick={() => handleFilter("camera")}>Camera</div>
                            <div className="item" onClick={() => handleFilter("headphone")}>Headphone</div>
                            <div className="item" onClick={() => handlePrice(15999)}>15999</div>
                            <div className="item" onClick={() => handlePrice(25999)}>25999</div>
                            <div className="item" onClick={() => handlePrice(25999)}>25999</div>
                            <div className="item" onClick={() => handlePrice(69999)}>69999</div>
                            <div className="item" onClick={() => handlePrice(99999)}>99999</div>
                        </div>
                    )
                }


            </div>

        </>
    )
}

export default Navbar

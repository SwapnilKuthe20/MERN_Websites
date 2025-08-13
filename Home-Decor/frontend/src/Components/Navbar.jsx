import { NavLink, useNavigate } from 'react-router-dom';
import { logo } from '../assets/Images/Navbar'

const navItems = [
    { id: 1, to: "categories", label: "Categories" },
    { id: 2, to: "daily-deals", label: "Daily Deals" },
    { id: 3, to: "stores", label: "Stores" },
    { id: 4, to: "about-us", label: "About Us" },
]

const Navbar = () => {

    const navigate = useNavigate()

    const handleLogin = () => {


        navigate('/')
    }

    return (
        <nav className=' bg-[#A5DEF1] py-2'>
            <div className='flex justify-between items-center w-11/12 m-auto'>
                <div>
                    <NavLink to={'/'}>
                        <img src={logo} alt="logo" width={50} height={50} />
                    </NavLink>
                </div>
                <ul className='flex gap-1 sm:gap-1 md:gap-4 lg:gap-12 text-[10px] sm:text-xs md:text-lg justify-center items-center'>
                    {
                        navItems.map(({ id, to, label }) => (
                            <li key={id} className='hover:text-purple-800'>
                                <NavLink to={to}> {label} </NavLink>
                            </li>
                        ))
                    }
                    <button onClick={handleLogin} className='login-btn'> Log In </button>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

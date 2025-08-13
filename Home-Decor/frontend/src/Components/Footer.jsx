import { NavLink } from "react-router-dom";
import { facebook, twitter, instagram, youtube, footerlogo, location } from '../assets/Images/Footer'

const footerLink1 = [
    { id: 1, to: "find-a-store", link: "FIND A STORE" },
    { id: 2, to: "sign-up-for-email", link: "SIGN UP FOR EMAIL" },
    { id: 3, to: "send-us-feedback", link: "Send Us Feedback" },
    { id: 4, to: "about-us", link: "About Us" },
]

const footerLink2 = [
    { id: 1, to: "get-help", link: "Get Help" },
    { id: 2, to: "order-status", link: "Order Status" },
    { id: 3, to: "delivery", link: "Delivery" },
    { id: 4, to: "returns", link: "Returns" },
    { id: 5, to: "payment-options", link: "Payment Options" },
    { id: 6, to: "swap-policy", link: "Swap Policy" }
]

const footerSocialLinks = [
    { id: 1, to: "twitter", img: twitter },
    { id: 2, to: "instagram", img: instagram },
    { id: 3, to: "facebook", img: facebook },
    { id: 4, to: "youtube", img: youtube },
]

const Footer = () => {
    return (
        <div className="bg-[#233142] text-[#EBF7FD] w-full p-10 ">
            <div className="flex justify-around ">

                <ul>
                    {
                        footerLink1.map(({ id, to, link }) => (
                            <li key={id} className="mb-2  hover:text-amber-300">
                                <NavLink to={to}> {link} </NavLink>
                            </li>
                        ))
                    }
                </ul>

                <ul className="">
                    {
                        footerLink2.map(({ id, to, link }) => (
                            <li key={id} className="mb-2 hover:text-amber-300">
                                <NavLink to={to}> {link} </NavLink>
                            </li>
                        ))
                    }
                </ul>

                <div className="text-center ">
                    <NavLink to={"connect-with-us"} className={"hover:text-amber-300"} >Connect with Us</NavLink>
                    <ul className="flex gap-6 justify-center items-center mt-5">
                        {
                            footerSocialLinks.map(({ id, to, img }) => (
                                <li key={id} className="hover:text-amber-300">
                                    <NavLink to={to}>
                                        <div className="w-full max-w-7">
                                            <img src={img} alt={to} className="hover:shadow-lg hover:shadow-amber-300 " />
                                        </div>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>

                    <NavLink>
                        <div className="w-full max-w-2.5 flex justify-center items-center gap-2 mt-5 m-auto hover:text-amber-300">
                            <img src={location} alt="location-img" width={10} height={10} />
                            <h3> India </h3>
                        </div>
                    </NavLink>
                </div>

                <div className="">
                    <NavLink to={'/'}>
                        <div className="flex gap-5 justify-center items-center hover:text-amber-300">

                            <div className="w-full max-w-36 ">
                                <img src={footerlogo} alt="footer-logo" className="hover:shadow-lg hover:shadow-amber-300 " />
                            </div>
                            <div className="text-5xl ">
                                <h1 className="mt-2.5 ">HOME </h1>
                                <h1 className="mt-2.5 ">DECOR </h1>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>

            <h2 className="text-center text-[16px] mt-2.5">All Rights Reserved to Home Decor  2023 </h2>
        </div >

    );
}

export default Footer;

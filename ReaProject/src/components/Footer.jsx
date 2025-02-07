import React from "react";
import '../styles/Footer.css'
import Sponsors from '../assets/Sponsors.webp';
import { MdFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
function Footer(){

    return (
        <section className="footer">
            <div className="stayUpdated">
                <h2>Stay up to date</h2>
                <p>Subscribe to our newsletter and get 20% discount offer in your first order.</p>
                <div className="newsletter">
                    <input type="email" required placeholder="Enter your email"/>
                    <button type="Onclick">Submit</button>
                </div>
                <div className="Lists">
                    <ul>
                        <h2>SHOP</h2>
                        <li>Body Lotion</li>
                        <li>Computer Gadget</li>
                        <li>Electronics</li>
                        <li>Fashion</li>
                        <li>General</li>
                        <li>Shoes</li>
                        <li>Sports</li>
                        <li>Watch</li>
                        <li>Woman Clothes</li>
                    </ul>
                    <ul>
                        <h2>COMPANY</h2>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Help</li>
                        <li>Contact</li>
                    </ul>
                    <ul>
                        <h2>ABOUT</h2>
                        <li>Who We Are</li>
                        <li>Reviews</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="footerContacts">
                <div className="address">
                    <h2>Happy to help</h2>
                    <p>1279 Thorn Street, NY</p>
                    <p>Phone: 307-549-2480</p>
                    <p>Mail: demo@gmail.com</p> 
                </div>
                <div className="socialMediaIcons">
                <MdFacebook />
                <FaXTwitter />
                <IoLogoLinkedin />
                <AiOutlineInstagram />
                </div>
                <div className="paymentSponsors">
                    <h2>ACCEPT FOR</h2>
                    <div>
                        <img src={Sponsors}/>
                </div>
                </div>
            </div>
        </section>
    )
}
export default Footer;
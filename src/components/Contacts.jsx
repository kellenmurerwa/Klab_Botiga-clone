import React from "react";
import '../styles/Contacts.css'

function Contact()
{
  return (
    <div className="map">
        <div className="maplocation">
            <iframe  src="https://www.google.com/maps/embed?pb=your-map-url"
            allowFullScreen=" " loading="lazy"></iframe>
        </div>
        <div className="contactsContainer">
            <div className="registrationForm">
                <h2>Leave Us a Message</h2>
                <form className="form">
                    <p>Name * </p>
                    <div className="UserInfo">
                        <div className="firstName">
                            <input type="text" placeholder=" " required /> 
                            <p>First</p>
                        </div>
                        <div className="lastName">
                            <input type="text" placeholder=" " required /> 
                            <p>Last</p>
                        </div>
                        
                    </div>
                    <p>Email * </p>
                    <input type="email" placeholder=" " required />
                    <p>Comment or Message </p>
                    <textarea placeholder=" "/>
                    <button>SUBMIT</button>
                </form>
            </div>
            <div className="Address">
                <h2>Our Store</h2>
                <h3>501-521 Fashion Ave, New York, NY 10018, USA</h3>
                <p>PHONE: +1 212 244 2681</p>
                <p>E-MAIL: office@example.org</p>
                <h2>Store Hours</h2>
                <p>Sun: Closed</p>
                <p>Mon to Sat: 10 AM - 5:30 PM</p>
            </div>
        </div>
    </div>
  );
};

export default Contact;
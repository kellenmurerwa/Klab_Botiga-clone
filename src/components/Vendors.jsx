import React from "react";
import "../styles/Vendors.css";
import { Link } from "react-router-dom";
import DigitalStore from '../assets/DigitalStore.jpg';
import JessicaStore from "../assets/JessicaStore.jpg";
import JohnDoe from "../assets/JohnDoe.jpg";
import SantaMonicaStore from "../assets/SantaMonicaStore.jpg";
import JoshStore from "../assets/JoshStore.jpg";
import croppedVendorShoesShop from "../assets/croppedVendorShoesShop.jpg";

const vendors = [
    { name: "John Doe's Store", image: DigitalStore, location: { area: 'Central Park', city: 'New York', state: 'New York', country: 'United States (US)' }, ratings: 5, link: "/store/DigitalStore", profileImage: DigitalStore },
    
    { name: "Vendor Shoe Shop", location: { area: 'Central Park', city: 'New York', state: 'New York', country: 'United States (US)' }, ratings: 4, image: croppedVendorShoesShop, link: "/store/shoes", profileImage: croppedVendorShoesShop },  

    { name: "Jessica's Store", location: { area: 'Central Park', city: 'New York', state: 'New York', country: 'United States (US)' }, ratings: 4.5, image: JessicaStore, link: "/store/jessica", profileImage: JessicaStore },

    { name: "Santa Monica Store", location: { area: 'Central Park', city: 'New York', state: 'New York', country: 'United States (US)' }, ratings: 4.5, image: SantaMonicaStore, link: "/store/santa-monica", profileImage: SantaMonicaStore },

    { name: "Josh's Electronics", location: { area: 'Central Park', city: 'New York', state: 'New York', country: 'United States (US)' }, ratings: 0, image: JoshStore, link: "/store/josh", profileImage: JoshStore },

    { name: "John Doe's Shop", location: { area: 'Central Park', city: 'New York', state: 'New York', country: 'United States (US)' }, ratings: 5, image: JohnDoe, link: "/store/john", profileImage: JohnDoe },
];

const Vendors = () => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : 'empty'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="vendors-container">
      <h2>Store List</h2>
      <div className="vendors-grid">
        {vendors.map(vendor => (
          <div key={vendor.id} className="vendor-card">
            <div className ='vendor-image' style ={{backgroundImage: `url(${vendor.image})`}}>
            <div className="vendorInfo">
        
              <h3 className="vendor-name">{vendor.name}</h3>
              <div className="rating">{renderStars(vendor.ratings)}</div>
              <div className="location">
                <p>{vendor.location.area},</p>
                <p>{vendor.location.city},</p>
                <p>
                  {vendor.location.state}, {vendor.location.country}
                </p>
              </div>
            </div>
            <div className="profile-image">
              <img src={vendor.profileImage} alt={`${vendor.name} profile`} />
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendors;

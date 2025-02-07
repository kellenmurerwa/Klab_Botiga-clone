import React, { useState } from "react";  
import '../styles/Shop.css'
import ShopImage from '../assets/ShopImage.jpg';
import allinOneBottle from '../assets/allinOneBottle.jpg';
import Amazon from '../assets/Amazon.jpg'
import Headset from '../assets/Headset.jpg'
import productCamRecorder from '../assets/productCamRecorder.jpg'
import productheadsetGamer from '../assets/productheadsetGamer.jpg'
import productWatch from '../assets/productWatch.jpg'
import Johnshoes from '../assets/Johnshoes.jpg'
import productmouse from '../assets/productmouse.jpg'
import productskincream from '../assets/productskincream.jpg'
import { Link } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Shop = () => {

    const exploreShopProductsCard1 = [
        { name: "All In One Bottle", price: { from: 22, to: 55 }, image: allinOneBottle },
        { name: "Amazon Alexa", price: { from: 22, to: 55 }, image: Amazon },
        { name: "Headset Gamer Legion ", price: { from: 22, to: 55 }, image: Headset },
    ];
    const exploreShopProductsCard2 = [
        { name: "Headset Gamer Legion Plus", price: { from: 22, to: 55 }, image: productheadsetGamer },
        { name: "JDoe's Styling Watch", price: { from: 22, to: 33 }, image: productWatch },
        { name: "Jessi Cam Recorder", price: { from: 22, to: 55 }, image: productCamRecorder },
    ];
    const exploreShopProductsCard3 = [
        { name: "John Sport Shoes", price: { from: 22, to: 55 }, image: Johnshoes },
        { name: "Mouse Raxer 3000DPI", price: { from: 22, to: 55 }, image: productmouse },
        { name: "Santa Monica Facial Cream ", price: { from: 22, to: 55 }, image: productskincream },
    ];

    const preferences = ["Default sorting", "Sort by popularity", "Sort by average rating", "Sort by latest", "Sort by price: from low to high", "Sort by price: from high to low"];  // ✅ Removed duplicate "sort by average rating"

    const [selected, setSelected] = useState("Default sorting");  
    return (
        <div className="shopContainer">

            <div className="categoryholder">
                <div className="ShopTitle">
                    <h1>Shop</h1>
                </div>
                <div className="categoriesContainer">
                    <h2>Categories</h2>
                    <ul>
                        <li>Body Lotion (1)</li>
                        <li>Computer Gadgets (3)</li>
                        <li>Electronics (5)</li>
                        <li>Fashion (3)</li>
                        <li>General (1)</li>
                        <li>Shoes (2)</li>
                        <li>Sports (3)</li>
                        <li>Watch (1)</li>
                        <li>Woman Clothes (3)</li>
                    </ul>
                </div>

                <h3>Rating</h3>
                <div className="ratingStars">
                    <div className="stars">
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <p>(8)</p>
                    </div>
                </div>
                <div className="ratingStars">
                    <div className="stars">
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <p>(4)</p>
                    </div>
                </div>

                <div className="priceBar">
                    <h3>Price</h3>
                </div>
            </div>

            <div className="CardContainer"> 
                <div className="shopImage">
                    <img src={ShopImage} alt="Shop Banner" />  
                </div>

                <div className="sortTag">
                    <h3>Showing 1–9 of 13 results</h3>
                    <div className="sortByPreferences">
                        <select id="dropdown" value={selected} onChange={(event) => setSelected(event.target.value)}>  {/* ✅ Fixed event name */}
                            {preferences.map((preference, index) => (
                                <option key={index} value={preference}>
                                    {preference}
                                </option>
                            ))}
                        </select>
        
                    </div>
                </div>

                <div className="shopItemCards">
                    <div className="grid">
                        {exploreShopProductsCard1.map((shopItem, index) => (
                            <div key={index} className="shopItems">
                                <img src={shopItem.image} alt={shopItem.name} />
                                <h3>{shopItem.name}</h3>
                                <p>${shopItem.price.from} - ${shopItem.price.to}</p>
                                <div className="stars">
                                    <FaStar className="star" />
                                    <FaStar className="star" />
                                    <FaStar className="star" />
                                    <FaStar className="star" />
                                    <FaStar className="star" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid">
                        {exploreShopProductsCard2.map((shopItem, index) => (
                            <div key={index} className="shopItems2">
                                <img src={shopItem.image} alt={shopItem.name} />
                                <h3>{shopItem.name}</h3>
                                <p>${shopItem.price.from} - ${shopItem.price.to}</p>
                            </div>
                        ))}
                    </div>
                    <div className="grid">
                        {exploreShopProductsCard3.map((shopItem, index) => (
                            <div key={index} className="shopItems3">
                                <img src={shopItem.image} alt={shopItem.name} />
                                <h3>{shopItem.name}</h3>
                                <p>${shopItem.price.from} - ${shopItem.price.to}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;

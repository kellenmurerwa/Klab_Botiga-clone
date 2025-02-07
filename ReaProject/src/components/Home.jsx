import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css'
import allinOneBottle from '../assets/allinOneBottle.jpg';
import Amazon from '../assets/Amazon.jpg'
import bodyLotion from '../assets/bodyLotion.jpg'
import ComputerGadget from '../assets/ComputerGadget.jpg'
import DigitalStore from '../assets/DigitalStore.jpg'
import Electronics from '../assets/Electronics.jpg'
// import glassStore from '../assets/grassStore.jpg'
// import Headset from '../assets/Headset.jpg'
// import instagram1 from '../assets/instagram1.jpg'
// import instagram2 from '../assets/instagram2.jpg'
// import instagram3 from '../assets/instagram3.jpg'
// import instagram4 from '../assets/instagram4.jpg'
// import instagram5 from '../assets/instagram5.jpg'
// import instagram6 from '../assets/instagram6.jpg'
// import JessicaStore from '../assets/JessicaStore.jpg'
// import JohnDoe from '../assets/JohnDoe.jpg'
// import productCamRecorder from '../assets/productCamRecorder.jpg'
import productheadsetGamer from '../assets/productheadsetGamer.jpg'
// import productWatch from '../assets/productWatch.jpg'
import SantaMonicaStore from '../assets/SantaMonicaStore.jpg'
import womanClothes from '../assets/womanClothes.jpg'
import JoshStore from '../assets/JoshStore.jpg'
import sports from '../assets/sports.jpg'
import watch from '../assets/watch.jpg'
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

export const newArrivals = [
    { id: 1, name: "All In One Bottle", price: { from: 22, to: 55 }, image: allinOneBottle,  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus'},
    {  id: 2, name: "Amazon Alexa", price: { from: 22, to: 55 }, image: Amazon, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus'},
    { id: 3, name: "Headset Gamer Legion", price: { from: 22, to: 55 }, image: productheadsetGamer, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus'},
];


const Home = () =>
    
    {

        const navigation = useNavigate();
        
            const HandleNavigate = (id) => {
                navigation(`/singleCard/${id}`)
            }
    const popularCategories = [
        { name: "Body Lotion", image: bodyLotion, link: '/Shop' },
        { name: "Sports", image: sports, link: '/Shop' },
        { name: "Computer Gadget", image: ComputerGadget, link: '/Shop' },
        { name: "Electronics", image: Electronics, link: '/Shop' },
        { name: "Watch", image: watch, link: '/Shop' },
        { name: "Woman Clothes", image: womanClothes, link: '/Shop' },
    ];


    const vendorCategory = [
        { name: "Santa Monica's Store", image: SantaMonicaStore },
        { name: "Josh Doe's Store", image: JoshStore },
        { name: "Digital Good's Store", image: DigitalStore },
    ];

    return (
        <div className="mainContent">
             <div className="content">
                <div className="trendingCategories">
                    <ul>
                        <li>Electronics</li>
                        <li>Computer Gadgets</li>
                        <li>Fashion</li>
                        <li>Body Lotion</li>
                        <li>Sports</li>
                        <li>Woman Clothes</li>
                        <li>Shoes</li>
                        <li>Watches</li>
                    </ul>
                </div>
                {/* exploreLatest Section */}
                <div className="exploreLatest">
                    <h1>Explore our latest and<br/> greatest electronics</h1>
                    <button className="shopNow">SHOP NOW</button>
                </div>

            </div>
            {/* Trending Categories */}
             
            {/* Popular Categories */}
            <section className="section">
                <h2>Popular Categories</h2>
                <div className="grid">
                    {popularCategories.map((category) => (
                        <Link to={category.link} key={category.name}className="categoryCard">
                            <img src={category.image} alt={category.name} />
                            <h3>{category.name}</h3>
                        </Link>
                    ))}
                </div>
            </section>

            {/* New Arrivals */}

         
            <section className="section">
    <h2>New Arrivals</h2>
    <div className="grid">
        {newArrivals.map((item, index) => (
            <div key={index} className="productCard">
                <div className="imageContainer">  
                    <img className="imageId" src={item.image} alt={item.name} />
                    
                    
                    <div className="buttonsContainer">
                        <button type="button" className="buttonCart" onClick={() => HandleNavigate(item.id)}>
                            Add to Cart
                        </button>
                        <button type="button" className="button" onClick={() => HandleNavigate(item.id)}>
                            Quick View
                        </button> 
                    </div>
                </div>  

              
                <h3>{item.name}</h3>
                <p className="price">${item.price.from} - ${item.price.to}</p>
                
               
                <div className="ratings">
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                </div>

                
                <div className="hideDescription">{item.description}</div>
            </div>
        ))}
    </div>
</section>


            {/* Vendor Stores */}
            <section className="section">
                <h2>Top Vendors</h2>
                <div className="grid">
                    {vendorCategory.map((store, index) => (
                        <div key={index} className="vendorCard">
                            <img src={store.image} alt={store.name} />
                            <h3>{store.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
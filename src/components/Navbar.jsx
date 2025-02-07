import React, { useState } from "react";
import '../styles/Navbar.css'
import { Link } from "react-router-dom";
import { LuUserRound } from "react-icons/lu";
import { CgShoppingBag } from "react-icons/cg";
import { RiHeartLine } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import UseStateHook from "./UseStateHook";



function Navbar(){
    const [model, modelState] = useState(false);
    const handleModelState = () =>{
        modelState(!model)
    }

    return(
    <>
    <div className="navigationBar">
    {model && <UseStateHook handleModelState = {handleModelState}/>}
    
    <Link to='/'>
    <h2>Botiga</h2>
    </Link>
         <div className="searchTool">
            <button>All Categories</button>
            <input placeholder="Search products..." /><IoSearchOutline className="searchIcon" />
         </div>
         <div className="icons">
                <LuUserRound onClick={handleModelState} className="user"/>
                
                
                <CgShoppingBag />
                
                <RiHeartLine />
         </div>
    
         
    </div>
    <div className="navBar">
        <div>
        <Link to='/'>
                <li>
                    Trending Categories
                </li>
                </Link>
        </div>
        <nav>
            <ul>
                <Link to='/'>
                <li>
                    Home
                </li>
                </Link>
                <Link to='/Shop'>
                <li>
                    Shop
                </li>
                </Link>
                <Link Link to='/Vendors'>
                <li>
                    Vendors
                </li>
                </Link>
                <Link to='/Contacts'>
                <li>
                    Contact
                </li>
                </Link>
                <Link to='/Blog'>
                <li>
                    Blog
                </li>
                </Link>
                {/* <Link to='/UseStateHook'>
                <li>Log In</li>
                </Link> */}
        
            </ul>
            
        </nav>
        
        <div className="call">
                <Link to={'/'}>
                    <IoCall /> 800-123-4567
                </Link>
                </div>
    </div>
    </>
    )
}

export default Navbar;
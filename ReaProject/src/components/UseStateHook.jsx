import React from "react";
import { useState } from "react";
import '../styles/UseStateHook.css'
import { IoClose } from "react-icons/io5";


const UseStateHook = ({handleModelState}) => {
    return (
        <div className="formContainer">
            <div className="overlay" onClick={handleModelState}></div>
            <form>
               <div className="closeIcon">
                               <h2>Log In</h2>
                               <IoClose onClick = {handleModelState} />
                               </div>
                <input type="text" placeholder="Enter your names" required/>
                <input type="email" placeholder="Enter your Email" required/>
                <input type="password" placeholder="Enter your password" required/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default UseStateHook;
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import "../styles/UseStateHook.css";

const UseStateHook = ({ handleModelState }) => {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="overlay" onClick={handleModelState}>
            <div className="formContainer" onClick={(formItem) => formItem.stopPropagation()}>
                <div className="closeIcon">
                    <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>
                    <IoClose onClick={handleModelState} />
                </div>

                {/* Conditional Rendering for Login / Sign-Up Form */}
                {!isSignUp ? (
                    <form>
                        <input type="text" placeholder="Enter your names" required />
                        <input type="email" placeholder="Enter your Email" required />
                        <input type="password" placeholder="Enter your password" required />

                        {/* Forgot Password */}
                        <div className="forgotPassword">
                            <button type="button" className="linkButton">Forgot Password?</button>
                        </div>

                        <button type="submit">Login</button>

                        {/* Toggle to Sign-Up */}
                        <div className="signupOption">
                            <p>Don't have an account? 
                                <button type="button" className="linkButton" onClick={() => setIsSignUp(true)}>Sign Up</button>
                            </p>
                        </div>
                    </form>
                ) : (
                    <form>
                        <input type="text" placeholder="Full Name" required />
                        <input type="email" placeholder="Email Address" required />
                        <input type="password" placeholder="Create Password" required />
                        <input type="password" placeholder="Confirm Password" required />

                        <button type="submit">Sign Up</button>

                        {/* Back to Login */}
                        <div className="signupOption">
                            <p>Already have an account? 
                                <button type="button" className="linkButton" onClick={() => setIsSignUp(false)}>Log In</button>
                            </p>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default UseStateHook;

"use client";
import Image from "next/image";
import Notification from "./images/notification.svg";
import "./subscribe.css"
import { useState } from "react";

export default function Subscribe() {
  
  // Tog hjälp av ChatGPT för att fixa det sista med validation.

  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address (must include "@" and a domain like ".com").');
    } else {
      setErrorMessage('');
     
    }
  };

  return (
    <div className="Subscribe">
      <div className="container">    
        <h1 className="mobile"> <Image src={Notification} alt=""/> Subscribe to our newsletter </h1>
          <div className="subtext">
          <input className="textfield" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          
          <button className="subbutton" onClick={validateEmail}>Subscribe</button>
          {errorMessage && (
          <p id="error-message">
            {errorMessage}
          </p>

        )}
        </div>
      </div>
    </div>
  );
}

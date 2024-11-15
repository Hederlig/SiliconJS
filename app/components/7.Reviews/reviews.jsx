"use client";
import "./reviews.css"
import Clients from "./components/Clients";
import { useState, useEffect } from "react";


export default function Reviews() {
  const [testimonials , setTestimonials] = useState([])
  
  const getTestimonials = async () => {
    const res = await fetch ("https://win24-assignment.azurewebsites.net/api/testimonials")
    const data = await res.json()
    setTestimonials(data)
  }

  useEffect(() => {
    getTestimonials()
  }, [])

  return (
    <div className="Reviews">
     <h1>Clients are <br />Loving Our App</h1>

        
        <div className="cards">
        
        <div className="users">
          {
            testimonials.map((testimoniall) => (
              <Clients key={testimoniall.id} item={(testimoniall)} />
            ))
          }  
           </div>
      </div>
    </div>
  );
}
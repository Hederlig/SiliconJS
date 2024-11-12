import Image from "next/image";
import Notification from "./images/notification.svg";
import "./subscribe.css"

export default function Subscribe() {
  return (
    <div className="Subscribe">
      <div className="container">       

        <h1 className="mobile"> <Image src={Notification} alt="" /> Subscribe to our newsletter </h1>
        
        <div className="subtext">
          <input className="textfield" placeholder="Your Email" id="email"></input>
          <button className="subbutton">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
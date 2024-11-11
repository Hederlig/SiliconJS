import Image from "next/image";
import Check from "./images/check.svg";
import Inner from "./images/fact-inner.svg";
import Out from "./images/fact-out.svg";
import People from "./images/larepeople.svg";
import Card from "./images/card.svg";
import Credit from "./images/credit-card.svg";
import Wallet from "./images/wallet.svg";
import "./facedetail.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Facedetail() {
  return (
    <div className="Facedetail">
      <div className="container">
        <div className="upper">
          <div className="top">
            <h1>Make your money <br />transfer simple and clear</h1>
            <p> <Image src={Check} alt="" /> Banking transactions are free for you</p>
            <p> <Image src={Check} alt="" />No monthly cash commission</p>
            <p> <Image src={Check} alt="" />Manage payments and transactions online</p>
            <button className="button">Learn more <FontAwesomeIcon className="arrow" icon={faArrowRight} /><i
              className="fa-solid fa-arrow-right"></i></button>

          </div>
          <div>
            <Image className="inner" src={Inner} alt="" />
            <Image className="out" src={Out} alt="" />
          </div>
        </div>
      
      <div className="lower">
        <div className="img">
          <Image className="img-back" src={People} alt="" />
          <Image className="img-front" src={Card} alt="Iphone your cards" />
        </div>

        <div className="payment">
          <h1>Receive payment from <br />international bank details</h1>
          <div className="text">
            <Image className="card" src={Credit} alt="" />
            <p> Manage your payments online.<br />
              Mollis congue egestas egestas <br /> fermentum fames.</p>
            <Image className="wallet" src={Wallet} alt="" /> 
            <p className="textwallet"> A elementur and imperdiet enim,<br>
            </br>pretium etiam <br /> facilisi aenean quam mauris.</p>
          </div>
          <button className="button">Learn more <FontAwesomeIcon className="arrow" icon={faArrowRight} /></button>
        </div>
      </div>
    </div>
    </div>


  );
}
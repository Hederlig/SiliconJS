import Image from "next/image";
import Appstore from "./images/appstore.svg";
import Googleplay from "./images/googleplay.svg";
import Iphonebudget from "./images/iphone-mybudget_desktop.svg";
import Iphonecard from "./images/iphone-youcards_desktop.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';



import "./hero.css"

export default function Hero() {
    return (
        <div>
            <section className="hero">
                <div className="container">
                    <div className="headline">
                        <h1>Manage All Your Money in One App</h1>
                    </div>
                    <div className="content">
                        <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your
                            pocket.</p>
                        <div className="buttons">
                            <a className="btn-downloadapp" href="#"><Image src={Appstore} alt="Appstore" /></a>
                            <a className="btn-downloadapp" href="#"><Image src={Googleplay} alt="Googleplay" /></a>
                        </div>

                        <a className="discover-more" href="#">
                            <FontAwesomeIcon className="downarrow" icon={faChevronDown} />
                            <span className="btn-circle" href="#" >
                            
                            </span>
                            <span className="">Discover more</span>
                        </a>
                    </div>
                    <div className="images">
                        <Image className="img-back" src={Iphonebudget} alt="Iphone my Budget"/>
                        <Image className="img-front" src={Iphonecard}  alt="Iphone your cards"/>
                    </div>
                </div>
            </section>
        </div>
    );
}
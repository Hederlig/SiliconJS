import Image from "next/image";
import Iphone1 from "./images/iphone-work.png";
import Iphone2 from "./images/iphone-work2.svg";
import Iphone3 from "./images/iphone-work3.svg";
import "./info.css"

export default function Info() {
    return (
        <div className="Info">
            <div className="container">
                <h1>How Does It Work?</h1>
                <div className="Image">
                    <Image className="iphone2" src={Iphone2} alt="" />
                    <Image className="iphone1" src={Iphone1} alt="" />
                    <Image className="iphone3" src={Iphone3} alt="" />
                </div>
                <h1 className="mobile">Transfers to people from
                    your contact list</h1>
                <h1 className="tablet">Step 3. Transfers to people from your
                    contact list</h1>
                <h1 className="desktop">Latest transaction history</h1>
                <p>Proin volutpat mollis egestas. Nam luctus facilisis
                    ultrices. Pellentesque volutpat ligula est. Mattis
                    fermentum, at nec lacus.</p>
            </div>
        </div>
    );
}
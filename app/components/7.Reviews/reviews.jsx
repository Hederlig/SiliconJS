import Image from "next/image";
import Quotes from "./images/quotes.svg"
import Rating4 from "./images/rating4.svg"
import Female from "./images/female.svg"
import Rating5 from "./images/rating5.svg"
import Male from "./images/male.svg"
import "./reviews.css"

export default function Reviews() {
  return (
    <div className="Reviews">
      <div className="container">
        <h1>Clients are <br />Loving Our App</h1>
        <Image className="quote1" src={Quotes} alt="" />
        <div className="users">
          <Image className="star" src={Rating4} alt="" />
          <p className="text">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet
            posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit.
            Montes justo turpis sit amet.</p>
          <span className="profil">
            <Image src={Female} alt="" />
            <h5 className="name">Fannie Summers<p className="work">Designer</p>
            </h5>
          </span>
        </div>
        <Image className="quote" src={Quotes} alt="" />
        <div className="users">
          <Image className="star" src={Rating5} alt=""/>
          <p className="text">Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor.
            Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor
            tincidunt egestas eget nunc.</p>
          <span className="profil">
            <Image src={Male} alt=""/>
            <h5 className="name">Albert Flores <p className="work">Developer</p>
            </h5>
          </span>
        </div>

      </div>
    </div>
  );
}
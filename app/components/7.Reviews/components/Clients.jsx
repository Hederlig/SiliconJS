import StarRating from "./StarRating";
import Image from "next/image";


export default function Clients({item}) {
  return (
   
    <div >
      {/* <Image className="quote1" src={Quotes} alt="" /> */}
        <StarRating starRating={item.starRating} />
        <p className="text">{item.comment}</p>
        <span className="profil">
        <Image  width={44} height={44} src={item.avatarUrl} alt={item.author} />
        <h5 className="name">{item.author}<p className="work">{item.jobRole}</p>
        </h5>
      </span>
    </div>

  );
}



export default function Reviews() {
  return (
    <div className="Reviews">
      <div className="container">
        <h1>Clients are <br>Loving Our App</br></h1>
        <img className="quote1" src="images/quotes.svg"></img>
        <div className="users">
          <img className="star" src="images/rating4.svg"></img>
          <p className="text">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet
            posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit.
            Montes justo turpis sit amet.</p>
          <span className="profil">
            <img src="images/female.svg"></img>
            <h5 className="name">Fannie Summers<p className="work">Designer</p>
            </h5>
          </span>
        </div>
        <img className="quote" src="images/quotes.svg"></img>
        <div className="users">
          <img className="star" src="images/rating5.svg"></img>
          <p className="text">Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor.
            Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor
            tincidunt egestas eget nunc.</p>
          <span className="profil">
            <img src="images/male.svg"></img>
            <h5 className="name">Albert Flores <p className="work">Developer</p>
            </h5>
          </span>
        </div>

      </div>
    </div>
  );
}
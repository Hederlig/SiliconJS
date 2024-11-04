export default function Subscribe() {
  return (
    <div className="Subscribe">
      <div className="container">
        <img src="images/notification.svg"></img>
        <h1>Subscribe to our newsletter to stay <br>informed about latest updates</br></h1>
        <div className="subtext">
          <input className="textfield" placeholder="Your Email" id="email"></input>
          <button className="subbutton" onclick="alert('Not working')">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
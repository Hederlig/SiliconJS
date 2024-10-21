export default function Subscribe() {
  return (
    <div className="Subscribe">
      <div class="container">
        <img src="images/notification.svg"></img>
        <h1>Subscribe to our newsletter to stay <br>informed about latest updates</br></h1>
        <div class="subtext">
          <input class="textfield" placeholder="Your Email" id="email"></input>
          <button class="subbutton" onclick="alert('Not working')">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
export default function Hero() {
    return (
        <div className="Hero">
            <section id="hero">
                <div class="container">
                    <div class="headline">
                        <h1>Manage All Your Money in One App</h1>
                    </div>
                    <div class="content">
                        <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your
                            pocket.</p>
                        <div class="buttons">
                            <a class="btn-downloadapp" href="#"><img src="images/appstore.svg" alt=""></img></a>
                            <a class="btn-downloadapp" href="#"><img src="images/googleplay.svg" alt=""></img></a>
                        </div>

                        <a class="discover-more" href="#">
                            <span class="btn-circle" href="#">
                                <i class="fa-solid fa-chevron-down"></i>
                            </span>
                            <span class="">Discover more</span>
                        </a>
                    </div>
                    <div class="images">
                        <img class="img-back" src="images/iphone-mybudget_desktop.svg" alt="Iphone my Budget"></img>
                        <img class="img-front" src="images/iphone-youcards_desktop.svg" alt="Iphone your cards"></img>
                    </div>
                </div>
            </section>
        </div>
    );
}
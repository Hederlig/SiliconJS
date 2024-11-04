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
                            <a className="btn-downloadapp" href="#"><img src="images/appstore.svg" alt=""></img></a>
                            <a className="btn-downloadapp" href="#"><img src="images/googleplay.svg" alt=""></img></a>
                        </div>

                        <a className="discover-more" href="#">
                            <span className="btn-circle" href="#">
                                <i className="fa-solid fa-chevron-down"></i>
                            </span>
                            <span className="">Discover more</span>
                        </a>
                    </div>
                    <div className="images">
                        <img className="img-back" src="images/iphone-mybudget_desktop.svg" alt="Iphone my Budget"></img>
                        <img className="img-front" src="images/iphone-youcards_desktop.svg" alt="Iphone your cards"></img>
                    </div>
                </div>
            </section>
        </div>
    );
}
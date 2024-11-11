import Image from "next/image";
import Phonefeatuers from "./images/iphone-features.svg"
import Payment from "./images/payments.svg"
import Security from "./images/security.svg"
import Statistics from "./images/statistics.svg"
import Support from "./images/support.svg"
import Cashback from "./images/cashback.svg"
import Happy from "./images/happy.svg"
import "./features.css"

export default function Features() {
    return (
      <div className="Features">
         <div className="container">
                    <Image className="phonefeatures" src={Phonefeatuers} alt="" />
                    <div className="headline">
                        <h1>App Features</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Proin volutpat mollis egestas.
                            Nam luctus facilisis ultrices. Pellentesque
                            volutpat ligula est. Mattis fermentum, at nec
                            lacus.</p>
                    </div>
                    <div id="services">
                        <div id="services-1" className="services">
                            <Image src={Payment}a alt="" />
                            <h1>Easy Payments</h1>
                            <p>Id mollis consectetur congue egestas
                                egestas suspendisse blandit justo.</p>
                        </div>
                        <div id="services-1" className="services">
                            <Image src={Security} alt="" />
                            <h1>Data Security</h1>
                            <p>Augue pulvinar justo, fermentum
                                fames aliquam accumsan vestibulum
                                non.</p>
                        </div>
                        <div id="services-1" className="services">
                            <Image src={Statistics} alt="" />
                            <h1>Cost Statistics</h1>
                            <p>Mattis urna ultricies non amet, purus
                                in auctor non. Odio vulputate ac nibh.</p>
                        </div>
                        <div id="services-1" className="services">
                            <Image src={Support} alt="" />
                            <h1>Support 24/7</h1>
                            <p>A elementum, imperdiet enim, pretium
                                etiam facilisi in aenean quam mauris.</p>
                        </div>
                        <div id="services-1" className="services">
                            <Image src={Cashback} alt="" />
                            <h1>Regular Cashback</h1>
                            <p>Sit facilisis dolor arcu, fermentum
                                vestibulum arcu elementum imperdiet
                                eleifend.</p>
                        </div>
                        <div id="services-1" className="services">
                            <Image src={Happy} alt="" />
                            <h1>Top Standards</h1>
                            <p>Faucibus cursus maecenas lorem
                                cursus nibh. Sociis sit risus id. Sit
                                facilisis dolor arcu.</p>
                        </div>

                    </div>
                </div>
      </div>
    );
  }
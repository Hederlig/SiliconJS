import brand1 from "./images/brand-1.svg"
import brand2 from "./images/brand-2.svg"
import brand3 from "./images/brand-3.svg"
import brand4 from "./images/brand-4.svg"
import brand5 from "./images/brand-5.svg"
import brand6 from "./images/brand-6.svg"

import Image from "next/image";
import "./brand.css"

export default function Brands() {
    return (
      <div className="Brands">
                    <section className="brands">
                <div className="container">
                    <div className="brand-box" id="brand-1">
                        <Image src={brand1} alt=""/>
                    </div>
                    <div className="brand-box" id="brand-2">
                        <Image src={brand2} alt=""/>
                    </div>
                    <div className="brand-box" id="brand-3">
                        <Image src={brand3} alt=""/>
                    </div>
                    <div className="brand-box" id="brand-4">
                        <Image src={brand4} alt=""/>
                    </div>
                    <div className="brand-box" id="brand-5">
                        <Image src={brand5} alt=""/>
                    </div>
                    <div className="brand-box" id="brand-6">
                        <Image src={brand6} alt=""/>
                    </div>
                </div>
            </section>
      </div>
    );
  }
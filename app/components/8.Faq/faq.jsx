import Image from "next/image";
import Chat from "./images/chat.svg"
import Phone from "./images/phone.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import "./faq.css"

export default function Faq() {
    return (
        <div className="Faq">
            
                <div className="info">
                    <h1>Any questions? Check out the FAQs</h1>
                    <h5 >Still have unanswered questions and need to get in touch?</h5>
                    </div>
                    <div className="tele">
                        <span className="call">
                            <Image className="phoneIcon" src={Phone} alt=""/>
                            <p>Still have questions?</p>
                            <button className="phonebtn">Contact us <FontAwesomeIcon className="arrowRight" icon={faArrowRight} /></button>
                        </span>
                        <span className="chat">
                            <Image className="chatIcon"src={Chat} alt="" />
                            <p>Don't like phone calls?</p>
                            <button className="chatbtn">Contact us <FontAwesomeIcon className="arrowRight" icon={faArrowRight} /></button>
                        </span>
                    
                </div>
                <div className="accordion">
                    <details>
                        <summary className="accordion-1">Is any of my personal information stored in the App? <FontAwesomeIcon className="arrowDown" icon={faArrowDown} /></summary>
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
                            viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
                            velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem
                            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis
                            egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
                        </p>
                    </details>
                    <details>
                        <summary>What formats can I download my transaction history in?<FontAwesomeIcon className="arrowDown" icon={faArrowDown} /></summary>
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
                            viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
                            velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem
                            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis
                            egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    </details>
                    <details>
                        <summary>Can I schedule future transfers?<FontAwesomeIcon className="arrowDown" icon={faArrowDown} /></summary>
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
                            viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
                            velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem
                            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis
                            egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    </details>
                    <details>
                        <summary>When can I use Banking App services?<FontAwesomeIcon className="arrowDown" icon={faArrowDown} />
                        </summary>
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
                            viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
                            velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem
                            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis
                            egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    </details>
                    <details>
                        <summary>Can I create my own password that is easy for me to remember?<FontAwesomeIcon className="arrowDown" icon={faArrowDown} /></summary>
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
                            viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
                            velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem
                            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis
                            egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    </details>
                    <details>
                        <summary>What happens if I forget or lose my password?<FontAwesomeIcon className="arrowDown" icon={faArrowDown} /></summary>
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
                            viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
                            velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem
                            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis
                            egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    </details>
                    <div className="containerbutton">
                    <button className="button">Contact us now</button>
                    </div>
                </div>
            
        </div>
    );
}
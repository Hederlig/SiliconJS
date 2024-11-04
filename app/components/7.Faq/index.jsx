export default function Faq() {
    return (
        <div className="Faq">
            <div className="container">
                <div className="info">
                    <h1>Any questions?<br>Check out the FAQs</br></h1>
                    <h5>Still have unanswered questions and need to get <br> in touch?</br></h5>
                    <div className="tele">
                        <span className="call">
                            <img src="images/phone.svg"></img>
                            <p>Still have questions?</p>
                            <button className="phonebtn">Contact us <i className="fa-solid fa-arrow-right"></i></button>
                        </span>
                        <span className="chat">
                            <img src="images/chat.svg"></img>
                            <p>Don't like phone calls?</p>
                            <button className="chatbtn">Contact us <i className="fa-solid fa-arrow-right"></i></button>
                        </span>
                    </div>
                </div>
                <div className="accordion">
                    <details>
                        <summary>Is any of my personal information stored in the App? <i
                            className="fa-solid fa-chevron-down"></i></summary>
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
                            viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
                            velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem
                            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis
                            egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
                        </p>
                    </details>
                    <details>
                        <summary>What formats can I download my transaction history in?<i
                            className="fa-solid fa-chevron-down"></i></summary>
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
                            viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
                            velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem
                            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis
                            egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    </details>
                    <details>
                        <summary>Can I schedule future transfers?<i className="fa-solid fa-chevron-down"></i></summary>
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
                            viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
                            velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem
                            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis
                            egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    </details>
                    <details>
                        <summary>When can I use Banking App services?<i className="fa-solid fa-chevron-down"></i>
                        </summary>
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
                            viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
                            velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem
                            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis
                            egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    </details>
                    <details>
                        <summary>Can I create my own password that is easy for me to remember?<i
                            className="fa-solid fa-chevron-down"></i></summary>
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
                            viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
                            velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem
                            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis
                            egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    </details>
                    <details>
                        <summary>What happens if I forget or lose my password?<i
                            className="fa-solid fa-chevron-down"></i></summary>
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
                            viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
                            velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem
                            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis
                            egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    </details>


                </div>
            </div>
        </div>
    );
}
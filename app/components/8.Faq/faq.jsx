"use client";
import Image from "next/image";
import Chat from "./images/chat.svg"
import Phone from "./images/phone.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import "./faq.css"
import AccordionItem from "./components/Accordionitem";
import { useEffect, useState } from "react";

export default function Faq() {
    const [accordion, setAccordion] = useState([])

    const fetchAccordion = async () => {
        const res = await fetch("https://win24-assignment.azurewebsites.net/api/faq")
        const data = await res.json()
        setAccordion(data)
    }
    useEffect(() => {
        fetchAccordion()
    }, []);

    return (
        <div className="Faq">
            <div className="info">
                <h1>Any questions? Check out the FAQs</h1>
                <h5 >Still have unanswered questions and need to get in touch?</h5>
            </div>
            <div className="tele">
                <span className="call">
                    <Image className="phoneIcon" src={Phone} alt="" />
                    <p>Still have questions?</p>
                    <button className="phonebtn">Contact us <FontAwesomeIcon className="arrowRight" icon={faArrowRight} /></button>
                </span>
                <span className="chat">
                    <Image className="chatIcon" src={Chat} alt="" />
                    <p>Don't like phone calls?</p>
                    <button className="chatbtn">Contact us <FontAwesomeIcon className="arrowRight" icon={faArrowRight} /></button>
                </span>
            </div>
            <div className="accordion">

                {
                    accordion.map(item => (
                        <AccordionItem key={item.id} item={item} />
                    ))
                }

            </div>
        </div>
    );
}
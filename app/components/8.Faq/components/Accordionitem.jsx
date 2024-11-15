import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export default function AccordionItem({ item }) {
    return (
        <div className="accordion-item">
            <details>
                <summary>
                <h5>{item.title}</h5>
                <FontAwesomeIcon className="arrowDown" icon={faArrowDown} />
                </summary>
                <p>{item.content}</p>
            </details>
        </div>
    );
}

